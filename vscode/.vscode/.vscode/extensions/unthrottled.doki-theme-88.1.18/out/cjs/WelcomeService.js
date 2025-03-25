"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.attemptToGreetUser = void 0;
var VSCodeGlobals_1 = require("./VSCodeGlobals");
var vscode = __importStar(require("vscode"));
var ChangelogService_1 = require("./ChangelogService");
var ENV_1 = require("./ENV");
var IS_GREETED = 'doki.theme.greeted';
function attemptToGreetUser(context) {
    var greeted = VSCodeGlobals_1.VSCodeGlobals.globalState.get(IS_GREETED);
    if (!greeted) {
        var welcomePanel = vscode.window.createWebviewPanel('dokiWelcomeWindow', 'The Doki Theme', vscode.ViewColumn.Active, {});
        welcomePanel.iconPath = ChangelogService_1.getWebviewIcon(context);
        welcomePanel.webview.html = ChangelogService_1.buildWebviewHtml("\n            <div>\n            <div style=\"max-width: 500px\">\n            <h2>The Doki Theme</h2>\n            <div>\n                <p>\n                    Thank You for choosing <strong>The Doki Theme</strong>!<br/>\n                    Since it is your first time, here is an overview of the plugins features.\n                </p>\n                <h2>Themes!</h2>\n                <p>\n                    With over 60+ themes (light and dark) I think you will be able to find \n                    find best girl.\n                </p>\n                <p>\n                    You can choose themes from the following Doki-Doki Theme Suites such as:\n                </p>\n                <ul>\n                    <li>AzurLane</li>\n                    <li>Blend S</li>\n                    <li>Daily life with a monster girl</li>\n                    <li>DanganRonpa</li>\n                    <li>Darling in the Franxx</li>\n                    <li>Doki-Doki Literature Club</li>\n                    <li>Don't Toy With Me, Miss Nagatoro</li>\n                    <li>EroManga Sensei</li>\n                    <li>Fate</li>\n                    <li>Future Diary</li>\n                    <li>Gate</li>\n                    <li>High School DxD</li>\n                    <li>Jahy-sama Will Not Be Discouraged!</li>\n                    <li>Kakegurui</li>\n                    <li>Kill La Kill</li>\n                    <li>KonoSuba</li>\n                    <li>Love Live!</li>\n                    <li>Lucky Star</li>\n                    <li>Miss Kobayashi's Dragon Maid</li>\n                    <li>Monogatari</li>\n                    <li>NekoPara</li>\n                    <li>Neon Genesis Evangelion</li>\n                    <li>OreGairu</li>\n                    <li>OreImo</li>\n                    <li>Quintessential Quintuplets</li>\n                    <li>Rascal does not dream of bunny girl senpai</li>\n                    <li>Re:Zero</li>\n                    <li>Steins Gate</li>\n                    <li>Sword Art Online</li>\n                    <li>Yuru Camp</li>\n                </ul>\n                <h2>Background Wallpaper & Stickers!</h2>\n                    <p>\n                        Possibly the best feature of this plugin! \n                        Decorate your visual studio code with a wallpaper of your favorite anime character.\n                        In addition, put a cute little sticker in the corner of your IDE.\n                        As a bonus, you even get a themed background when all your editor windows become closed!\n                    </p>\n                 <h3>Important!</h3>\n                 <p>\n                    Unfortunately, I am unable to provide the wallpapers/stickers without having to corrupt your VS-Code installation.\n                    I have to make changes to a CSS file to support this feature.\n                </p>\n                 <p>\n                    If I am unable to install your requested asset, I will pull up a help menu that will provide \n                    you with more information. \n                </p>\n                <p>\n                    <strong>This also means that you have to use the 'Remove Sticker' action before uninstalling the extension if you want the stickers gone.</strong>\n                </p>\n                <h2>More!</h2>\n                <p>\n                    Do you also develop using JetBrain's products (Intellij, CLion, Pycharm, etc)? \n                    Then be sure to install <a href=\"https://plugins.jetbrains.com/plugin/10804-doki-doki-literature-club-theme\">the JetBrain's Doki Theme plugin as well!</a>\n                </p>\n                </div>\n            </div>\n            <div>\n               <h2>Sample Usage</h2>\n                <img \n                style=\"z-index: 9001;\"\n                src=\"" + ENV_1.SCREENSHOT_ASSETS_URL + "/doki-theme-vscode-usage.gif\" alt=\"Theme Usage\"/>\n                Steps Demonstrated:\n                <ol>\n                    <li>Choose Color Theme</li>\n                    <li>Enable Theme's Stickers</li>\n                    <li>Reload/Restart VSCode</li>\n                    <li>Code!</li>\n                </ol> \n            </div>\n            </div>\n            ");
        VSCodeGlobals_1.VSCodeGlobals.globalState.update(IS_GREETED, true);
    }
}
exports.attemptToGreetUser = attemptToGreetUser;
//# sourceMappingURL=WelcomeService.js.map