// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAsyncDisposableRegistry = exports.IEditorUtils = exports.BANNER_NAME_INTERACTIVE_SHIFTENTER = exports.BANNER_NAME_DS_SURVEY = exports.BANNER_NAME_PROPOSE_LS = exports.BANNER_NAME_LS_SURVEY = exports.IPythonExtensionBanner = exports.IBrowserService = exports.IExtensions = exports.IExtensionContext = exports.ISocketServer = exports.IConfigurationService = exports.ICurrentProcess = exports.IRandom = exports.IPathUtils = exports.IInstaller = exports.ModuleNamePurpose = exports.Product = exports.ProductType = exports.InstallerResponse = exports.ILogger = exports.LogLevel = exports.IPersistentStateFactory = exports.WORKSPACE_MEMENTO = exports.GLOBAL_MEMENTO = exports.IMemento = exports.IDisposableRegistry = exports.IsWindows = exports.IDocumentSymbolProvider = exports.IOutputChannel = void 0;
exports.IOutputChannel = Symbol('IOutputChannel');
exports.IDocumentSymbolProvider = Symbol('IDocumentSymbolProvider');
exports.IsWindows = Symbol('IS_WINDOWS');
exports.IDisposableRegistry = Symbol('IDiposableRegistry');
exports.IMemento = Symbol('IGlobalMemento');
exports.GLOBAL_MEMENTO = Symbol('IGlobalMemento');
exports.WORKSPACE_MEMENTO = Symbol('IWorkspaceMemento');
exports.IPersistentStateFactory = Symbol('IPersistentStateFactory');
var LogLevel;
(function (LogLevel) {
    LogLevel["Information"] = "Information";
    LogLevel["Error"] = "Error";
    LogLevel["Warning"] = "Warning";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
exports.ILogger = Symbol('ILogger');
var InstallerResponse;
(function (InstallerResponse) {
    InstallerResponse[InstallerResponse["Installed"] = 0] = "Installed";
    InstallerResponse[InstallerResponse["Disabled"] = 1] = "Disabled";
    InstallerResponse[InstallerResponse["Ignore"] = 2] = "Ignore";
})(InstallerResponse || (exports.InstallerResponse = InstallerResponse = {}));
var ProductType;
(function (ProductType) {
    ProductType["Linter"] = "Linter";
    ProductType["Formatter"] = "Formatter";
    ProductType["TestFramework"] = "TestFramework";
    ProductType["RefactoringLibrary"] = "RefactoringLibrary";
    ProductType["WorkspaceSymbols"] = "WorkspaceSymbols";
})(ProductType || (exports.ProductType = ProductType = {}));
var Product;
(function (Product) {
    Product[Product["pytest"] = 1] = "pytest";
    Product[Product["nosetest"] = 2] = "nosetest";
    Product[Product["pylint"] = 3] = "pylint";
    Product[Product["flake8"] = 4] = "flake8";
    Product[Product["pep8"] = 5] = "pep8";
    Product[Product["pylama"] = 6] = "pylama";
    Product[Product["prospector"] = 7] = "prospector";
    Product[Product["pydocstyle"] = 8] = "pydocstyle";
    Product[Product["yapf"] = 9] = "yapf";
    Product[Product["autopep8"] = 10] = "autopep8";
    Product[Product["mypy"] = 11] = "mypy";
    Product[Product["unittest"] = 12] = "unittest";
    Product[Product["ctags"] = 13] = "ctags";
    Product[Product["rope"] = 14] = "rope";
    Product[Product["isort"] = 15] = "isort";
    Product[Product["black"] = 16] = "black";
    Product[Product["bandit"] = 17] = "bandit";
})(Product || (exports.Product = Product = {}));
var ModuleNamePurpose;
(function (ModuleNamePurpose) {
    ModuleNamePurpose[ModuleNamePurpose["install"] = 1] = "install";
    ModuleNamePurpose[ModuleNamePurpose["run"] = 2] = "run";
})(ModuleNamePurpose || (exports.ModuleNamePurpose = ModuleNamePurpose = {}));
exports.IInstaller = Symbol('IInstaller');
exports.IPathUtils = Symbol('IPathUtils');
exports.IRandom = Symbol('IRandom');
exports.ICurrentProcess = Symbol('ICurrentProcess');
exports.IConfigurationService = Symbol('IConfigurationService');
exports.ISocketServer = Symbol('ISocketServer');
exports.IExtensionContext = Symbol('ExtensionContext');
exports.IExtensions = Symbol('IExtensions');
exports.IBrowserService = Symbol('IBrowserService');
exports.IPythonExtensionBanner = Symbol('IPythonExtensionBanner');
exports.BANNER_NAME_LS_SURVEY = 'LSSurveyBanner';
exports.BANNER_NAME_PROPOSE_LS = 'ProposeLS';
exports.BANNER_NAME_DS_SURVEY = 'DSSurveyBanner';
exports.BANNER_NAME_INTERACTIVE_SHIFTENTER = 'InteractiveShiftEnterBanner';
exports.IEditorUtils = Symbol('IEditorUtils');
exports.IAsyncDisposableRegistry = Symbol('IAsyncDisposableRegistry');
//# sourceMappingURL=types.js.map