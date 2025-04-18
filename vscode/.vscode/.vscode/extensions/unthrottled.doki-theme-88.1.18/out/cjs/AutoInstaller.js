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
exports.clearAssetConfig = exports.saveHiddenWatermarkConfig = exports.saveWallpaperConfig = exports.saveStickerConfig = exports.restoreInstallation = exports.attemptToPerformAutoInstall = void 0;
var vscode = __importStar(require("vscode"));
var CheckSumService_1 = require("./CheckSumService");
var DokiTheme_1 = require("./DokiTheme");
var DokiThemeDefinitions_1 = __importDefault(require("./DokiThemeDefinitions"));
var StickerService_1 = require("./StickerService");
var ThemeManager_1 = require("./ThemeManager");
var previousVersionKey = "doki.vscode.version";
var stickerInstallKey = "doki.sticker.restore";
var wallpaperInstallKey = "doki.wallpaper.restore";
var watermarkKey = "doki.watermark.restore";
var AutoInstallStatus;
(function (AutoInstallStatus) {
    AutoInstallStatus[AutoInstallStatus["LUL_DUNNO"] = 0] = "LUL_DUNNO";
    AutoInstallStatus[AutoInstallStatus["NOT_INSTALLED"] = 1] = "NOT_INSTALLED";
    AutoInstallStatus[AutoInstallStatus["INSTALLED"] = 2] = "INSTALLED";
})(AutoInstallStatus || (AutoInstallStatus = {}));
exports.attemptToPerformAutoInstall = function (context) {
    var storedVSCodeVersion = context.globalState.get(previousVersionKey);
    if (!storedVSCodeVersion) {
        storeFirstConfig(context);
    }
    else if (isVersionDifferent(storedVSCodeVersion)) {
        restoreInstallation(context);
    }
};
function isVersionDifferent(storedVSCodeVersion) {
    return storedVSCodeVersion !== vscode.version;
}
function storeFirstConfig(context) {
    saveNewVersion(context);
    var vscodeCSS = StickerService_1.readCSS();
    var _a = ThemeManager_1.getCurrentThemeAndSticker(), sticker = _a.sticker, theme = _a.theme;
    var isStickerInstalled = StickerService_1.getStickerIndex(vscodeCSS) > -1;
    if (isStickerInstalled) {
        saveStickerConfig({
            sticker: sticker,
            themeId: theme.id
        }, context);
    }
    else {
        clearStickerConfig(context);
    }
    var isWallpaperInstalled = StickerService_1.getWallpaperIndex(vscodeCSS) > -1;
    if (isWallpaperInstalled) {
        saveWallpaperConfig({
            sticker: sticker,
            themeId: theme.id
        }, context);
    }
    else {
        clearWallpaperConfig(context);
    }
    var isWatermarkHidden = StickerService_1.getHideIndex(vscodeCSS) > -1;
    if (isWatermarkHidden) {
        saveHiddenWatermarkConfig(context);
    }
    else {
        clearWatermarkConfig(context);
    }
}
function saveNewVersion(context) {
    context.globalState.update(previousVersionKey, vscode.version);
}
function restoreInstallation(context) {
    saveNewVersion(context);
    var stickerInstallStatus = autoInstallAsset(stickerInstallKey, context, StickerService_1.installStickers);
    var wallpaperInstallStatus = autoInstallAsset(wallpaperInstallKey, context, StickerService_1.installWallPaper);
    var hideWaterMarkStatus = autoInstallAsset(watermarkKey, context, function () { return StickerService_1.hideWaterMark(); });
    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Please wait, restoring installed assets.",
        cancellable: false
    }, function () {
        return Promise.all([
            stickerInstallStatus,
            wallpaperInstallStatus,
            hideWaterMarkStatus,
        ]).then(function (installStatuses) {
            var dokiTheme = ThemeManager_1.getCurrentThemeAndSticker().theme;
            var allWorked = installStatuses.reduce(function (accum, status) {
                return accum && (status == StickerService_1.InstallStatus.INSTALLED ||
                    status === StickerService_1.InstallStatus.NOT_INSTALLED);
            }, true);
            if (allWorked) {
                CheckSumService_1.fixCheckSums(context);
                var message = "Assets Restored! " + ThemeManager_1.handleInstallMessage;
                ThemeManager_1.showInstallNotification(message);
            }
            else if (installStatuses.find(function (status) { return status === StickerService_1.InstallStatus.NETWORK_FAILURE; })) {
                ThemeManager_1.showNetworkErrorMessage(dokiTheme);
            }
            else if (installStatuses.find(function (status) { return status === StickerService_1.InstallStatus.FAILURE; })) {
                ThemeManager_1.handleInstallFailure(context, dokiTheme);
            }
        });
    });
}
exports.restoreInstallation = restoreInstallation;
function autoInstallAsset(assetKey, context, assetInstaller) {
    var wasTheAssetInstalledYo = wasAssetInstalled(assetKey, context);
    if (wasTheAssetInstalledYo) {
        var _a = JSON.parse(context.globalState.get(assetKey)), sticker = _a.sticker, themeId = _a.themeId;
        var theme = ThemeManager_1.getCurrentThemeAndSticker().theme;
        var usableThemeId_1 = themeId || theme.id;
        var def = DokiThemeDefinitions_1["default"].find(function (theme) { return theme.themeDefinition.information.id === usableThemeId_1; })
            || DokiThemeDefinitions_1["default"].find(function (theme) { return theme.themeDefinition.information.id === DokiTheme_1.DEFAULT_THEME_ID; });
        return assetInstaller({
            sticker: sticker.sticker,
            theme: new DokiTheme_1.DokiTheme(def.themeDefinition)
        }, context);
    }
    else {
        return Promise.resolve(StickerService_1.InstallStatus.NOT_INSTALLED);
    }
}
function saveStickerConfig(restoreConfig, context) {
    context.globalState.update(stickerInstallKey, createAssetRestoreConfig(restoreConfig));
}
exports.saveStickerConfig = saveStickerConfig;
function saveWallpaperConfig(restoreConfig, context) {
    context.globalState.update(wallpaperInstallKey, createAssetRestoreConfig(restoreConfig));
}
exports.saveWallpaperConfig = saveWallpaperConfig;
function saveHiddenWatermarkConfig(context) {
    var bestSticker = {
        sticker: {
            anchoring: 'right',
            name: "Zero Two",
            path: "Is best girl"
        },
        type: DokiTheme_1.StickerType.DEFAULT
    };
    context.globalState.update(watermarkKey, createAssetRestoreConfig({
        sticker: bestSticker,
        themeId: DokiTheme_1.DEFAULT_THEME_ID
    }));
}
exports.saveHiddenWatermarkConfig = saveHiddenWatermarkConfig;
function clearStickerConfig(context) {
    context.globalState.update(stickerInstallKey, AutoInstallStatus.NOT_INSTALLED);
}
function clearWallpaperConfig(context) {
    context.globalState.update(wallpaperInstallKey, AutoInstallStatus.NOT_INSTALLED);
}
function clearWatermarkConfig(context) {
    context.globalState.update(watermarkKey, AutoInstallStatus.NOT_INSTALLED);
}
function clearAssetConfig(context) {
    clearStickerConfig(context);
    clearWallpaperConfig(context);
    clearWatermarkConfig(context);
}
exports.clearAssetConfig = clearAssetConfig;
function createAssetRestoreConfig(stickerInstallPayload) {
    return JSON.stringify(stickerInstallPayload);
}
function wasAssetInstalled(assetKey, context) {
    var assetConfig = context.globalState.get(assetKey);
    return assetConfig !== AutoInstallStatus.NOT_INSTALLED &&
        typeof assetConfig === 'string';
}
//# sourceMappingURL=AutoInstaller.js.map