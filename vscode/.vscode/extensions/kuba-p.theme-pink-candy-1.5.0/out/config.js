"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetConfig = exports.getConfig = exports.Config = void 0;
const paths_1 = require("./paths");
const fs = require("fs");
const vscode = require("vscode");
function isValidMarkdownSyntaxStyle(str) {
    return str == "traditional" || str == "mutedPlaintext" || str == "alternate";
}
function isValidInlayHintStyle(str) {
    return (str == "noBackground" ||
        str == "faintBackground" ||
        str == "accent" ||
        str == "accentBackground");
}
function isValidGlobalAccent(str) {
    return str == "default" || str == "disabledStatusBar" || str == "minimal";
}
/**
 * The configuration of the theme.
 */
class Config {
    constructor(markdownSyntaxStyle, italicComments, altCurrentLine, monochromeBracketGuides, inlayStyle, globalAccent) {
        this.markdownSyntaxStyle = markdownSyntaxStyle;
        this.italicComments = italicComments;
        this.altCurrentLine = altCurrentLine;
        this.inlayStyle = inlayStyle;
        this.monochromeBracketGuides = monochromeBracketGuides;
        this.globalAccent = globalAccent;
    }
    /**
     * Returns whether the theme configuration has been modified since the last time it was written to the cache.
     */
    isModified() {
        // If there is no cache, then we need to assume that the configuration has been modified. We also want to
        // create the cache file for future use.
        if (!fs.existsSync(paths_1.CACHE_FILE)) {
            this.writeToCache();
            return true;
        }
        try {
            // For details about handling deprecated fields, see: /docs/Design Document.md#cached-configuration
            let cachedConfig = JSON.parse(fs.readFileSync(paths_1.CACHE_FILE, { encoding: "utf8" }));
            if (cachedConfig.markdownSyntaxStyle === undefined) {
                if (cachedConfig.mutedMd === true) {
                    cachedConfig.markdownSyntaxStyle = "mutedPlaintext";
                }
                else {
                    cachedConfig.markdownSyntaxStyle = "traditional";
                }
            }
            if (this.markdownSyntaxStyle == cachedConfig.markdownSyntaxStyle &&
                this.altCurrentLine == cachedConfig.altCurrentLine &&
                this.italicComments == cachedConfig.italicComments &&
                this.monochromeBracketGuides == cachedConfig.monochromeBracketGuides &&
                this.inlayStyle == cachedConfig.inlayStyle &&
                this.globalAccent == cachedConfig.globalAccent) {
                return false;
            }
            else {
                return true;
            }
        }
        catch {
            return true;
        }
    }
    /**
     * Writes the configuration to the cache file.
     */
    writeToCache() {
        fs.writeFileSync(paths_1.CACHE_FILE, JSON.stringify(this, undefined, 4), { encoding: "utf8" });
    }
}
exports.Config = Config;
/**
 * The default configuration settings.
 *
 * Note: these default values should be kept in-line with `package.json`.
 */
Config.DEFAULT = new Config("traditional", false, false, false, "noBackground", "default");
/**
 * Returns the current configuration of the theme.
 */
function getConfig() {
    const config = vscode.workspace.getConfiguration("theme-pink-candy");
    // For details about handling deprecated settings, see: /docs/Design Document.md#configuration-vs-code
    let markdownSyntaxStyle;
    let markdownSyntaxStyleRaw = config.inspect("markdownSyntaxStyle");
    if (markdownSyntaxStyleRaw.globalValue === undefined) {
        // `theme-pink-candy.markdownSyntaxStyle` is not defined within the user configuration.
        let mutedMdRaw = config.inspect("mutedMarkdownPlaintext");
        if (mutedMdRaw.globalValue === undefined) {
            // `theme-pink-candy.mutedMarkdownPlaintext` is not defined within the user configuration.
            markdownSyntaxStyle = "traditional";
        }
        else if (mutedMdRaw.globalValue === true) {
            markdownSyntaxStyle = "mutedPlaintext";
        }
        else {
            markdownSyntaxStyle = "traditional";
        }
    }
    else {
        if (typeof markdownSyntaxStyleRaw.globalValue === "string") {
            let value = markdownSyntaxStyleRaw.globalValue;
            if (isValidMarkdownSyntaxStyle(value)) {
                markdownSyntaxStyle = value;
            }
            else {
                markdownSyntaxStyle = "traditional";
            }
        }
        else {
            markdownSyntaxStyle = "traditional";
        }
    }
    let italicComments = config.get("italicizedComments");
    if (italicComments === undefined) {
        italicComments = false;
    }
    let altCurrentLine = config.get("alternateCurrentLineStyle");
    if (altCurrentLine === undefined) {
        altCurrentLine = false;
    }
    let monochromeBracketGuides = config.get("monochromeBracketPairGuides");
    if (monochromeBracketGuides === undefined) {
        monochromeBracketGuides = false;
    }
    let inlayStyle;
    let inlayStyleRaw = config.get("inlayHintStyle");
    if (inlayStyleRaw === undefined) {
        inlayStyleRaw = "noBackground";
    }
    if (isValidInlayHintStyle(inlayStyleRaw)) {
        inlayStyle = inlayStyleRaw;
    }
    else {
        inlayStyle = "noBackground";
    }
    let globalAccent;
    let globalAccentRaw = config.get("globalAccent");
    if (globalAccentRaw === undefined) {
        globalAccentRaw = "default";
    }
    if (isValidGlobalAccent(globalAccentRaw)) {
        globalAccent = globalAccentRaw;
    }
    else {
        globalAccent = "default";
    }
    return new Config(markdownSyntaxStyle, italicComments, altCurrentLine, monochromeBracketGuides, inlayStyle, globalAccent);
}
exports.getConfig = getConfig;
/**
 * Resets the configuration of the theme to the default settings by undefining every configuration key, and resets
 * the cache as well.
 */
function resetConfig() {
    Config.DEFAULT.writeToCache();
    const config = vscode.workspace.getConfiguration("theme-pink-candy");
    // Note: this should undefine all settings defined in `package.json`.
    config.update("mutedMarkdownPlaintext", undefined, true);
    config.update("markdownSyntaxStyle", undefined, true);
    config.update("italicizedComments", undefined, true);
    config.update("alternateCurrentLineStyle", undefined, true);
    config.update("monochromeBracketPairGuides", undefined, true);
    config.update("inlayHintStyle", undefined, true);
    config.update("globalAccent", undefined, true);
}
exports.resetConfig = resetConfig;
//# sourceMappingURL=config.js.map