"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printStatementRegex = exports.variableAssignmentRegex = exports.functionRegex = void 0;
exports.functionRegex = /def\s+(\w+)\s*\(/;
// const variableAssignmentRegex = /(\w+)\s*=\s*(?!(?:\d+|None|True|False|["']).*)\S.*/;
// const variableAssignmentRegex = /(\w+(\.\w+)*)\s*=\s*(?!(?:\d+|None|True|False|["']).*)\S.*/;
exports.variableAssignmentRegex = /([\w\[\]\'\"\.]+)\s*=\s*(?!(?:\d+|None|True|False|["']).*)\S.*/;
exports.printStatementRegex = /^\s*print\("<SDM>/;
//# sourceMappingURL=regexPatterns.js.map