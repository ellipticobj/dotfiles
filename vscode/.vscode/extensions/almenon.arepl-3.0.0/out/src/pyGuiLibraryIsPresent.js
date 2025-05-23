"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pythonGuiLibraryIsPresent;
const settings_1 = require("./settings");
function pythonGuiLibraryIsPresent(code) {
    let pyGuiLibraries = (0, settings_1.settings)().get("pyGuiLibraries");
    pyGuiLibraries = pyGuiLibraries.filter(library => library.trim() != "");
    if (pyGuiLibraries.length == 0) {
        return false;
    }
    const pyGuiLibrariesImport = new RegExp("^import (" + pyGuiLibraries.join("|") + ")", "im");
    const pyGuiLibrariesFromImport = new RegExp("^from (" + pyGuiLibraries.join("|") + ")", "im");
    if (code.match(pyGuiLibrariesImport) || code.match(pyGuiLibrariesFromImport)) {
        return true;
    }
    else
        return false;
}
//# sourceMappingURL=pyGuiLibraryIsPresent.js.map