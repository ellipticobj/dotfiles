"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const html_format_1 = require("html-format");
class HTMLDocumentFormatter {
    provideDocumentFormattingEdits(document, options) {
        const { tabSize, insertSpaces } = options;
        const indent = insertSpaces ? " ".repeat(tabSize) : "\t";
        const { languageId: lang, uri } = document;
        const langConfig = vscode.workspace.getConfiguration(`[${lang}]`, uri);
        const config = vscode.workspace.getConfiguration("editor", uri);
        const width = langConfig["editor.wordWrapColumn"] || config.get("wordWrapColumn", 80);
        const text = document.getText();
        const range = new vscode.Range(document.positionAt(0), document.positionAt(text.length));
        return Promise.resolve([
            new vscode.TextEdit(range, (0, html_format_1.default)(text, indent, width)),
        ]);
    }
}
function activate(context) {
    const formatter = new HTMLDocumentFormatter();
    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider("html", formatter));
    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider("handlebars", formatter));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map