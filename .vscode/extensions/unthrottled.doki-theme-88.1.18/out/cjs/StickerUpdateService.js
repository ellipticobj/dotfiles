"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.NetworkError = exports.attemptToUpdateSticker = exports.forceUpdateSticker = void 0;
var vscode = __importStar(require("vscode"));
var RESTClient_1 = require("./RESTClient");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var url_1 = require("url");
var crypto_1 = __importDefault(require("crypto"));
var ENV_1 = require("./ENV");
var ConfigWatcher_1 = require("./ConfigWatcher");
var DokiTheme_1 = require("./DokiTheme");
function loadImageBase64FromFileProtocol(url) {
    var fileUrl = new url_1.URL(url);
    var imageBuffer = fs_1["default"].readFileSync(fileUrl);
    var imageExtensionName = path_1["default"].extname(fileUrl.pathname).substr(1);
    return "data:image/" + imageExtensionName + ";base64," + imageBuffer.toString('base64');
}
exports.forceUpdateSticker = function (context, stickerInstallPayload) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, _attemptToUpdateSticker(context, stickerInstallPayload, forceUpdateAsset)];
}); }); };
exports.attemptToUpdateSticker = function (context, stickerInstallPayload) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, _attemptToUpdateSticker(context, stickerInstallPayload, attemptToUpdateAsset)];
}); }); };
var _attemptToUpdateSticker = function (context, _a, assetUpdater) {
    var currentSticker = _a.sticker, theme = _a.theme;
    return __awaiter(void 0, void 0, void 0, function () {
        var remoteStickerUrl, remoteWallpaperUrl, backgroundBase, remoteBackgroundUrl, localStickerPath, localWallpaperPath, localBackgroundPath, config, customSticker, customBackground, customWallpaper;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    remoteStickerUrl = "" + ENV_1.VSCODE_ASSETS_URL + stickerPathToUrl(currentSticker);
                    remoteWallpaperUrl = "" + ENV_1.WALLPAPER_ASSETS_URL + wallpaperPathToUrl(currentSticker);
                    backgroundBase = requiresRealBackground(theme) ?
                        ENV_1.ACTUAL_BACKGROUND_ASSETS_URL : ENV_1.BACKGROUND_ASSETS_URL;
                    remoteBackgroundUrl = "" + backgroundBase + wallpaperPathToUrl(currentSticker);
                    localStickerPath = resolveLocalStickerPath(currentSticker, context);
                    localWallpaperPath = resolveLocalWallpaperPath(currentSticker, context);
                    localBackgroundPath = resolveLocalBackgroundPath(currentSticker, context);
                    return [4 /*yield*/, Promise.all([
                            assetUpdater(remoteStickerUrl, localStickerPath, context),
                            assetUpdater(remoteWallpaperUrl, localWallpaperPath, context),
                            assetUpdater(remoteBackgroundUrl, localBackgroundPath, context),
                        ])];
                case 1:
                    _b.sent();
                    config = vscode.workspace.getConfiguration(ConfigWatcher_1.CONFIG_NAME);
                    customSticker = config.get(ConfigWatcher_1.CONFIG_STICKER) + '';
                    customBackground = config.get(ConfigWatcher_1.CONFIG_BACKGROUND) + '';
                    customWallpaper = config.get(ConfigWatcher_1.CONFIG_WALLPAPER) + '';
                    return [2 /*return*/, {
                            stickerDataURL: createCssDokiAssetUrl(fs_1["default"].existsSync(customSticker) ? customSticker : localStickerPath),
                            backgroundImageURL: createCssDokiAssetUrl(fs_1["default"].existsSync(customBackground) ? customBackground : localBackgroundPath),
                            wallpaperImageURL: createCssDokiAssetUrl(fs_1["default"].existsSync(customWallpaper) ? customWallpaper : localWallpaperPath),
                            backgroundAnchoring: config.get(ConfigWatcher_1.CONFIG_BACKGROUND_ANCHOR) ||
                                currentSticker.anchoring
                        }];
            }
        });
    });
};
function attemptToUpdateAsset(remoteStickerUrl, localStickerPath, context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (hasCheckedToday(remoteStickerUrl, context)) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, forceUpdateAsset(remoteStickerUrl, localStickerPath)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var NetworkError = /** @class */ (function (_super) {
    __extends(NetworkError, _super);
    function NetworkError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NetworkError;
}(Error));
exports.NetworkError = NetworkError;
function forceUpdateAsset(remoteStickerUrl, localStickerPath) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, shouldDownloadNewAsset(remoteStickerUrl, localStickerPath)];
                case 1:
                    if (!_a.sent()) return [3 /*break*/, 3];
                    return [4 /*yield*/, installAsset(remoteStickerUrl, localStickerPath)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.error("Unable to get remote asset " + remoteStickerUrl + "!", e_1);
                    throw new NetworkError();
                case 5: return [2 /*return*/];
            }
        });
    });
}
var fetchRemoteChecksum = function (remoteAssetUrl) { return __awaiter(void 0, void 0, void 0, function () {
    var checksumUrl, checkSumInputStream;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                checksumUrl = remoteAssetUrl + ".checksum.txt";
                console.log("Fetching resource checksum: " + checksumUrl);
                return [4 /*yield*/, RESTClient_1.performGet(checksumUrl)];
            case 1:
                checkSumInputStream = _a.sent();
                return [2 /*return*/, checkSumInputStream.setEncoding("utf8").read()];
        }
    });
}); };
var resolveLocalStickerPath = function (currentSticker, context) {
    var safeStickerPath = stickerPathToUrl(currentSticker);
    return path_1["default"].join(getStoragePath(context), "stickers", safeStickerPath);
};
function getWSLStoragePath() {
    var appDataDirectory = "AppData";
    var userAppDataIndex = ENV_1.workbenchDirectory.indexOf(appDataDirectory);
    if (userAppDataIndex > -1) {
        var windowsGlobalStorageDirectory = path_1["default"].resolve(ENV_1.workbenchDirectory.substring(0, userAppDataIndex + appDataDirectory.length), "Roaming", "Code", "User", "globalStorage", "unthrottled.doki-theme");
        try {
            if (!fs_1["default"].existsSync(windowsGlobalStorageDirectory)) {
                fs_1["default"].mkdirSync(windowsGlobalStorageDirectory, { recursive: true });
            }
            return windowsGlobalStorageDirectory;
        }
        catch (e) {
            console.error("Unable to create roaming directory", e);
        }
    }
    throw Error("Unable to set up WSL asset directory!");
}
function getStoragePath(context) {
    return ENV_1.isWSL() ? getWSLStoragePath() : context.globalStoragePath;
}
var resolveLocalWallpaperPath = function (currentSticker, context) {
    var safeStickerPath = wallpaperPathToUrl(currentSticker);
    return path_1["default"].join(getStoragePath(context), "wallpapers", safeStickerPath);
};
var resolveLocalBackgroundPath = function (currentSticker, context) {
    var safeStickerPath = wallpaperPathToUrl(currentSticker);
    return path_1["default"].join(getStoragePath(context), "backgrounds", safeStickerPath);
};
var createCssDokiAssetUrl = function (localAssetPath) {
    return loadImageBase64FromFileProtocol("file://" + cleanPathToUrl(localAssetPath));
};
function cleanPathToUrl(stickerPath) {
    var scrubbedUrl = stickerPath.replace(/\\/g, "/");
    var unEncodedUrl = ENV_1.isWSL() ? scrubbedUrl.replace("/mnt/c", "c:") : scrubbedUrl;
    var encodedUrl = encodeURI(unEncodedUrl).replace(/[!'()*]/g, escape);
    return encodedUrl;
}
function stickerPathToUrl(currentSticker) {
    var stickerPath = currentSticker.path;
    return cleanPathToUrl(stickerPath);
}
function wallpaperPathToUrl(currentSticker) {
    var stickerPath = "/" + currentSticker.name;
    return cleanPathToUrl(stickerPath);
}
function createChecksum(data) {
    return crypto_1["default"].createHash("md5").update(data).digest("hex");
}
var calculateFileChecksum = function (filePath) {
    var fileRead = fs_1["default"].readFileSync(filePath);
    return createChecksum(fileRead);
};
var fetchLocalChecksum = function (localSticker) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, fs_1["default"].existsSync(localSticker)
                ? calculateFileChecksum(localSticker)
                : "File not downloaded, bruv."];
    });
}); };
var shouldDownloadNewAsset = function (remoteAssetUrl, localStickerPath) { return __awaiter(void 0, void 0, void 0, function () {
    var remoteChecksum, localChecksum;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchRemoteChecksum(remoteAssetUrl)];
            case 1:
                remoteChecksum = _a.sent();
                return [4 /*yield*/, fetchLocalChecksum(localStickerPath)];
            case 2:
                localChecksum = _a.sent();
                return [2 /*return*/, remoteChecksum !== localChecksum];
        }
    });
}); };
var downloadRemoteAsset = function (remoteAssetUrl, localDestination) { return __awaiter(void 0, void 0, void 0, function () {
    var parentDirectory, stickerInputStream;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                parentDirectory = path_1["default"].dirname(localDestination);
                if (!fs_1["default"].existsSync(parentDirectory)) {
                    fs_1["default"].mkdirSync(parentDirectory, { recursive: true });
                }
                console.log("Downloading remote asset: " + remoteAssetUrl);
                return [4 /*yield*/, RESTClient_1.performGet(remoteAssetUrl)];
            case 1:
                stickerInputStream = _a.sent();
                console.log("Remote asset Downloaded!");
                fs_1["default"].writeFileSync(localDestination, stickerInputStream.read());
                return [2 /*return*/];
        }
    });
}); };
function installAsset(remoteAssetUrl, localAssetPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, downloadRemoteAsset(remoteAssetUrl, localAssetPath)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var DAY_IN_MILLIS = 24 * 60 * 60 * 1000;
function hasCheckedToday(remoteAssetUrl, context) {
    var assetCheckKey = "check." + remoteAssetUrl;
    var checkDate = context.globalState.get(assetCheckKey);
    var meow = Date.now();
    if (!checkDate) {
        context.globalState.update(assetCheckKey, meow);
        return false;
    }
    else if (meow - checkDate >= DAY_IN_MILLIS) {
        context.globalState.update(assetCheckKey, meow);
        return false;
    }
    else {
        return true;
    }
}
function requiresRealBackground(theme) {
    return theme.id === DokiTheme_1.ZERO_TWO_OBSIDIAN_ID;
}
//# sourceMappingURL=StickerUpdateService.js.map