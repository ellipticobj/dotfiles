"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCompleteStatement = exports.isLineIndented = void 0;
// function to see if a line has indentation
function isLineIndented(line) {
    const indentationRegex = /^\s+/;
    return indentationRegex.test(line);
}
exports.isLineIndented = isLineIndented;
// function to check when the line gets comepleted based on brackets and returns updated value of i to skip next lines
function checkCompleteStatement(i, cur_line, document) {
    let openBrackets = (cur_line.text.match(/[\{\[\(]/g) || []).length;
    let closeBrackets = (cur_line.text.match(/[\}\]\)]/g) || []).length;
    let brackets = openBrackets - closeBrackets;
    console.log("bracket count = " + brackets + " for line: " + cur_line.text);
    if (brackets !== 0) {
        console.log("Entered if block");
        while (brackets !== 0) {
            i++;
            cur_line = document.lineAt(i);
            brackets = brackets + (cur_line.text.match(/[\{\[\(]/g) || []).length - (cur_line.text.match(/[\}\]\)]/g) || []).length;
            console.log("Bracket value inside if block " + brackets);
        }
    }
    return [i, cur_line];
}
exports.checkCompleteStatement = checkCompleteStatement;
//# sourceMappingURL=utils.js.map