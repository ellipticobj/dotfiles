"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CACHE_FILE = exports.THEME_FOLDER = void 0;
const path = require("path");
/**
 * Location of the `$extension_root/themes` folder.
 */
exports.THEME_FOLDER = path.join(__dirname, "..", "themes");
/**
 * The location of the configuration cache file.
 */
exports.CACHE_FILE = path.join(exports.THEME_FOLDER, "cached_config.json");
//# sourceMappingURL=paths.js.map