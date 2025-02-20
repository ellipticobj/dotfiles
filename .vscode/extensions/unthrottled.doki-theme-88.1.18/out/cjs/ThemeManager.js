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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getSticker = exports.getCurrentThemeAndSticker = exports.uninstallImages = exports.handleInstallFailure = exports.showInstallNotification = exports.showNetworkErrorMessage = exports.activateThemeAsset = exports.activateHideWatermark = exports.activateThemeWallpaper = exports.activateThemeSticker = exports.attemptToInstallHideWatermark = exports.attemptToInstallWallpaper = exports.attemptToInstallSticker = exports.handleInstallMessage = exports.ACTIVE_STICKER = exports.ACTIVE_THEME = void 0;
var vscode = __importStar(require("vscode"));
var DokiTheme_1 = require("./DokiTheme");
var StickerService_1 = require("./StickerService");
var VSCodeGlobals_1 = require("./VSCodeGlobals");
var StatusBar_1 = require("./StatusBar");
var SupportService_1 = require("./SupportService");
var DokiThemeDefinitions_1 = __importDefault(require("./DokiThemeDefinitions"));
var CheckSumService_1 = require("./CheckSumService");
var AutoInstaller_1 = require("./AutoInstaller");
var ConfigWatcher_1 = require("./ConfigWatcher");
exports.ACTIVE_THEME = "doki.theme.active";
exports.ACTIVE_STICKER = "doki.sticker.active";
var FIRST_TIME_STICKER_INSTALL = "doki.sticker.first.install";
exports.handleInstallMessage = "Quick reload to see changes, please restart VSCode to remove the Unsupported warning.";
var createCulturedInstall = function (themeId) {
    return "doki.cultured." + themeId;
};
var CULTURED_STICKER_INSTALL = createCulturedInstall("ea9a13f6-fa7f-46a4-ba6e-6cefe1f55160_test");
function isFirstTimeInstalling(context) {
    return !context.globalState.get(FIRST_TIME_STICKER_INSTALL);
}
function conditionalInstall(storageKey, actionText, messageBody, installAsset, context) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vscode.window.showWarningMessage(messageBody, {
                        modal: true
                    }, {
                        title: actionText,
                        isCloseAffordance: false
                    })];
                case 1:
                    result = _a.sent();
                    if (result && result.title === actionText) {
                        context.globalState.update(storageKey, true);
                        return [2 /*return*/, installAsset()];
                    }
                    else {
                        return [2 /*return*/, StickerService_1.InstallStatus.NOT_INSTALLED];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function attemptToInstallAsset(context, stickerInstallPayload, installAsset) {
    return __awaiter(this, void 0, void 0, function () {
        var storageKey, actionText, messageBody, actionText, messageBody;
        return __generator(this, function (_a) {
            if (isCultured(context, stickerInstallPayload)) {
                storageKey = CULTURED_STICKER_INSTALL;
                actionText = "Yes, Please!";
                messageBody = "You are about to install sexually suggestive content. Are you sure you want to continue? I won't show you this message again in the future if you choose to install.";
                return [2 /*return*/, conditionalInstall(storageKey, actionText, messageBody, installAsset, context)];
            }
            else if (isFirstTimeInstalling(context)) {
                actionText = "Install Theme Assets";
                messageBody = "Installing theme assets requires me to corrupt VS-Code by modifying CSS. You will have to use the \"Remove Sticker/Background\" command to restore VS Code back to supported status before unistalling. I won't show you this message again in the future if you choose to install.";
                return [2 /*return*/, conditionalInstall(FIRST_TIME_STICKER_INSTALL, actionText, messageBody, installAsset, context)];
            }
            else {
                return [2 /*return*/, installAsset()];
            }
            return [2 /*return*/];
        });
    });
}
function attemptToInstallSticker(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, attemptToInstallAsset(context, stickerInstallPayload, function () {
                    return performStickerInstall(stickerInstallPayload, context);
                })];
        });
    });
}
exports.attemptToInstallSticker = attemptToInstallSticker;
function attemptToInstallWallpaper(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, attemptToInstallAsset(context, stickerInstallPayload, function () {
                    return performWallpaperInstall(stickerInstallPayload, context);
                })];
        });
    });
}
exports.attemptToInstallWallpaper = attemptToInstallWallpaper;
function attemptToInstallHideWatermark(context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, attemptToInstallAsset(context, {
                    sticker: {
                        anchoring: "Facts: ",
                        name: "Zero Two",
                        path: "Best Girl"
                    },
                    theme: new DokiTheme_1.DokiTheme(DokiThemeDefinitions_1["default"]
                        .find(function (theme) { return theme.themeDefinition.information.id === DokiTheme_1.DEFAULT_THEME_ID; })
                        .themeDefinition)
                }, function () {
                    return performHideWatermarkInstall();
                })];
        });
    });
}
exports.attemptToInstallHideWatermark = attemptToInstallHideWatermark;
function performStickerInstall(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, StickerService_1.installStickers(stickerInstallPayload, context)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function performWallpaperInstall(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, StickerService_1.installWallPaper(stickerInstallPayload, context)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function performHideWatermarkInstall() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, StickerService_1.hideWaterMark()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function activateThemeSticker(dokiTheme, currentSticker, context) {
    return activateThemeAsset(dokiTheme, currentSticker, context, "Sticker", function (sticker) { return attemptToInstallSticker(sticker, context); }, AutoInstaller_1.saveStickerConfig);
}
exports.activateThemeSticker = activateThemeSticker;
function activateThemeWallpaper(dokiTheme, currentSticker, context) {
    return activateThemeAsset(dokiTheme, currentSticker, context, "Wallpaper", function (sticker) { return attemptToInstallWallpaper(sticker, context); }, AutoInstaller_1.saveWallpaperConfig);
}
exports.activateThemeWallpaper = activateThemeWallpaper;
function activateHideWatermark(context) {
    return attemptToInstallHideWatermark(context).then(function (installStatus) {
        if (installStatus === StickerService_1.InstallStatus.INSTALLED) {
            CheckSumService_1.fixCheckSums(context);
            var message = "VSCode Watermark hidden! " + exports.handleInstallMessage;
            showInstallNotification(message);
            AutoInstaller_1.saveHiddenWatermarkConfig(context);
        }
        else if (installStatus === StickerService_1.InstallStatus.FAILURE) {
            handleInstallFailure(context, exports.getCurrentThemeAndSticker().theme);
        }
    });
}
exports.activateHideWatermark = activateHideWatermark;
var quickReloadAction = "Quickly Reload Window";
function activateThemeAsset(dokiTheme, currentSticker, context, assetType, installer, configSaver) {
    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Please wait, installing " + dokiTheme.name + "'s " + assetType + ".",
        cancellable: false
    }, function () {
        return installer({
            sticker: currentSticker.sticker,
            theme: dokiTheme
        }).then(function (didInstall) {
            if (didInstall === StickerService_1.InstallStatus.INSTALLED) {
                VSCodeGlobals_1.VSCodeGlobals.globalState.update(exports.ACTIVE_THEME, dokiTheme.id);
                VSCodeGlobals_1.VSCodeGlobals.globalState.update(exports.ACTIVE_STICKER, currentSticker.type);
                if (!ConfigWatcher_1.getConfig().get(ConfigWatcher_1.CONFIG_STATUS_BAR_NAME)) {
                    StatusBar_1.StatusBarComponent.setText(dokiTheme.displayName);
                }
                CheckSumService_1.fixCheckSums(context);
                var message = dokiTheme.name + "'s " + assetType + " installed! " + exports.handleInstallMessage;
                showInstallNotification(message);
                configSaver({
                    sticker: currentSticker,
                    themeId: dokiTheme.id
                }, context);
            }
            else if (didInstall === StickerService_1.InstallStatus.FAILURE) {
                handleInstallFailure(context, dokiTheme);
            }
            else if (didInstall === StickerService_1.InstallStatus.NETWORK_FAILURE) {
                showNetworkErrorMessage(dokiTheme);
            }
        });
    });
}
exports.activateThemeAsset = activateThemeAsset;
function showNetworkErrorMessage(dokiTheme) {
    vscode.window.showErrorMessage("Unable to install " + dokiTheme.name + ", please check your network connection.");
}
exports.showNetworkErrorMessage = showNetworkErrorMessage;
function showInstallNotification(message) {
    vscode.window
        .showInformationMessage(message, { title: quickReloadAction })
        .then(function (item) {
        if (item) {
            vscode.commands.executeCommand("workbench.action.reloadWindow");
        }
    });
}
exports.showInstallNotification = showInstallNotification;
function handleInstallFailure(context, dokiTheme) {
    SupportService_1.showStickerInstallationSupportWindow(context);
    vscode.window.showErrorMessage("Unable to install " + dokiTheme.name + ", please see active tab for more information.");
}
exports.handleInstallFailure = handleInstallFailure;
// :(
function uninstallImages(context) {
    var stickersRemoved = StickerService_1.removeStickers();
    if (stickersRemoved === StickerService_1.InstallStatus.INSTALLED ||
        stickersRemoved === StickerService_1.InstallStatus.NOT_INSTALLED) {
        AutoInstaller_1.clearAssetConfig(context);
        CheckSumService_1.restoreChecksum();
        vscode.window
            .showInformationMessage("Removed All Images. " + exports.handleInstallMessage, { title: quickReloadAction })
            .then(function (item) {
            if (item) {
                vscode.commands.executeCommand("workbench.action.reloadWindow");
            }
        });
    }
    else if (stickersRemoved === StickerService_1.InstallStatus.FAILURE) {
        SupportService_1.showStickerRemovalSupportWindow(context);
        vscode.window.showErrorMessage("Unable to remove stickers/background, please see active tab for more information.");
    }
}
exports.uninstallImages = uninstallImages;
exports.getCurrentThemeAndSticker = function () {
    var currentThemeId = VSCodeGlobals_1.VSCodeGlobals.globalState.get(exports.ACTIVE_THEME);
    var dokiThemeDefinition = DokiThemeDefinitions_1["default"].find(function (dokiDefinition) {
        return dokiDefinition.themeDefinition.information.id === currentThemeId;
    }) ||
        DokiThemeDefinitions_1["default"].find(function (def) {
            return def.themeDefinition.information.id === DokiTheme_1.DEFAULT_THEME_ID;
        });
    var currentStickerType = VSCodeGlobals_1.VSCodeGlobals.globalState.get(exports.ACTIVE_STICKER) ||
        DokiTheme_1.StickerType.DEFAULT;
    return {
        theme: new DokiTheme_1.DokiTheme(dokiThemeDefinition.themeDefinition),
        sticker: {
            type: currentStickerType,
            sticker: getSticker(dokiThemeDefinition.themeDefinition, currentStickerType)
        }
    };
};
function getSticker(dokiThemeDefinition, stickerType) {
    var defaultSticker = dokiThemeDefinition.stickers["default"];
    return DokiTheme_1.StickerType.SECONDARY === stickerType
        ? dokiThemeDefinition.stickers.secondary || defaultSticker
        : defaultSticker;
}
exports.getSticker = getSticker;
function isCultured(context, stickerInstallPayload) {
    return (stickerInstallPayload.sticker.name.indexOf("rias_onyx_spicy.png") > -1 &&
        !context.globalState.get(CULTURED_STICKER_INSTALL));
}
//# sourceMappingURL=ThemeManager.js.map