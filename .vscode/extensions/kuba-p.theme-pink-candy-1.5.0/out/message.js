"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showReloadOnLoadConfirmation = exports.showReloadConfirmation = void 0;
const vscode = require("vscode");
/**
 * Displays the reload confirmation.
 */
function showReloadConfirmation() {
    vscode.window
        .showInformationMessage("You need to reload VS Code to see the changes.", "Reload")
        .then((button) => {
        if (button == "Reload") {
            vscode.commands.executeCommand("workbench.action.reloadWindow");
        }
    });
}
exports.showReloadConfirmation = showReloadConfirmation;
/**
 * Displays the reload confirmation if the settings were modified outside of vscode running.
 */
function showReloadOnLoadConfirmation() {
    vscode.window
        .showInformationMessage("Detected new changes in the Pink Candy Theme configuration since the last time VS Code was open. You need to reload VS Code to see the changes.", "Reload")
        .then((button) => {
        if (button == "Reload") {
            vscode.commands.executeCommand("workbench.action.reloadWindow");
        }
    });
}
exports.showReloadOnLoadConfirmation = showReloadOnLoadConfirmation;
//# sourceMappingURL=message.js.map