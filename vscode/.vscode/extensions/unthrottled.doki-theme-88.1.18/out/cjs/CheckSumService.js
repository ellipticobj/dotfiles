"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.cleanupOrigFiles = exports.restoreChecksum = exports.fixCheckSums = exports.productFile = void 0;
var path_1 = __importDefault(require("path"));
var vscode_1 = __importDefault(require("vscode"));
var fs_1 = __importDefault(require("fs"));
var crypto_1 = __importDefault(require("crypto"));
var ENV_1 = require("./ENV");
var SupportService_1 = require("./SupportService");
exports.productFile = path_1["default"].join(ENV_1.appDirectory, "product.json");
var originalProductFile = exports.productFile + ".orig." + vscode_1["default"].version;
var outDirectory = path_1["default"].resolve(ENV_1.workbenchDirectory, "..", "..");
exports.fixCheckSums = function (extensionContext) {
    try {
        var product_1 = require(exports.productFile);
        var checksumChanged = Object.entries(product_1.checksums).reduce(function (didChange, entry) {
            var filePath = entry[0], currentChecksum = entry[1];
            var checksum = computeChecksum(path_1["default"].join.apply(path_1["default"], __spreadArrays([outDirectory], filePath.split("/"))));
            if (checksum !== currentChecksum) {
                product_1.checksums[filePath] = checksum;
                return true;
            }
            return didChange;
        }, false);
        console.log(checksumChanged, exports.productFile);
        if (checksumChanged) {
            var json = JSON.stringify(product_1, null, "\t");
            try {
                if (!fs_1["default"].existsSync(originalProductFile)) {
                    fs_1["default"].renameSync(exports.productFile, originalProductFile);
                }
                fs_1["default"].writeFileSync(exports.productFile, json, { encoding: "utf8" });
            }
            catch (err) {
                vscode_1["default"].window
                    .showErrorMessage("Unable to remove [Unsupported] status!", {
                    title: "Show Help"
                })
                    .then(function (item) {
                    if (item) {
                        SupportService_1.showChecksumFixHelp(extensionContext);
                    }
                });
                console.error(err);
            }
        }
    }
    catch (e) {
        console.error("Unable to fix checksum " + exports.productFile, e);
    }
};
exports.restoreChecksum = function () {
    try {
        if (fs_1["default"].existsSync(originalProductFile)) {
            fs_1["default"].unlinkSync(exports.productFile);
            fs_1["default"].renameSync(originalProductFile, exports.productFile);
        }
    }
    catch (err) {
        console.error(err);
    }
};
function computeChecksum(file) {
    var contents = fs_1["default"].readFileSync(file);
    return crypto_1["default"]
        .createHash("sha256")
        .update(contents)
        .digest("base64")
        .replace(/=+$/, "");
}
function cleanupOrigFiles() {
    // Remove all old backup files that aren't related to the current version
    // of VSCode anymore.
    var oldOrigFiles = fs_1["default"]
        .readdirSync(ENV_1.appDirectory)
        .filter(function (file) { return /\.orig\./.test(file); })
        .filter(function (file) { return !file.endsWith(vscode_1["default"].version); });
    for (var _i = 0, oldOrigFiles_1 = oldOrigFiles; _i < oldOrigFiles_1.length; _i++) {
        var file = oldOrigFiles_1[_i];
        fs_1["default"].unlinkSync(path_1["default"].join(ENV_1.appDirectory, file));
    }
}
exports.cleanupOrigFiles = cleanupOrigFiles;
//# sourceMappingURL=CheckSumService.js.map