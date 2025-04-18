"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFileSystem = exports.IPlatformService = exports.IRegistry = exports.RegistryHive = void 0;
var RegistryHive;
(function (RegistryHive) {
    RegistryHive[RegistryHive["HKCU"] = 0] = "HKCU";
    RegistryHive[RegistryHive["HKLM"] = 1] = "HKLM";
})(RegistryHive || (exports.RegistryHive = RegistryHive = {}));
exports.IRegistry = Symbol('IRegistry');
exports.IPlatformService = Symbol('IPlatformService');
exports.IFileSystem = Symbol('IFileSystem');
//# sourceMappingURL=types.js.map