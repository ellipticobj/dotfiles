"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetCmd = void 0;
const config = require("./config");
const vscode = require("vscode");
/**
 * Resets all extension settings.
 */
exports.resetCmd = vscode.commands.registerCommand("theme-pink-candy.restoreDefaultConfig", () => {
    config.resetConfig();
});
//# sourceMappingURL=command.js.map