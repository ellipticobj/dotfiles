"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.appDirectory = exports.editorCssCopy = exports.editorCss = exports.CSS_COPY_FILE_NAME = exports.workbenchDirectory = exports.isWSL = exports.defaultWorkbenchDirectory = exports.SCREENSHOT_ASSETS_URL = exports.WALLPAPER_ASSETS_URL = exports.ACTUAL_BACKGROUND_ASSETS_URL = exports.BACKGROUND_ASSETS_URL = exports.VSCODE_ASSETS_URL = exports.ASSETS_URL = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
exports.ASSETS_URL = "https://doki.assets.unthrottled.io";
exports.VSCODE_ASSETS_URL = exports.ASSETS_URL + "/stickers/vscode";
exports.BACKGROUND_ASSETS_URL = exports.ASSETS_URL + "/backgrounds/wallpapers";
exports.ACTUAL_BACKGROUND_ASSETS_URL = exports.ASSETS_URL + "/backgrounds";
exports.WALLPAPER_ASSETS_URL = exports.ASSETS_URL + "/backgrounds/wallpapers/transparent";
exports.SCREENSHOT_ASSETS_URL = exports.ASSETS_URL + "/screenshots";
var main = require.main || { filename: 'yeet' };
exports.defaultWorkbenchDirectory = path_1["default"].join(path_1["default"].dirname(main.filename), 'vs', 'workbench');
exports.isWSL = function () { return !fs_1["default"].existsSync(exports.defaultWorkbenchDirectory); };
var resolveWorkbench = function () {
    var ayylmao = exports.defaultWorkbenchDirectory;
    var bruh = require.main;
    if (!exports.isWSL()) {
        return exports.defaultWorkbenchDirectory;
    }
    try {
        var usersPath_1 = path_1["default"].resolve('/mnt', 'c', 'Users');
        var users = fs_1["default"].readdirSync(usersPath_1);
        return users.map(function (user) { return path_1["default"].resolve(usersPath_1, user, 'AppData', 'Local', 'Programs', 'Microsoft VS Code', 'resources', 'app', 'out', 'vs', 'workbench'); })
            .filter(function (path) { return fs_1["default"].existsSync(path); })
            .find(Boolean) || exports.defaultWorkbenchDirectory;
    }
    catch (error) {
        return exports.defaultWorkbenchDirectory;
    }
};
exports.workbenchDirectory = resolveWorkbench();
var REMOTE_CODE_SERVER_FILE = "web.main";
var CODE_SERVER_FILE = 'web.api';
var getFileName = function () {
    if (fs_1["default"].existsSync(path_1["default"].join(exports.workbenchDirectory, "workbench.web.main.css"))) {
        return REMOTE_CODE_SERVER_FILE;
    }
    var hasRegularVSCodeStuff = fs_1["default"].existsSync(path_1["default"].join(exports.workbenchDirectory, "workbench.desktop.main.css"));
    return hasRegularVSCodeStuff ?
        'desktop.main' : CODE_SERVER_FILE;
};
var fileName = getFileName();
var CSS_FILE_NAME = "workbench." + fileName + ".css";
exports.CSS_COPY_FILE_NAME = CSS_FILE_NAME + ".copy";
exports.editorCss = path_1["default"].join(exports.workbenchDirectory, CSS_FILE_NAME);
exports.editorCssCopy = path_1["default"].join(exports.workbenchDirectory, exports.CSS_COPY_FILE_NAME);
exports.appDirectory = path_1["default"].resolve(exports.workbenchDirectory, '..', '..', '..');
//# sourceMappingURL=ENV.js.map