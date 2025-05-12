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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.deactivate = exports.activate = void 0;
var vscode = __importStar(require("vscode"));
var DokiThemeDefinitions_1 = __importDefault(require("./DokiThemeDefinitions"));
var VSCodeGlobals_1 = require("./VSCodeGlobals");
var showNonOp = function () { return vscode.window
    .showInformationMessage("This feature does not work on the web version of VSCode \uD83E\uDD72", { title: "That does not work." }); };
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.remove.sticker", function () {
        return showNonOp();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.doki.changelog", function () {
        return showNonOp();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.remove.watermark", function () {
        return showNonOp();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.restore.assets", function () {
        return showNonOp();
    }));
    VSCodeGlobals_1.VSCodeGlobals.globalState = context.globalState;
    DokiThemeDefinitions_1["default"].map(function (dokiThemeDefinition) {
        return dokiThemeDefinition.extensionNames.map(function (extensionCommand) { return ({
            extensionCommand: extensionCommand,
            dokiThemeDefinition: dokiThemeDefinition
        }); });
    })
        .reduce(function (accum, next) { return accum.concat(next); }, [])
        .map(function (_a) {
        var extensionCommand = _a.extensionCommand;
        return vscode.commands.registerCommand(extensionCommand, function () {
            showNonOp();
        });
    })
        .forEach(function (disposableHero) { return context.subscriptions.push(disposableHero); });
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=web-extension.js.map