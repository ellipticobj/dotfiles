"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const utils_1 = require("./utils");
const regexPatterns_1 = require("./regexPatterns");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "python-super-debugger-mode" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposableAddPrintStatement = vscode.commands.registerCommand('extension.addPrintStatements', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor.');
            return; // No open text editor
        }
        let currentFunction = null; // Track the current function scope
        editor.edit(editBuilder => {
            // @ts-ignore - editor is guaranteed to be non-null here due to prior checks
            const document = editor.document;
            for (let i = 0; i < document.lineCount; i++) {
                const line = document.lineAt(i);
                const functionMatch = RegExp(regexPatterns_1.functionRegex).exec(line.text);
                if (functionMatch) {
                    currentFunction = functionMatch[1]; // Update current function name
                }
                const variableMatch = RegExp(regexPatterns_1.variableAssignmentRegex).exec(line.text);
                if (variableMatch) {
                    const variableName = variableMatch[1];
                    let [final_index, cur_line] = (0, utils_1.checkCompleteStatement)(i, line, document);
                    i = final_index;
                    console.log("Current Line at: " + i);
                    // @ts-ignore - line.text works
                    const leadingWhitespace = RegExp(/^\s*/).exec(line.text)[0];
                    let printStatement = `${leadingWhitespace}print("<SDM>`;
                    if (currentFunction && (0, utils_1.isLineIndented)(line.text)) {
                        printStatement += ` [${currentFunction} scope]`;
                    }
                    else {
                        printStatement += ` [main block scope]`;
                    }
                    printStatement += ` ${variableName}: ", ${variableName})\n`;
                    // console.log("Done");
                    editBuilder.insert(cur_line.range.end, "\n" + printStatement);
                }
            }
        }).then(success => {
            if (!success) {
                vscode.window.showErrorMessage('Failed to add print statements.');
            }
            else {
                vscode.window.showInformationMessage('Print statements added Successfully.');
            }
        });
    });
    context.subscriptions.push(disposableAddPrintStatement);
    let disposableRemovePrints = vscode.commands.registerCommand('extension.removePrintStatements', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor.');
            return; // No open text editor
        }
        editor.edit(editBuilder => {
            // @ts-ignore - editor is guaranteed to be non-null here due to prior checks
            const document = editor.document;
            for (let i = 0; i < document.lineCount; i++) {
                const line = document.lineAt(i);
                if (regexPatterns_1.printStatementRegex.test(line.text)) {
                    // Remove the entire line including the newline character
                    const line_2 = document.lineAt(i + 1);
                    const rangeToRemove = line.rangeIncludingLineBreak;
                    const rangeToRemove_2 = line_2.rangeIncludingLineBreak;
                    editBuilder.delete(rangeToRemove);
                    editBuilder.delete(rangeToRemove_2);
                }
            }
        }).then(success => {
            if (success) {
                vscode.window.showInformationMessage('Print statements removed.');
            }
            else {
                vscode.window.showErrorMessage('Failed to remove print statements.');
            }
        });
    });
    context.subscriptions.push(disposableRemovePrints);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map