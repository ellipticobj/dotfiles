"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PythonExecutor = exports.PythonState = void 0;
const python_shell_1 = require("python-shell");
const os_1 = require("os");
const crypto_1 = require("crypto");
/**
 * Starting = Starting or restarting.
 * Ending = Process is exiting.
 * Executing = Executing inputted code.
 * DirtyFree = evaluator may have been polluted by side-effects from previous code, but is free for more code.
 * FreshFree = evaluator is ready for the first run of code
 */
var PythonState;
(function (PythonState) {
    PythonState[PythonState["Starting"] = 0] = "Starting";
    PythonState[PythonState["Ending"] = 1] = "Ending";
    PythonState[PythonState["Executing"] = 2] = "Executing";
    PythonState[PythonState["DirtyFree"] = 3] = "DirtyFree";
    PythonState[PythonState["FreshFree"] = 4] = "FreshFree";
})(PythonState = exports.PythonState || (exports.PythonState = {}));
class PythonExecutor {
    /**
     * starts python_evaluator.py
     * @param options Process / Python options. If not specified sensible defaults are inferred.
     */
    constructor(options = {}) {
        this.options = options;
        this.state = PythonState.Starting;
        if (!options.env)
            options.env = {};
        if (process.platform == "darwin") {
            // needed for Mac to prevent ENOENT
            options.env.PATH = ["/usr/local/bin", process.env.PATH].join(":");
        }
        else if (process.platform == "win32") {
            // needed for windows for encoding to match what it would be in terminal
            // https://docs.python.org/3/library/sys.html#sys.stdin
            options.env.PYTHONIOENCODING = "utf8";
        }
        // python-shell buffers untill newline is reached in text mode
        // so we use binary instead to skip python-shell buffering
        // this lets user flush without newline
        this.options.mode = 'binary';
        this.options.stdio = ['pipe', 'pipe', 'pipe', 'pipe'];
        if (!options.pythonPath)
            this.options.pythonPath = python_shell_1.PythonShell.defaultPythonPath;
        if (!options.scriptPath)
            this.options.scriptPath = PythonExecutor.areplPythonBackendFolderPath;
        this.evaluatorName = crypto_1.randomBytes(16).toString('hex');
    }
    /**
     * does not do anything if program is currently executing code
     */
    execCode(code) {
        if (this.state == PythonState.Executing) {
            console.error('Incoming code detected while process is still executing. \
			This should never happen');
        }
        this.state = PythonState.Executing;
        this.startTime = Date.now();
        this.pyshell.send(JSON.stringify(code) + os_1.EOL);
    }
    /**
     * @param {string} message
     */
    sendStdin(message) {
        this.pyshell.send(message);
    }
    /**
     * kills python process and restarts.  Force-kills if necessary after 50ms.
     * After process restarts the callback passed in is invoked
     */
    restart(callback = () => { }) {
        this.state = PythonState.Ending;
        // register callback for restart
        // using childProcess callback instead of pyshell callback
        // (pyshell callback only happens when process exits voluntarily)
        this.pyshell.childProcess.on('exit', () => {
            this.start(callback);
        });
        this.stop();
    }
    /**
     * Kills python process.  Force-kills if necessary after 50ms.
     * You can check python_evaluator.running to see if process is dead yet
     */
    stop(kill_immediately = false) {
        this.state = PythonState.Ending;
        const kill_signal = kill_immediately ? 'SIGKILL' : 'SIGTERM';
        this.pyshell.childProcess.kill(kill_signal);
        if (!kill_immediately) {
            // pyshell has 50 ms to die gracefully
            setTimeout(() => {
                if (this.state == PythonState.Ending) {
                    // python didn't respect the SIGTERM, force-kill it
                    this.pyshell.childProcess.kill('SIGKILL');
                }
            }, 50);
        }
    }
    /**
     * starts python_evaluator.py. Will NOT WORK with python 2
     */
    start(finishedStartingCallback) {
        this.state = PythonState.Starting;
        console.log("Starting Python...");
        this.finishedStartingCallback = finishedStartingCallback;
        this.startTime = Date.now();
        this.pyshell = new python_shell_1.PythonShell('arepl_python_evaluator.py', this.options);
        const resultPipe = this.pyshell.childProcess.stdio[3];
        const newlineTransformer = new python_shell_1.NewlineTransformer();
        resultPipe.pipe(newlineTransformer).on('data', this.handleResult.bind(this));
        this.pyshell.stdout.on('data', (message) => {
            this.onPrint(message.toString());
        });
        this.pyshell.stderr.on('data', (log) => {
            this.onStderr(log.toString());
        });
    }
    /**
     * Overwrite this with your own handler.
     * is called when program fails or completes
     */
    onResult(foo) { }
    /**
     * Overwrite this with your own handler.
     * Is called when program prints
     * @param {string} foo
     */
    onPrint(foo) { }
    /**
     * Overwrite this with your own handler.
     * Is called when program logs stderr
     * @param {string} foo
     */
    onStderr(foo) { }
    /**
     * handles pyshell results and calls onResult / onPrint
     * @param {string} results
     */
    handleResult(results) {
        let pyResult = {
            userError: null,
            userErrorMsg: "",
            userVariables: {},
            execTime: 0,
            totalTime: 0,
            totalPyTime: 0,
            internalError: "",
            caller: "",
            lineno: -1,
            done: true,
            startResult: false,
            evaluatorName: this.evaluatorName
        };
        try {
            pyResult = JSON.parse(results);
            if (pyResult.startResult) {
                console.log(`Finished starting in ${Date.now() - this.startTime}`);
                this.state = PythonState.FreshFree;
                this.finishedStartingCallback();
                return;
            }
            if (pyResult['done'] == true) {
                this.state = PythonState.DirtyFree;
            }
            pyResult.execTime = pyResult.execTime * 1000; // convert into ms
            pyResult.totalPyTime = pyResult.totalPyTime * 1000;
            //@ts-ignore pyResult.userVariables is sent to as string, we convert to object
            pyResult.userVariables = JSON.parse(pyResult.userVariables);
            //@ts-ignore pyResult.userError is sent to as string, we convert to object
            pyResult.userError = pyResult.userError ? JSON.parse(pyResult.userError) : {};
            if (pyResult.userErrorMsg) {
                pyResult.userErrorMsg = this.formatPythonException(pyResult.userErrorMsg);
            }
            pyResult.totalTime = Date.now() - this.startTime;
            this.onResult(pyResult);
        }
        catch (err) {
            if (err instanceof Error) {
                err.message = err.message + "\nresults: " + results;
            }
            throw err;
        }
    }
    /**
     * checks syntax without executing code
     * @param {string} code
     * @returns {Promise} rejects w/ stderr if syntax failure
     */
    checkSyntax(code) {
        return __awaiter(this, void 0, void 0, function* () {
            return python_shell_1.PythonShell.checkSyntax(code);
        });
    }
    /**
     * gets rid of unnecessary File "<string>" message in exception
     * @example err:
     * Traceback (most recent call last):\n  File "<string>", line 1, in <module>\nNameError: name \'x\' is not defined\n
     */
    formatPythonException(err) {
        //replace File "<string>" (pointless)
        err = err.replace(/File \"<string>\", /g, "");
        return err;
    }
}
exports.PythonExecutor = PythonExecutor;
PythonExecutor.areplPythonBackendFolderPath = __dirname + '/python/';
//# sourceMappingURL=PythonExecutor.js.map