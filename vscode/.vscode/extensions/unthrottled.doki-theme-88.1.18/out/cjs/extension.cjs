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
var ThemeManager_1 = require("./ThemeManager");
var DokiTheme_1 = require("./DokiTheme");
var DokiThemeDefinitions_1 = __importDefault(require("./DokiThemeDefinitions"));
var StatusBar_1 = require("./StatusBar");
var VSCodeGlobals_1 = require("./VSCodeGlobals");
var NotificationService_1 = require("./NotificationService");
var ChangelogService_1 = require("./ChangelogService");
var StickerUpdateService_1 = require("./StickerUpdateService");
var ConfigWatcher_1 = require("./ConfigWatcher");
var CheckSumService_1 = require("./CheckSumService");
var AutoInstaller_1 = require("./AutoInstaller");
var getCurrentSticker = function (extensionCommand, dokiThemeDefinition) {
    var stickerType = extensionCommand.endsWith('secondary') ?
        DokiTheme_1.StickerType.SECONDARY : DokiTheme_1.StickerType.DEFAULT;
    var sticker = ThemeManager_1.getSticker(dokiThemeDefinition, stickerType);
    return {
        sticker: sticker,
        type: stickerType
    };
};
function isStickerCommand(extensionCommand) {
    return extensionCommand.indexOf("wallpaper") < 0;
}
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.remove.sticker", function () {
        return ThemeManager_1.uninstallImages(context);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.doki.changelog", function () {
        return ChangelogService_1.showChanglog(context);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.remove.watermark", function () {
        return ThemeManager_1.activateHideWatermark(context);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.restore.assets", function () {
        return AutoInstaller_1.restoreInstallation(context);
    }));
    VSCodeGlobals_1.VSCodeGlobals.globalState = context.globalState;
    StatusBar_1.StatusBarComponent.initialize();
    context.subscriptions.push(StatusBar_1.StatusBarComponent);
    NotificationService_1.attemptToNotifyUpdates(context);
    var _a = ThemeManager_1.getCurrentThemeAndSticker(), sticker = _a.sticker, theme = _a.theme;
    StickerUpdateService_1.attemptToUpdateSticker(context, {
        theme: theme,
        sticker: sticker.sticker
    })["catch"](function (error) {
        console.error("Unable to update sticker for reasons", error);
    });
    DokiThemeDefinitions_1["default"].map(function (dokiThemeDefinition) {
        return dokiThemeDefinition.extensionNames.map(function (extensionCommand) { return ({
            extensionCommand: extensionCommand,
            dokiThemeDefinition: dokiThemeDefinition
        }); });
    })
        .reduce(function (accum, next) { return accum.concat(next); }, [])
        .map(function (_a) {
        var dokiThemeDefinition = _a.dokiThemeDefinition, extensionCommand = _a.extensionCommand;
        return vscode.commands.registerCommand(extensionCommand, function () {
            var dokiTheme = new DokiTheme_1.DokiTheme(dokiThemeDefinition.themeDefinition);
            var currentSticker = getCurrentSticker(extensionCommand, dokiThemeDefinition.themeDefinition);
            if (isStickerCommand(extensionCommand)) {
                ThemeManager_1.activateThemeSticker(dokiTheme, currentSticker, context);
            }
            else {
                ThemeManager_1.activateThemeWallpaper(dokiTheme, currentSticker, context);
            }
        });
    })
        .forEach(function (disposableHero) { return context.subscriptions.push(disposableHero); });
    context.subscriptions.push(ConfigWatcher_1.watchConfigChanges(context));
    CheckSumService_1.cleanupOrigFiles();
    AutoInstaller_1.attemptToPerformAutoInstall(context);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map