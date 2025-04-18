"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultDict = void 0;
// thanks to https://stackoverflow.com/questions/19127650/defaultdict-equivalent-in-javascript
// no idea how to type this crap
class DefaultDict {
    constructor(defaultInit) {
        return new Proxy({}, {
            get: (target, name) => name in target ?
                target[name] :
                (target[name] = typeof defaultInit === 'function' ?
                    new defaultInit().valueOf() :
                    defaultInit)
        });
    }
}
exports.DefaultDict = DefaultDict;
class Utilities {
    /**
     * note that this returns true if obj evaluates to false.
     * (For example, of obj is null)
     */
    static isEmpty(obj) {
        if (!obj)
            return true;
        return Object.keys(obj).length === 0;
    }
    /**
     * ex: {k:{k:{}}} -> [k,k]
     * @param object returns empty list if null/undefined object
     * @param key assumes key is same throughout
     */
    static flattenNestedObject(object, key) {
        const objects = [];
        while (object != null) {
            objects.push(object);
            object = object[key];
        }
        return objects;
    }
    /**
     * ex: {k:{k:{}}} -> [k,k]
     * @param object returns empty list if null/undefined object
     * @param key object will be transversed using first non-null key
     */
    static flattenNestedObjectWithMultipleKeys(object, keys) {
        const objects = [];
        while (object != null) {
            objects.push(object);
            let innerObject;
            for (let index = 0; index < keys.length; index++) {
                innerObject = object[keys[index]];
                if (innerObject)
                    break;
            }
            object = innerObject;
        }
        return objects;
    }
    static sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
    /**
     * returns trimmed last line (split by \n)
     */
    static getLastLine(input) {
        // even on windows python uses newline :/
        // not sure if it's just my python setup?
        return input.slice(input.lastIndexOf('\n')).trim();
    }
    /**
     * see https://stackoverflow.com/a/12034334/6629672
     * @param string
     */
    static escapeHtml(input) {
        if (input == null)
            return null;
        return input.replace(/[&<>"'`=\/]/g, function (s) {
            return Utilities.entityMap[s];
        });
    }
}
Utilities.entityMap = {
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "/": "&#x2F;",
    "<": "&lt;",
    "=": "&#x3D;",
    ">": "&gt;",
    "`": "&#x60;",
};
exports.default = Utilities;
//# sourceMappingURL=utilities.js.map