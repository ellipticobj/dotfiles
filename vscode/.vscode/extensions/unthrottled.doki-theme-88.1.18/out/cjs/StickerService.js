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
exports.removeStickers = exports.readCSS = exports.hideWaterMark = exports.installWallPaper = exports.installStickers = exports.getBackgroundIndex = exports.getWallpaperIndex = exports.getHideIndex = exports.getStickerIndex = exports.InstallStatus = void 0;
var vscode = __importStar(require("vscode"));
var fs_1 = __importDefault(require("fs"));
var ENV_1 = require("./ENV");
var StickerUpdateService_1 = require("./StickerUpdateService");
var ConfigWatcher_1 = require("./ConfigWatcher");
var InstallStatus;
(function (InstallStatus) {
    InstallStatus[InstallStatus["INSTALLED"] = 0] = "INSTALLED";
    InstallStatus[InstallStatus["NOT_INSTALLED"] = 1] = "NOT_INSTALLED";
    InstallStatus[InstallStatus["FAILURE"] = 2] = "FAILURE";
    InstallStatus[InstallStatus["NETWORK_FAILURE"] = 3] = "NETWORK_FAILURE";
})(InstallStatus = exports.InstallStatus || (exports.InstallStatus = {}));
var stickerComment = "/* Stickers */";
var hideComment = "/* Hide Watermark */";
var wallpaperComment = "/* Background Image */";
var backgroundComment = "/* EmptyEditor Image */";
exports.getStickerIndex = function (currentCss) {
    return currentCss.indexOf(stickerComment);
};
exports.getHideIndex = function (currentCss) {
    return currentCss.indexOf(hideComment);
};
exports.getWallpaperIndex = function (currentCss) {
    return currentCss.indexOf(wallpaperComment);
};
exports.getBackgroundIndex = function (currentCss) {
    return currentCss.indexOf(backgroundComment);
};
function buildWallpaperCss(_a) {
    var wallpaperURL = _a.wallpaperImageURL, backgroundAnchoring = _a.backgroundAnchoring;
    return wallpaperComment + "\n  [id=\"workbench.parts.editor\"] .split-view-view .editor-container .editor-instance>.monaco-editor .overflow-guard>.monaco-scrollable-element>.monaco-editor-background{background: none;}\n\n\n  [id=\"workbench.parts.editor\"] .split-view-view .editor-container .editor-instance>.monaco-editor  .overflow-guard>.monaco-scrollable-element::before,\n  .overflow-guard,\n  .tab,\n  /* settings UI */\n  .settings-editor>.settings-body .settings-toc-container,\n  /* end settings UI */\n  .tabs-container,\n  .monaco-pane-view, \n  .composite.title,\n  /* welcome window */\n  .editor-container,\n  button.getting-started-category,\n  /* end welcome window */\n  div.header, /* extensions header */\n  .content,\n  /* terminal stuff */\n  .terminal .xterm,\n  .monaco-workbench .pane-body.integrated-terminal .terminal-wrapper,\n  .xterm .xterm-screen canvas,\n  /* end terminal stuff */\n  .monaco-select-box,\n  .pane-header, \n  .minimap-decorations-layer,\n  .xterm-cursor-layer,\n  .monaco-breadcrumbs,\n  /* sticky lines */\n  .monaco-editor .sticky-line-content,\n  .monaco-editor .sticky-line-number,\n  .monaco-list .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-row.monaco-list-row,\n  /* end sticky lines */\n  .decorationsOverviewRuler,\n  .monaco-workbench .part.editor>.content .editor-group-container>.title .tabs-breadcrumbs .breadcrumbs-control,\n  .ref-tree, /* find usages */\n  .head, /* find usages */\n  .monaco-workbench .part.editor>.content .editor-group-container>.title .editor-actions,  \n  .welcomePageFocusElement /* welcome screen */\n  /*.terminal-outer-container  Terminal outer edge */\n  {\n    background-image: url('" + wallpaperURL + "') !important;\n    background-position: " + backgroundAnchoring + " !important;\n    background-attachment: fixed !important;\n    background-repeat: no-repeat !important;\n    background-size: cover !important;\n  }\n  \n  /*settings UI */\n  .monaco-list.list_id_1 .monaco-list-rows,\n  .settings-tree-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows,\n  .monaco-list.list_id_2:not(.drop-target) .monaco-list-row:hover:not(.selected):not(.focused),\n  /* source control diff editor */  \n  .lines-content.monaco-editor-background,\n  /* output panel */\n  .overflow-guard > .margin,\n  .overflow-guard > .margin > .margin-view-overlays,\n  .monaco-workbench .part.panel > .content .monaco-editor .monaco-editor-background,\n  /* debugger panel */\n  [id=\"workbench.panel.repl\"] *\n   {\n    background-color: transparent !important;\n  }\n\n  .quick-input-widget\n  {\n    backdrop-filter: blur(5px) !important;\n  }\n\n  .monaco-breadcrumbs {\n    background-color: #00000000 !important;\n  }\n\n  [id=\"workbench.view.explorer\"] .monaco-list-rows,\n  [id=\"workbench.view.explorer\"] .pane-header,\n  [id=\"workbench.view.explorer\"] .monaco-pane-view,\n  [id=\"workbench.view.explorer\"] .split-view-view,\n  [id=\"workbench.view.explorer\"] .monaco-tl-twistie,\n  [id=\"terminal\"] .pane-header,\n  [id=\"terminal\"] .monaco-pane-view,\n  .explorer-folders-view > .monaco-list > .monaco-scrollable-element > .monaco-list-rows,\n  .show-file-icons > .monaco-list > .monaco-scrollable-element > .monaco-list-rows,\n  .extensions-list > .monaco-list > .monaco-scrollable-element > .monaco-list-rows,\n  div.details .header-container .header, /* extension list tree*/\n  /* Welcome Page */\n  .monaco-workbench .part.editor>.content .gettingStartedContainer .gettingStartedSlideCategories>.gettingStartedCategoriesContainer>.header,\n  .monaco-workbench .part.editor>.content .gettingStartedContainer .gettingStartedSlideCategories .getting-started-category\n  /* end welcome page */\n  {\n    background-color: #00000000 !important;\n    background-image: none !important;\n    border: none !important;\n  }\n\n  .monaco-icon-label-container {\n    background: none !important;\n  }\n  ";
}
function buildHideWallpaperOnEmptyEditor() {
    return " \n  .monaco-workbench .part.editor > .content {\n    background-image: none !important;\n}\n  ";
}
function buildBackgroundCss(_a) {
    var backgroundUrl = _a.backgroundImageURL, backgroundAnchoring = _a.backgroundAnchoring;
    return backgroundComment + "\n  .monaco-workbench .part.editor > .content {\n    background-image: url('" + backgroundUrl + "') !important;\n    background-position: " + backgroundAnchoring + ";\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: cover;\n    content:'';\n    z-index:9001;\n    width:100%;\n    height:100%;\n    opacity:1;\n}\n  ";
}
function buildStickerCss(_a) {
    var stickerUrl = _a.stickerDataURL;
    var stickerPositioningStyles = vscode.workspace.getConfiguration(ConfigWatcher_1.CONFIG_NAME).get(ConfigWatcher_1.CONFIG_STICKER_CSS) + '';
    var style = "content:'';pointer-events:none;position:absolute;z-index:100;width:100%;height:100%;background-repeat:no-repeat;opacity:1;"
        + stickerPositioningStyles + (stickerPositioningStyles.endsWith(';') ? '' : ';');
    return "\n  " + stickerComment + "\n  body > .monaco-workbench > .monaco-grid-view > .monaco-grid-branch-node > .monaco-split-view2 > .split-view-container::after,\n  body > .monaco-workbench > .monaco-grid-view > .monaco-grid-branch-node > .monaco-split-view2 > .monaco-scrollable-element > .split-view-container::after\n  {background-image: url('" + stickerUrl + "');" + style + "}\n\n  /* Makes sure notification shows on top of sticker */\n  .monaco-workbench>.notifications-center,\n  .notifications-toasts {\n    z-index: 9002 !important;\n  }\n\n  /* glass pane to show sticker */\n  .notification-toast {\n    backdrop-filter: blur(2px) !important;\n  }\n";
}
function buildHideWaterMarkCSS() {
    return "\n  " + hideComment + "\n  .monaco-workbench .part.editor.has-watermark>.content.empty .editor-group-container>.editor-group-letterpress,\n  .part.editor>.content .editor-group-container .editor-group-watermark>.letterpress,\n  .monaco-workbench .part.editor>.content .editor-group-container>.editor-group-watermark>.shortcuts>.watermark-box,\n  .monaco-workbench .part.editor>.content.empty>.watermark>.watermark-box \n  {\n    display: none !important;\n  }\n";
}
function buildCSSWithStickers(dokiStickers) {
    return "" + getStickerScrubbedCSS() + buildStickerCss(dokiStickers);
}
function buildCSSWithWallpaperAndBackground(dokiStickers) {
    var wallpaperScrubbedCSS = getWallpaperScrubbedCSS();
    var backgroundAndWallpaperScrubbedCSS = getBackgroundScrubbedCSS(wallpaperScrubbedCSS);
    var config = ConfigWatcher_1.getConfig();
    var wallPaperCss = config.get(ConfigWatcher_1.CONFIG_WALLPAPER_ENABLED) ? buildWallpaperCss(dokiStickers) : '';
    var backgroundCSS = config.get(ConfigWatcher_1.CONFIG_BACKGROUND_ENABLED) ?
        buildBackgroundCss(dokiStickers) :
        // If the background image isn't set, then the wallpaper will be drawn over it.
        (!!wallPaperCss ? buildHideWallpaperOnEmptyEditor() : '');
    return "" + backgroundAndWallpaperScrubbedCSS + wallPaperCss + backgroundCSS;
}
function buildCSSWithoutWatermark() {
    return "" + getWatermarkScrubbedCSS() + buildHideWaterMarkCSS();
}
function installEditorStyles(styles) {
    fs_1["default"].writeFileSync(ENV_1.editorCss, styles, "utf-8");
}
function canWrite() {
    try {
        fs_1["default"].accessSync(ENV_1.editorCss, fs_1["default"].constants.W_OK);
        return true;
    }
    catch (error) {
        return false;
    }
}
function installStickers(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, installStyles(stickerInstallPayload, context, function (stickersAndWallpaper) {
                    return buildCSSWithStickers(stickersAndWallpaper);
                })];
        });
    });
}
exports.installStickers = installStickers;
function installWallPaper(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, installStyles(stickerInstallPayload, context, function (stickersAndWallpaper) {
                    return buildCSSWithWallpaperAndBackground(stickersAndWallpaper);
                })];
        });
    });
}
exports.installWallPaper = installWallPaper;
function hideWaterMark() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!canWrite())
                return [2 /*return*/, InstallStatus.FAILURE];
            installEditorStyles(buildCSSWithoutWatermark());
            return [2 /*return*/, InstallStatus.INSTALLED];
        });
    });
}
exports.hideWaterMark = hideWaterMark;
function installStyles(stickerInstallPayload, context, cssDecorator) {
    return __awaiter(this, void 0, void 0, function () {
        var stickersAndWallpaper, stickerStyles, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!canWrite()) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, StickerUpdateService_1.forceUpdateSticker(context, stickerInstallPayload)];
                case 2:
                    stickersAndWallpaper = _a.sent();
                    stickerStyles = cssDecorator(stickersAndWallpaper);
                    installEditorStyles(stickerStyles);
                    return [2 /*return*/, InstallStatus.INSTALLED];
                case 3:
                    e_1 = _a.sent();
                    console.error("Unable to install sticker!", e_1);
                    if (e_1 instanceof StickerUpdateService_1.NetworkError) {
                        return [2 /*return*/, InstallStatus.NETWORK_FAILURE];
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, InstallStatus.FAILURE];
            }
        });
    });
}
function getScrubbedCSS() {
    var currentCss = readCSS();
    return indexGetters.reduce(function (trimmedCss, indexFinderDude) { return trimCss(trimmedCss, indexFinderDude(trimmedCss)); }, currentCss);
}
function readCSS() {
    return fs_1["default"].readFileSync(ENV_1.editorCss, "utf-8");
}
exports.readCSS = readCSS;
function readVSCodeCSSAndScrubAsset(getOtherAssets, getAssetToRemoveIndex) {
    var currentVSCodeCss = fs_1["default"].readFileSync(ENV_1.editorCss, "utf-8");
    return scrubProvidedCssOfAsset(getOtherAssets, getAssetToRemoveIndex, currentVSCodeCss);
}
function scrubProvidedCssOfAsset(getOtherAssets, getAssetToRemoveIndex, currentCss) {
    var otherAssetIndices = getOtherAssets.map(function (assetFinder) { return assetFinder(currentCss); });
    var assetToRemoveIndex = getAssetToRemoveIndex(currentCss);
    var otherIndex = otherAssetIndices.reduce(function (accum, index) { return Math.max(accum, index); }, -1);
    if (otherIndex < 0) {
        return trimCss(currentCss, assetToRemoveIndex);
    }
    else if (assetToRemoveIndex > -1) {
        var smolestGreater = otherAssetIndices
            .filter(function (otherIndex) { return assetToRemoveIndex < otherIndex; })
            .reduce(function (accum, index) { return Math.min(accum, index); }, Number.POSITIVE_INFINITY);
        return (currentCss.substring(0, assetToRemoveIndex) +
            (smolestGreater < Number.POSITIVE_INFINITY
                ? "\n" + currentCss.substring(smolestGreater, currentCss.length)
                : ""));
    }
    return currentCss;
}
var indexGetters = [
    exports.getStickerIndex, exports.getWallpaperIndex, exports.getHideIndex, exports.getBackgroundIndex
];
function getWallpaperScrubbedCSS() {
    return readVSCodeCSSAndScrubAsset(indexGetters.filter(function (getter) { return getter !== exports.getWallpaperIndex; }), exports.getWallpaperIndex);
}
function getBackgroundScrubbedCSS(vscodeCSS) {
    return scrubProvidedCssOfAsset(indexGetters.filter(function (getter) { return getter !== exports.getBackgroundIndex; }), exports.getBackgroundIndex, vscodeCSS);
}
function getStickerScrubbedCSS() {
    return readVSCodeCSSAndScrubAsset(indexGetters.filter(function (getter) { return getter !== exports.getStickerIndex; }), exports.getStickerIndex);
}
function getWatermarkScrubbedCSS() {
    return readVSCodeCSSAndScrubAsset(indexGetters.filter(function (getter) { return getter !== exports.getHideIndex; }), exports.getHideIndex);
}
function trimCss(currentCss, index) {
    if (index >= 0) {
        return currentCss.substr(0, index).trim();
    }
    return currentCss;
}
var scrubCSSFile = function () {
    var scrubbedCSS = getScrubbedCSS();
    fs_1["default"].writeFileSync(ENV_1.editorCss, scrubbedCSS, "utf-8");
};
// :(
function removeStickers() {
    if (canWrite()) {
        try {
            if (fs_1["default"].existsSync(ENV_1.editorCssCopy)) {
                fs_1["default"].unlinkSync(ENV_1.editorCssCopy);
                scrubCSSFile();
                return InstallStatus.INSTALLED;
            }
            scrubCSSFile();
            return InstallStatus.NOT_INSTALLED;
        }
        catch (e) {
            console.error("Unable to remove stickers!", e);
            return InstallStatus.FAILURE;
        }
    }
    return InstallStatus.FAILURE;
}
exports.removeStickers = removeStickers;
//# sourceMappingURL=StickerService.js.map