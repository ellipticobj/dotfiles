"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.attemptToNotifyUpdates = void 0;
var vscode = __importStar(require("vscode"));
var VSCodeGlobals_1 = require("./VSCodeGlobals");
var WelcomeService_1 = require("./WelcomeService");
var SAVED_VERSION = "doki.theme.version";
var DOKI_THEME_VERSION = "v88.5-1.6.3";
function attemptToNotifyUpdates(context) {
    var savedVersion = VSCodeGlobals_1.VSCodeGlobals.globalState.get(SAVED_VERSION);
    if (savedVersion && savedVersion !== DOKI_THEME_VERSION) {
        VSCodeGlobals_1.VSCodeGlobals.globalState.update(SAVED_VERSION, DOKI_THEME_VERSION);
        vscode.window
            .showInformationMessage("Doki Theme updated to " + DOKI_THEME_VERSION + ". \n            Use \"Doki Theme Changelog\" command for more info.", { title: "Show Changelog" })
            .then(function (item) {
            if (item) {
                vscode.commands.executeCommand("doki-theme.doki.changelog");
            }
        });
    }
    else if (!savedVersion) {
        VSCodeGlobals_1.VSCodeGlobals.globalState.update(SAVED_VERSION, DOKI_THEME_VERSION);
        WelcomeService_1.attemptToGreetUser(context);
    }
}
exports.attemptToNotifyUpdates = attemptToNotifyUpdates;
//# sourceMappingURL=NotificationService.js.map