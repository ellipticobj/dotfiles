"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const vscode = require("vscode");
const PreviewManager_1 = require("../../src/PreviewManager");
const vscodeUtilities_1 = require("../../src/vscodeUtilities");
const os_1 = require("os");
/**
 * this suite tests both PreviewManager and pythonPanelPreview
 * by activating funcs in PreviewManager and looking at html rendered by pythonPanelPreview
 */
suite("PreviewManager and pythonPanelPreview Tests", () => {
    const arepl = vscode.extensions.getExtension("almenon.arepl");
    let editor;
    let panel;
    let previewManager;
    const mockContext = {
        asAbsolutePath: (file) => {
            return __dirname + "/" + file;
        },
        extensionPath: arepl.extensionPath,
    };
    suiteSetup(function (done) {
        vscodeUtilities_1.default.newUnsavedPythonDoc("").then((newEditor) => {
            editor = newEditor;
            previewManager = new PreviewManager_1.default(mockContext);
            previewManager.startArepl(editor).then((promiseResults) => {
                panel = promiseResults[0];
                console.log("preview panel started");
                done();
            }).catch((err) => done(err));
        });
    });
    test("default imports should be inserted", function () {
        assert.equal(editor.document.getText(), "from arepl_dump import dump" + os_1.EOL);
    });
    test("webview should be displayed", function () {
        assert.equal(panel.visible, true);
    });
    // todo: fix test (see https://github.com/Almenon/AREPL-vscode/issues/355)
    // test("edits should result in webview change", function(done){
    //     editor.edit(editBuilder => {
    //         editBuilder.insert(new vscode.Position(0,0), "x=3424523;")
    //     }).then(()=>{
    //         setTimeout(()=>{
    //             assert.equal(panel.webview.html.includes(`"x":3424523`), true, panel.webview.html)
    //             done()
    //         },4000)
    //     }, done)
    // });
    suiteTeardown(function (done) {
        previewManager.dispose();
        setTimeout(() => {
            vscode.commands.executeCommand("workbench.action.closeActiveEditor").then(() => {
                done();
            });
        }, 250);
    });
});
//# sourceMappingURL=previewManager.test.js.map