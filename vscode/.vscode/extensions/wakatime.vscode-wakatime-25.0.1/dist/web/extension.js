/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogLevel = exports.COMMAND_STATUS_BAR_ENABLED = exports.COMMAND_STATUS_BAR_CODING_ACTIVITY = exports.COMMAND_PROXY = exports.COMMAND_LOG_FILE = exports.COMMAND_DISABLE = exports.COMMAND_DEBUG = exports.COMMAND_DASHBOARD = exports.COMMAND_CONFIG_FILE = exports.COMMAND_API_URL = exports.COMMAND_API_KEY = void 0;
exports.COMMAND_API_KEY = 'wakatime.apikey';
exports.COMMAND_API_URL = 'wakatime.apiurl';
exports.COMMAND_CONFIG_FILE = 'wakatime.config_file';
exports.COMMAND_DASHBOARD = 'wakatime.dashboard';
exports.COMMAND_DEBUG = 'wakatime.debug';
exports.COMMAND_DISABLE = 'wakatime.disable';
exports.COMMAND_LOG_FILE = 'wakatime.log_file';
exports.COMMAND_PROXY = 'wakatime.proxy';
exports.COMMAND_STATUS_BAR_CODING_ACTIVITY = 'wakatime.status_bar_coding_activity';
exports.COMMAND_STATUS_BAR_ENABLED = 'wakatime.status_bar_enabled';
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const constants_1 = __webpack_require__(2);
class Logger {
    constructor(level) {
        this.setLevel(level);
    }
    getLevel() {
        return this.level;
    }
    setLevel(level) {
        this.level = level;
    }
    log(level, msg) {
        if (level >= this.level) {
            msg = `[WakaTime][${constants_1.LogLevel[level]}] ${msg}`;
            if (level == constants_1.LogLevel.DEBUG)
                console.log(msg);
            if (level == constants_1.LogLevel.INFO)
                console.info(msg);
            if (level == constants_1.LogLevel.WARN)
                console.warn(msg);
            if (level == constants_1.LogLevel.ERROR)
                console.error(msg);
        }
    }
    debug(msg) {
        this.log(constants_1.LogLevel.DEBUG, msg);
    }
    info(msg) {
        this.log(constants_1.LogLevel.INFO, msg);
    }
    warn(msg) {
        this.log(constants_1.LogLevel.WARN, msg);
    }
    warnException(msg) {
        if (msg.message !== undefined) {
            this.log(constants_1.LogLevel.WARN, msg.message);
        }
    }
    error(msg) {
        this.log(constants_1.LogLevel.ERROR, msg);
    }
    errorException(msg) {
        if (msg.message !== undefined) {
            this.log(constants_1.LogLevel.ERROR, msg.message);
        }
    }
}
exports.Logger = Logger;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WakaTime = void 0;
const tslib_1 = __webpack_require__(5);
const vscode = __webpack_require__(1);
const constants_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(6);
class WakaTime {
    constructor(logger, config) {
        this.statusBar = undefined;
        this.statusBarTeamYou = undefined;
        this.statusBarTeamOther = undefined;
        this.lastHeartbeat = 0;
        this.lastDebug = false;
        this.lastCompile = false;
        this.dedupe = {};
        this.debounceTimeoutId = null;
        this.debounceMs = 50;
        this.fetchTodayInterval = 60000;
        this.lastFetchToday = 0;
        this.disabled = true;
        this.isCompiling = false;
        this.isDebugging = false;
        this.teamDevsForFileCache = {};
        this.lastApiKeyPrompted = 0;
        this.logger = logger;
        this.config = config;
    }
    initialize() {
        if (this.config.get('wakatime.debug') == 'true') {
            this.logger.setLevel(constants_1.LogLevel.DEBUG);
        }
        let extension = vscode.extensions.getExtension('WakaTime.vscode-wakatime');
        this.extension = (extension != undefined && extension.packageJSON) || { version: '0.0.0' };
        this.agentName = utils_1.Utils.getEditorName();
        this.disabled = this.config.get('wakatime.disabled') === 'true';
        if (this.disabled) {
            this.dispose();
            return;
        }
        this.initializeDependencies();
    }
    dispose() {
        var _a, _b, _c, _d;
        (_a = this.statusBar) === null || _a === void 0 ? void 0 : _a.dispose();
        (_b = this.statusBarTeamYou) === null || _b === void 0 ? void 0 : _b.dispose();
        (_c = this.statusBarTeamOther) === null || _c === void 0 ? void 0 : _c.dispose();
        (_d = this.disposable) === null || _d === void 0 ? void 0 : _d.dispose();
    }
    initializeDependencies() {
        this.logger.debug(`Initializing WakaTime v${this.extension.version}`);
        this.statusBar = vscode.window.createStatusBarItem('com.wakatime.statusbar', vscode.StatusBarAlignment.Left, 3);
        this.statusBar.name = 'WakaTime';
        this.statusBar.command = constants_1.COMMAND_DASHBOARD;
        this.statusBarTeamYou = vscode.window.createStatusBarItem('com.wakatime.teamyou', vscode.StatusBarAlignment.Left, 2);
        this.statusBarTeamYou.name = 'WakaTime Top dev';
        this.statusBarTeamOther = vscode.window.createStatusBarItem('com.wakatime.teamother', vscode.StatusBarAlignment.Left, 1);
        this.statusBarTeamOther.name = 'WakaTime Team Total';
        const showStatusBar = this.config.get('wakatime.status_bar_enabled');
        this.showStatusBar = showStatusBar !== 'false';
        const showStatusBarTeam = this.config.get('wakatime.status_bar_team');
        this.showStatusBarTeam = showStatusBarTeam !== 'false';
        this.setStatusBarVisibility(this.showStatusBar);
        this.updateStatusBarText('WakaTime Initializing...');
        this.checkApiKey();
        this.setupEventListeners();
        this.logger.debug('WakaTime initialized.');
        const showCodingActivity = this.config.get('wakatime.status_bar_coding_activity');
        this.showCodingActivity = showCodingActivity !== 'false';
        this.updateStatusBarText();
        this.updateStatusBarTooltip('WakaTime: Initialized');
        this.getCodingActivity();
    }
    updateStatusBarText(text) {
        if (!this.statusBar)
            return;
        if (!text) {
            this.statusBar.text = '$(clock)';
        }
        else {
            this.statusBar.text = '$(clock) ' + text;
        }
    }
    updateStatusBarTooltip(tooltipText) {
        if (!this.statusBar)
            return;
        this.statusBar.tooltip = tooltipText;
    }
    updateTeamStatusBarTextForCurrentUser(text) {
        if (!this.statusBarTeamYou)
            return;
        if (!text) {
            this.statusBarTeamYou.text = '';
        }
        else {
            this.statusBarTeamYou.text = text;
        }
    }
    updateStatusBarTooltipForCurrentUser(tooltipText) {
        if (!this.statusBarTeamYou)
            return;
        this.statusBarTeamYou.tooltip = tooltipText;
    }
    updateTeamStatusBarTextForOther(text) {
        if (!this.statusBarTeamOther)
            return;
        if (!text) {
            this.statusBarTeamOther.text = '';
        }
        else {
            this.statusBarTeamOther.text = text;
        }
    }
    updateStatusBarTooltipForOther(tooltipText) {
        if (!this.statusBarTeamOther)
            return;
        this.statusBarTeamOther.tooltip = tooltipText;
    }
    statusBarShowingError() {
        if (!this.statusBar)
            return false;
        return this.statusBar.text.indexOf('Error') != -1;
    }
    promptForApiKey(hidden = true) {
        let defaultVal = this.config.get('wakatime.apiKey') || '';
        if (utils_1.Utils.apiKeyInvalid(defaultVal))
            defaultVal = '';
        let promptOptions = {
            prompt: 'WakaTime Api Key',
            placeHolder: 'Enter your api key from https://wakatime.com/api-key',
            value: defaultVal,
            ignoreFocusOut: true,
            password: hidden,
            validateInput: utils_1.Utils.apiKeyInvalid.bind(this),
        };
        vscode.window.showInputBox(promptOptions).then((val) => {
            if (val != undefined) {
                let invalid = utils_1.Utils.apiKeyInvalid(val);
                if (!invalid)
                    this.config.update('wakatime.apiKey', val);
                else
                    vscode.window.setStatusBarMessage(invalid);
            }
            else
                vscode.window.setStatusBarMessage('WakaTime api key not provided');
        });
    }
    promptForApiUrl() {
        const defaultVal = this.config.get('wakatime.apiUrl') || '';
        let promptOptions = {
            prompt: 'WakaTime Api Url (Defaults to https://api.wakatime.com/api/v1)',
            placeHolder: 'https://api.wakatime.com/api/v1',
            value: defaultVal,
            ignoreFocusOut: true,
        };
        vscode.window.showInputBox(promptOptions).then((val) => {
            if (val) {
                this.config.update('wakatime.apiUrl', val);
            }
        });
    }
    promptForDebug() {
        let defaultVal = this.config.get('wakatime.debug') || '';
        if (!defaultVal || defaultVal !== 'true')
            defaultVal = 'false';
        let items = ['true', 'false'];
        let promptOptions = {
            placeHolder: `true or false (current value \"${defaultVal}\")`,
            value: defaultVal,
            ignoreFocusOut: true,
        };
        vscode.window.showQuickPick(items, promptOptions).then((newVal) => {
            if (newVal == null)
                return;
            this.config.update('wakatime.debug', newVal);
            if (newVal === 'true') {
                this.logger.setLevel(constants_1.LogLevel.DEBUG);
                this.logger.debug('Debug enabled');
            }
            else {
                this.logger.setLevel(constants_1.LogLevel.INFO);
            }
        });
    }
    promptToDisable() {
        const previousValue = this.disabled;
        let currentVal = this.config.get('wakatime.disabled');
        if (!currentVal || currentVal !== 'true')
            currentVal = 'false';
        let items = ['disable', 'enable'];
        const helperText = currentVal === 'true' ? 'disabled' : 'enabled';
        let promptOptions = {
            placeHolder: `disable or enable (extension is currently "${helperText}")`,
            ignoreFocusOut: true,
        };
        vscode.window.showQuickPick(items, promptOptions).then((newVal) => {
            if (newVal !== 'enable' && newVal !== 'disable')
                return;
            this.disabled = newVal === 'disable';
            if (this.disabled != previousValue) {
                if (this.disabled) {
                    this.config.update('wakatime.disabled', 'true');
                    this.logger.debug('Extension disabled, will not report code stats to dashboard');
                    this.dispose();
                }
                else {
                    this.config.update('wakatime.disabled', 'false');
                    this.initializeDependencies();
                }
            }
        });
    }
    promptStatusBarIcon() {
        let defaultVal = this.config.get('wakatime.status_bar_enabled') || '';
        if (!defaultVal || defaultVal !== 'false')
            defaultVal = 'true';
        let items = ['true', 'false'];
        let promptOptions = {
            placeHolder: `true or false (current value \"${defaultVal}\")`,
            value: defaultVal,
            ignoreFocusOut: true,
        };
        vscode.window.showQuickPick(items, promptOptions).then((newVal) => {
            if (newVal !== 'true' && newVal !== 'false')
                return;
            this.config.update('wakatime.status_bar_enabled', newVal);
            this.showStatusBar = newVal === 'true';
            this.setStatusBarVisibility(this.showStatusBar);
        });
    }
    promptStatusBarCodingActivity() {
        let defaultVal = this.config.get('wakatime.status_bar_coding_activity') || '';
        if (!defaultVal || defaultVal !== 'false')
            defaultVal = 'true';
        let items = ['true', 'false'];
        let promptOptions = {
            placeHolder: `true or false (current value \"${defaultVal}\")`,
            value: defaultVal,
            ignoreFocusOut: true,
        };
        vscode.window.showQuickPick(items, promptOptions).then((newVal) => {
            if (newVal !== 'true' && newVal !== 'false')
                return;
            this.config.update('wakatime.status_bar_coding_activity', newVal);
            if (newVal === 'true') {
                this.logger.debug('Coding activity in status bar has been enabled');
                this.showCodingActivity = true;
                this.getCodingActivity();
            }
            else {
                this.logger.debug('Coding activity in status bar has been disabled');
                this.showCodingActivity = false;
                if (!this.statusBarShowingError()) {
                    this.updateStatusBarText();
                }
            }
        });
    }
    openDashboardWebsite() {
        const url = this.getApiUrl().replace('/api/v1', '').replace('://api.', '://');
        vscode.env.openExternal(vscode.Uri.parse(url));
    }
    checkApiKey() {
        this.hasApiKey((hasApiKey) => {
            if (!hasApiKey)
                this.promptForApiKey();
        });
    }
    hasApiKey(callback) {
        const apiKey = this.config.get('wakatime.apiKey') || '';
        callback(!utils_1.Utils.apiKeyInvalid(apiKey));
    }
    setStatusBarVisibility(isVisible) {
        var _a, _b, _c, _d, _f, _g;
        if (isVisible) {
            (_a = this.statusBar) === null || _a === void 0 ? void 0 : _a.show();
            (_b = this.statusBarTeamYou) === null || _b === void 0 ? void 0 : _b.show();
            (_c = this.statusBarTeamOther) === null || _c === void 0 ? void 0 : _c.show();
            this.logger.debug('Status bar icon enabled.');
        }
        else {
            (_d = this.statusBar) === null || _d === void 0 ? void 0 : _d.hide();
            (_f = this.statusBarTeamYou) === null || _f === void 0 ? void 0 : _f.hide();
            (_g = this.statusBarTeamOther) === null || _g === void 0 ? void 0 : _g.hide();
            this.logger.debug('Status bar icon disabled.');
        }
    }
    setupEventListeners() {
        let subscriptions = [];
        vscode.window.onDidChangeTextEditorSelection(this.onChangeSelection, this, subscriptions);
        vscode.window.onDidChangeActiveTextEditor(this.onChangeTab, this, subscriptions);
        vscode.workspace.onDidSaveTextDocument(this.onSave, this, subscriptions);
        vscode.tasks.onDidStartTask(this.onDidStartTask, this, subscriptions);
        vscode.tasks.onDidEndTask(this.onDidEndTask, this, subscriptions);
        vscode.debug.onDidChangeActiveDebugSession(this.onDebuggingChanged, this, subscriptions);
        vscode.debug.onDidChangeBreakpoints(this.onDebuggingChanged, this, subscriptions);
        vscode.debug.onDidStartDebugSession(this.onDidStartDebugSession, this, subscriptions);
        vscode.debug.onDidTerminateDebugSession(this.onDidTerminateDebugSession, this, subscriptions);
        this.disposable = vscode.Disposable.from(...subscriptions);
    }
    onDebuggingChanged() {
        this.onEvent(false);
    }
    onDidStartDebugSession() {
        this.isDebugging = true;
        this.onEvent(false);
    }
    onDidTerminateDebugSession() {
        this.isDebugging = false;
        this.onEvent(false);
    }
    onDidStartTask(e) {
        if (e.execution.task.isBackground)
            return;
        if (e.execution.task.detail && e.execution.task.detail.indexOf('watch') !== -1)
            return;
        this.isCompiling = true;
        this.onEvent(false);
    }
    onDidEndTask() {
        this.isCompiling = false;
        this.onEvent(false);
    }
    onChangeSelection(e) {
        if (e.kind === vscode.TextEditorSelectionChangeKind.Command)
            return;
        this.onEvent(false);
    }
    onChangeTab(_e) {
        this.onEvent(false);
    }
    onSave(_e) {
        this.onEvent(true);
    }
    onEvent(isWrite) {
        clearTimeout(this.debounceTimeoutId);
        this.debounceTimeoutId = setTimeout(() => {
            if (this.disabled)
                return;
            let editor = vscode.window.activeTextEditor;
            if (editor) {
                let doc = editor.document;
                if (doc) {
                    doc.languageId;
                    let file = doc.fileName;
                    if (file) {
                        if (this.currentlyFocusedFile !== file) {
                            this.updateTeamStatusBarFromJson();
                            this.updateTeamStatusBar(doc);
                        }
                        let time = Date.now();
                        if (isWrite ||
                            this.enoughTimePassed(time) ||
                            this.lastFile !== file ||
                            this.lastDebug !== this.isDebugging ||
                            this.lastCompile !== this.isCompiling) {
                            this.sendHeartbeat(doc, time, editor.selection.start, isWrite, this.isCompiling, this.isDebugging);
                            this.lastFile = file;
                            this.lastHeartbeat = time;
                            this.lastDebug = this.isDebugging;
                            this.lastCompile = this.isCompiling;
                        }
                    }
                }
            }
        }, this.debounceMs);
    }
    sendHeartbeat(doc, time, selection, isWrite, isCompiling, isDebugging) {
        this.hasApiKey((hasApiKey) => {
            if (hasApiKey) {
                this._sendHeartbeat(doc, time, selection, isWrite, isCompiling, isDebugging);
            }
            else {
                this.promptForApiKey();
            }
        });
    }
    _sendHeartbeat(doc, time, selection, isWrite, isCompiling, isDebugging) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let file = doc.fileName;
            if (utils_1.Utils.isRemoteUri(doc.uri)) {
                file = `${doc.uri.authority}${doc.uri.path}`;
                file = file.replace('ssh-remote+', 'ssh://');
            }
            if (isWrite && this.isDuplicateHeartbeat(file, time, selection))
                return;
            const payload = {
                type: 'file',
                entity: file,
                time: Date.now() / 1000,
                lineno: String(selection.line + 1),
                cursorpos: String(selection.character + 1),
                lines: String(doc.lineCount),
                is_write: isWrite,
                plugin: this.getPlugin(),
            };
            const project = this.getProjectName();
            if (project)
                payload['project'] = project;
            const language = this.getLanguage(doc);
            if (language)
                payload['language'] = language;
            const folder = this.getProjectFolder(doc.uri);
            if (folder && file.indexOf(folder) === 0) {
                payload['project_root_count'] = this.countSlashesInPath(folder);
            }
            if (isDebugging) {
                payload['category'] = 'debugging';
            }
            else if (isCompiling) {
                payload['category'] = 'building';
            }
            else if (utils_1.Utils.isPullRequest(doc.uri)) {
                payload['category'] = 'code reviewing';
            }
            this.logger.debug(`Sending heartbeat: ${JSON.stringify(payload)}`);
            const apiKey = this.config.get('wakatime.apiKey');
            const apiUrl = this.getApiUrl();
            const url = `${apiUrl}/users/current/heartbeats?api_key=${apiKey}`;
            try {
                const response = yield fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Machine-Name': vscode.env.appHost,
                    },
                    body: JSON.stringify(payload),
                });
                const parsedJSON = yield response.json();
                if (response.status == 200 || response.status == 201 || response.status == 202) {
                    if (this.showStatusBar)
                        this.getCodingActivity();
                }
                else {
                    this.logger.warn(`API Error ${response.status}: ${parsedJSON}`);
                    if (response && response.status == 401) {
                        let error_msg = 'Invalid WakaTime Api Key';
                        if (this.showStatusBar) {
                            this.updateStatusBarText('WakaTime Error');
                            this.updateStatusBarTooltip(`WakaTime: ${error_msg}`);
                        }
                        this.logger.error(error_msg);
                        let now = Date.now();
                        if (this.lastApiKeyPrompted < now - 86400000) {
                            this.promptForApiKey(false);
                            this.lastApiKeyPrompted = now;
                        }
                    }
                    else {
                        let error_msg = `Error sending heartbeat (${response.status}); Check your browser console for more details.`;
                        if (this.showStatusBar) {
                            this.updateStatusBarText('WakaTime Error');
                            this.updateStatusBarTooltip(`WakaTime: ${error_msg}`);
                        }
                        this.logger.error(error_msg);
                    }
                }
            }
            catch (ex) {
                this.logger.warn(`API Error: ${ex}`);
                let error_msg = `Error sending heartbeat; Check your browser console for more details.`;
                if (this.showStatusBar) {
                    this.updateStatusBarText('WakaTime Error');
                    this.updateStatusBarTooltip(`WakaTime: ${error_msg}`);
                }
                this.logger.error(error_msg);
            }
        });
    }
    getCodingActivity() {
        if (!this.showStatusBar)
            return;
        const cutoff = Date.now() - this.fetchTodayInterval;
        if (this.lastFetchToday > cutoff)
            return;
        this.lastFetchToday = Date.now();
        this.hasApiKey((hasApiKey) => {
            if (!hasApiKey)
                return;
            this._getCodingActivity();
        });
    }
    _getCodingActivity() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug('Fetching coding activity for Today from api.');
            const apiKey = this.config.get('wakatime.apiKey');
            const apiUrl = this.getApiUrl();
            const url = `${apiUrl}/users/current/statusbar/today?api_key=${apiKey}`;
            try {
                const response = yield fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': this.agentName + '/' + vscode.version + ' vscode-wakatime/' + this.extension.version,
                    },
                });
                const parsedJSON = yield response.json();
                if (response.status == 200) {
                    this.config.get('wakatime.status_bar_coding_activity');
                    if (this.showStatusBar) {
                        if (parsedJSON.data)
                            this.hasTeamFeatures = parsedJSON.data.has_team_features;
                        let output = parsedJSON.data.grand_total.text;
                        if (this.config.get('wakatime.status_bar_hide_categories') != 'true' &&
                            parsedJSON.data.categories.length > 1) {
                            output = parsedJSON.data.categories.map((x) => x.text + ' ' + x.name).join(', ');
                        }
                        if (output && output.trim()) {
                            if (this.showCodingActivity) {
                                this.updateStatusBarText(output.trim());
                                this.updateStatusBarTooltip('WakaTime: Today’s coding time. Click to visit dashboard.');
                            }
                            else {
                                this.updateStatusBarText();
                                this.updateStatusBarTooltip(output.trim());
                            }
                        }
                        else {
                            this.updateStatusBarText();
                            this.updateStatusBarTooltip('WakaTime: Calculating time spent today in background...');
                        }
                        this.updateTeamStatusBar();
                    }
                }
                else {
                    this.logger.warn(`API Error ${response.status}: ${parsedJSON}`);
                    if (response && response.status == 401) {
                        let error_msg = 'Invalid WakaTime Api Key';
                        if (this.showStatusBar) {
                            this.updateStatusBarText('WakaTime Error');
                            this.updateStatusBarTooltip(`WakaTime: ${error_msg}`);
                        }
                        this.logger.error(error_msg);
                    }
                    else {
                        let error_msg = `Error fetching code stats for status bar (${response.status}); Check your browser console for more details.`;
                        this.logger.debug(error_msg);
                    }
                }
            }
            catch (ex) {
                this.logger.warn(`API Error: ${ex}`);
            }
        });
    }
    updateTeamStatusBar(doc) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.showStatusBarTeam)
                return;
            if (!this.hasTeamFeatures)
                return;
            if (!doc) {
                doc = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document;
                if (!doc)
                    return;
            }
            let file = doc.fileName;
            if (utils_1.Utils.isRemoteUri(doc.uri)) {
                file = `${doc.uri.authority}${doc.uri.path}`;
                file = file.replace('ssh-remote+', 'ssh://');
            }
            this.currentlyFocusedFile = file;
            if (this.teamDevsForFileCache[file]) {
                this.updateTeamStatusBarFromJson(this.teamDevsForFileCache[file]);
                return;
            }
            this.logger.debug('Fetching devs for currently focused file from api.');
            const apiKey = this.config.get('wakatime.apiKey');
            const apiUrl = this.getApiUrl();
            const url = `${apiUrl}/users/current/file_experts?api_key=${apiKey}`;
            const payload = {
                entity: file,
                plugin: this.agentName + '/' + vscode.version + ' vscode-wakatime/' + this.extension.version,
            };
            const project = this.getProjectName();
            if (!project)
                return;
            payload['project'] = project;
            const folder = this.getProjectFolder(doc.uri);
            if (!folder || file.indexOf(folder) !== 0)
                return;
            payload['project_root_count'] = this.countSlashesInPath(folder);
            try {
                const response = yield fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': this.agentName + '/' + vscode.version + ' vscode-wakatime/' + this.extension.version,
                    },
                    body: JSON.stringify(payload),
                });
                const parsedJSON = yield response.json();
                if (response.status == 200) {
                    const devs = {
                        you: null,
                        other: null,
                    };
                    if (parsedJSON.data) {
                        const currentUser = parsedJSON.data.find((dev) => dev.user.is_current_user);
                        let topDev = parsedJSON.data[0];
                        if (topDev.user.is_current_user) {
                            if (parsedJSON.data.length > 1) {
                                topDev = parsedJSON.data[1];
                            }
                            else {
                                topDev = null;
                            }
                        }
                        devs.you = currentUser;
                        devs.other = topDev;
                        this.teamDevsForFileCache[file] = devs;
                    }
                    if (file !== this.currentlyFocusedFile)
                        return;
                    this.config.get('wakatime.status_bar_coding_activity');
                    if (this.showStatusBar) {
                        this.updateTeamStatusBarFromJson(devs);
                    }
                }
                else {
                    this.updateTeamStatusBarTextForCurrentUser();
                    this.updateTeamStatusBarTextForOther();
                    this.logger.warn(`API Error ${response.status}: ${parsedJSON}`);
                    if (response && response.status == 401) {
                        this.logger.error('Invalid WakaTime Api Key');
                    }
                    else {
                        let error_msg = `Error fetching devs for currently focused file (${response.status}); Check your browser console for more details.`;
                        this.logger.debug(error_msg);
                    }
                }
            }
            catch (ex) {
                this.logger.warn(`API Error: ${ex}`);
            }
        });
    }
    updateTeamStatusBarFromJson(jsonData) {
        if (!jsonData) {
            this.updateTeamStatusBarTextForCurrentUser();
            this.updateTeamStatusBarTextForOther();
            return;
        }
        const you = jsonData.you;
        const other = jsonData.other;
        if (you) {
            this.updateTeamStatusBarTextForCurrentUser('You: ' + you.total.text);
            this.updateStatusBarTooltipForCurrentUser('Your total time spent in this file');
        }
        else {
            this.updateTeamStatusBarTextForCurrentUser();
        }
        if (other) {
            this.updateTeamStatusBarTextForOther(other.user.name + ': ' + other.total.text);
            this.updateStatusBarTooltipForOther(other.user.long_name + '’s total time spent in this file');
        }
        else {
            this.updateTeamStatusBarTextForOther();
        }
    }
    enoughTimePassed(time) {
        return this.lastHeartbeat + 120000 < time;
    }
    isDuplicateHeartbeat(file, time, selection) {
        let duplicate = false;
        let minutes = 30;
        let milliseconds = minutes * 60000;
        if (this.dedupe[file] &&
            this.dedupe[file].lastHeartbeatAt + milliseconds < time &&
            this.dedupe[file].selection.line == selection.line &&
            this.dedupe[file].selection.character == selection.character) {
            duplicate = true;
        }
        this.dedupe[file] = {
            selection: selection,
            lastHeartbeatAt: time,
        };
        return duplicate;
    }
    getLanguage(doc) {
        return doc.languageId || '';
    }
    getProjectName() {
        return vscode.workspace.name || '';
    }
    getProjectFolder(uri) {
        if (!vscode.workspace)
            return '';
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);
        if (workspaceFolder) {
            try {
                return workspaceFolder.uri.fsPath;
            }
            catch (e) { }
        }
        if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length) {
            return vscode.workspace.workspaceFolders[0].uri.fsPath;
        }
        return '';
    }
    getPlugin() {
        const agent = `${this.agentName}/${vscode.version} vscode-wakatime/${this.extension.version}`;
        const os = this.getOperatingSystem();
        if (os)
            return `(${os}) ${agent}`;
        return agent;
    }
    getOperatingSystem() {
        if (navigator.userAgentData && navigator.userAgentData.platform) {
            const platform = navigator.userAgentData.platform;
            if (platform.toLowerCase().indexOf('mac') != -1)
                return 'Mac';
            if (platform.toLowerCase().indexOf('win') != -1)
                return 'Windows';
            if (platform.toLowerCase().indexOf('linux') != -1)
                return 'Linux';
            if (platform.toLowerCase().indexOf('unix') != -1)
                return 'Unix';
            if (platform.toLowerCase().indexOf('android') != -1)
                return 'Android';
            return platform;
        }
        if (navigator.platform) {
            const platform = navigator.platform;
            if (navigator.userAgent && navigator.userAgent.toLowerCase().indexOf('android') != -1)
                return 'Android';
            if (platform.toLowerCase().indexOf('mac') != -1)
                return 'Mac';
            if (platform.toLowerCase().indexOf('win') != -1)
                return 'Windows';
            if (platform.toLowerCase().indexOf('linux') != -1)
                return 'Linux';
            if (platform.toLowerCase().indexOf('unix') != -1)
                return 'Unix';
            if (platform.toLowerCase().indexOf('android') != -1)
                return 'Android';
            return platform;
        }
        return null;
    }
    getApiUrl() {
        let apiUrl = this.config.get('wakatime.apiUrl') || 'https://api.wakatime.com/api/v1';
        const suffixes = ['/', '.bulk', '/users/current/heartbeats', '/heartbeats', '/heartbeat'];
        for (const suffix of suffixes) {
            if (apiUrl.endsWith(suffix)) {
                apiUrl = apiUrl.slice(0, -suffix.length);
            }
        }
        return apiUrl;
    }
    countSlashesInPath(path) {
        if (!path)
            return 0;
        const windowsNetDrive = path.indexOf('\\\\') === 0;
        path = path.replace(/[\\/]+/, '/');
        if (windowsNetDrive) {
            path = '\\\\' + path.slice(1);
        }
        if (!path.endsWith('/'))
            path = path + '/';
        return (path.match(/\//g) || []).length;
    }
}
exports.WakaTime = WakaTime;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = void 0;
const vscode = __webpack_require__(1);
class Utils {
    static quote(str) {
        if (str.includes(' '))
            return `"${str.replace('"', '\\"')}"`;
        return str;
    }
    static apiKeyInvalid(key) {
        const err = 'Invalid api key... check https://wakatime.com/api-key for your key';
        if (!key)
            return err;
        const re = new RegExp('^(waka_)?[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$', 'i');
        if (!re.test(key))
            return err;
        return '';
    }
    static validateProxy(proxy) {
        if (!proxy)
            return '';
        let re;
        if (proxy.indexOf('\\') === -1) {
            re = new RegExp('^((https?|socks5)://)?([^:@]+(:([^:@])+)?@)?[\\w\\.-]+(:\\d+)?$', 'i');
        }
        else {
            re = new RegExp('^.*\\\\.+$', 'i');
        }
        if (!re.test(proxy)) {
            const ipv6 = new RegExp('^((https?|socks5)://)?([^:@]+(:([^:@])+)?@)?(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))(:\\d+)?$', 'i');
            if (!ipv6.test(proxy)) {
                return 'Invalid proxy. Valid formats are https://user:pass@host:port or socks5://user:pass@host:port or domain\\user:pass';
            }
        }
        return '';
    }
    static formatDate(date) {
        let months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        let ampm = 'AM';
        let hour = date.getHours();
        if (hour > 11) {
            ampm = 'PM';
            hour = hour - 12;
        }
        if (hour == 0) {
            hour = 12;
        }
        let minute = date.getMinutes();
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${hour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`;
    }
    static obfuscateKey(key) {
        let newKey = '';
        if (key) {
            newKey = key;
            if (key.length > 4)
                newKey = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX' + key.substring(key.length - 4);
        }
        return newKey;
    }
    static wrapArg(arg) {
        if (arg.indexOf(' ') > -1)
            return '"' + arg.replace(/"/g, '\\"') + '"';
        return arg;
    }
    static formatArguments(binary, args) {
        let clone = args.slice(0);
        clone.unshift(this.wrapArg(binary));
        let newCmds = [];
        let lastCmd = '';
        for (let i = 0; i < clone.length; i++) {
            if (lastCmd == '--key')
                newCmds.push(this.wrapArg(this.obfuscateKey(clone[i])));
            else
                newCmds.push(this.wrapArg(clone[i]));
            lastCmd = clone[i];
        }
        return newCmds.join(' ');
    }
    static isRemoteUri(uri) {
        if (!uri)
            return false;
        return uri.scheme == 'vscode-remote';
    }
    static isPullRequest(uri) {
        if (!uri)
            return false;
        return uri.scheme == 'pr';
    }
    static getEditorName() {
        if (this.appNames[vscode.env.appName]) {
            return this.appNames[vscode.env.appName];
        }
        else if (vscode.env.appName.toLowerCase().includes('visual')) {
            return 'vscode';
        }
        else {
            return vscode.env.appName.replace(/\s/g, '').toLowerCase();
        }
    }
}
exports.Utils = Utils;
Utils.appNames = {
    'Arduino IDE': 'arduino',
    'Azure Data Studio': 'azdata',
    Cursor: 'cursor',
    Onivim: 'onivim',
    'Onivim 2': 'onivim',
    'SQL Operations Studio': 'sqlops',
    Trae: 'trae',
    'Visual Studio Code': 'vscode',
    Windsurf: 'windsurf',
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
const constants_1 = __webpack_require__(2);
const logger_1 = __webpack_require__(3);
const wakatime_1 = __webpack_require__(4);
var logger = new logger_1.Logger(constants_1.LogLevel.INFO);
var wakatime;
function activate(ctx) {
    var _a;
    wakatime = new wakatime_1.WakaTime(logger, ctx.globalState);
    (_a = ctx.globalState) === null || _a === void 0 ? void 0 : _a.setKeysForSync(['wakatime.apiKey']);
    ctx.subscriptions.push(vscode.commands.registerCommand(constants_1.COMMAND_API_KEY, function () {
        wakatime.promptForApiKey();
    }));
    ctx.subscriptions.push(vscode.commands.registerCommand(constants_1.COMMAND_API_URL, function () {
        wakatime.promptForApiUrl();
    }));
    ctx.subscriptions.push(vscode.commands.registerCommand(constants_1.COMMAND_DEBUG, function () {
        wakatime.promptForDebug();
    }));
    ctx.subscriptions.push(vscode.commands.registerCommand(constants_1.COMMAND_DISABLE, function () {
        wakatime.promptToDisable();
    }));
    ctx.subscriptions.push(vscode.commands.registerCommand(constants_1.COMMAND_STATUS_BAR_ENABLED, function () {
        wakatime.promptStatusBarIcon();
    }));
    ctx.subscriptions.push(vscode.commands.registerCommand(constants_1.COMMAND_STATUS_BAR_CODING_ACTIVITY, function () {
        wakatime.promptStatusBarCodingActivity();
    }));
    ctx.subscriptions.push(vscode.commands.registerCommand(constants_1.COMMAND_DASHBOARD, function () {
        wakatime.openDashboardWebsite();
    }));
    ctx.subscriptions.push(wakatime);
    wakatime.initialize();
}
exports.activate = activate;
function deactivate() {
    wakatime.dispose();
}
exports.deactivate = deactivate;

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=extension.js.map