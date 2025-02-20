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
exports.watchConfigChanges = exports.getConfig = exports.CONFIG_STATUS_BAR_NAME = exports.CONFIG_BACKGROUND_ENABLED = exports.CONFIG_BACKGROUND_ANCHOR = exports.CONFIG_WALLPAPER_ENABLED = exports.CONFIG_WALLPAPER = exports.CONFIG_BACKGROUND = exports.CONFIG_STICKER_CSS = exports.CONFIG_STICKER = exports.CONFIG_NAME = void 0;
var vscode = __importStar(require("vscode"));
var fs_1 = __importDefault(require("fs"));
var CheckSumService_1 = require("./CheckSumService");
var StickerService_1 = require("./StickerService");
var ThemeManager_1 = require("./ThemeManager");
var StatusBar_1 = require("./StatusBar");
exports.CONFIG_NAME = "doki";
exports.CONFIG_STICKER = "sticker.path";
exports.CONFIG_STICKER_CSS = "sticker.css";
exports.CONFIG_BACKGROUND = "background.path";
exports.CONFIG_WALLPAPER = "wallpaper.path";
exports.CONFIG_WALLPAPER_ENABLED = "wallpaper.enabled";
exports.CONFIG_BACKGROUND_ANCHOR = "background.anchor";
exports.CONFIG_BACKGROUND_ENABLED = "background.enabled";
exports.CONFIG_STATUS_BAR_NAME = "statusbar.name";
exports.getConfig = function () { return vscode.workspace.getConfiguration(exports.CONFIG_NAME); };
var currentConfig = exports.getConfig();
exports.watchConfigChanges = function (extensionContext) {
    return vscode.workspace.onDidChangeConfiguration(function () {
        var _a = ThemeManager_1.getCurrentThemeAndSticker(), sticker = _a.sticker, theme = _a.theme;
        var newBoiConfig = vscode.workspace.getConfiguration(exports.CONFIG_NAME);
        var statusBarName = newBoiConfig.get(exports.CONFIG_STATUS_BAR_NAME);
        var statusBarConfigChanged = currentConfig.get(exports.CONFIG_STATUS_BAR_NAME) !== statusBarName;
        if (statusBarConfigChanged && !!statusBarName && typeof statusBarName === 'string') {
            StatusBar_1.StatusBarComponent.setText(statusBarName);
        }
        else if (statusBarConfigChanged && !statusBarName) {
            var theme_1 = ThemeManager_1.getCurrentThemeAndSticker().theme;
            StatusBar_1.StatusBarComponent.setText(theme_1.displayName);
        }
        var stickerChanged = newBoiConfig.get(exports.CONFIG_STICKER) !==
            currentConfig.get(exports.CONFIG_STICKER);
        var stickerCSSChanged = newBoiConfig.get(exports.CONFIG_STICKER_CSS) !==
            currentConfig.get(exports.CONFIG_STICKER_CSS);
        var isStickerFullPath = isFile(newBoiConfig.get(exports.CONFIG_STICKER));
        var stickerInstall = (stickerChanged && isStickerFullPath) ||
            (stickerCSSChanged) ?
            ThemeManager_1.attemptToInstallSticker({
                theme: theme,
                sticker: sticker.sticker
            }, extensionContext) :
            Promise.resolve(StickerService_1.InstallStatus.NOT_INSTALLED);
        var backgroundConfig = newBoiConfig.get(exports.CONFIG_BACKGROUND);
        var backgroundChanged = backgroundConfig !==
            currentConfig.get(exports.CONFIG_BACKGROUND);
        var isBackgroundFullPath = isFile(backgroundConfig);
        var wallpaperConfig = newBoiConfig.get(exports.CONFIG_WALLPAPER);
        var wallpaperChanged = wallpaperConfig !==
            currentConfig.get(exports.CONFIG_WALLPAPER);
        var isWallPaperFullPath = isFile(wallpaperConfig);
        var anchorChanged = newBoiConfig.get(exports.CONFIG_BACKGROUND_ANCHOR) !==
            currentConfig.get(exports.CONFIG_BACKGROUND_ANCHOR);
        var wallpaperInstall = (backgroundChanged && (isBackgroundFullPath || !backgroundConfig)) ||
            (wallpaperChanged && (isWallPaperFullPath || !wallpaperConfig)) ||
            anchorChanged ?
            ThemeManager_1.attemptToInstallWallpaper({
                theme: theme,
                sticker: sticker.sticker
            }, extensionContext) :
            Promise.resolve(StickerService_1.InstallStatus.NOT_INSTALLED);
        var installJerbs = [
            stickerInstall,
            wallpaperInstall,
        ];
        Promise.all(installJerbs)
            .then(function (jerbResults) {
            var hadFailure = jerbResults
                .reduce(function (didWork, jerbStatus) {
                return didWork || jerbStatus == StickerService_1.InstallStatus.FAILURE;
            }, false);
            var hadSuccess = jerbResults
                .reduce(function (didWork, jerbStatus) {
                return didWork || jerbStatus == StickerService_1.InstallStatus.INSTALLED;
            }, false);
            if (hadFailure) {
                ThemeManager_1.handleInstallFailure(extensionContext, theme);
            }
            else if (hadSuccess) {
                CheckSumService_1.fixCheckSums(extensionContext);
                var message = "Custom Asset(s) Installed! " + ThemeManager_1.handleInstallMessage;
                ThemeManager_1.showInstallNotification(message);
            }
            currentConfig = newBoiConfig;
        })["catch"](function (error) {
            console.error("Unable to install custom assets for reasons", error);
            vscode.window
                .showInformationMessage("Oh no, I couldn't update your custom assets!\n Try again, please.");
        });
    });
};
function isFile(filePath) {
    return fs_1["default"].existsSync(filePath) && fs_1["default"].lstatSync(filePath).isFile();
}
//# sourceMappingURL=ConfigWatcher.js.map