"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const printDir_1 = require("../src/printDir");
suite("printDir", () => {
    test("adds print on new line", () => {
        let currentLine = "foo";
        let result = printDir_1.default(currentLine.split('\n'), 0);
        assert.equal(result[0], currentLine + "; print(foo)");
    });
    test("can handle expressions", () => {
        let currentLine = "x=1";
        let result = printDir_1.default(currentLine.split('\n'), 0);
        assert.equal(result[0], currentLine + "; print(x)");
    });
    test("print keeps whitespace", () => {
        let currentLine = "  foo";
        let result = printDir_1.default(currentLine.split('\n'), 0);
        assert.equal(result[0], currentLine + '; print(  foo)');
    });
    test("print(dir())'s var ending with .", () => {
        let currentLine = "foo.";
        let result = printDir_1.default(currentLine.split('\n'), 0);
        assert.equal(result[0], "foo; print(dir(foo))");
    });
    test("print(dir())'s x=foo.", () => {
        let currentLine = "x=foo.";
        let result = printDir_1.default(currentLine.split('\n'), 0);
        assert.equal(result[0], "x=foo; print(dir(x))");
    });
    test("prints conditionals", () => {
        // testing this is a bit difficult because it has a random var name
        var currentLine = "if(1+1==2):";
        var result = printDir_1.default(currentLine.split('\n'), 0);
        assert.equal(result[0].includes('print('), true);
        var currentLine = "if 1+1==2:";
        var result = printDir_1.default(currentLine.split('\n'), 0);
        assert.equal(result[0].includes('print('), true);
    });
});
//# sourceMappingURL=printDir.spec.js.map