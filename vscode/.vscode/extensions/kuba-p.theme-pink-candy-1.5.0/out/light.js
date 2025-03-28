"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightColors = exports.lightSyntax = void 0;
exports.lightSyntax = {
    strongPink: "#FF1277",
    pink: "#F767BB",
    purple: "#C75AF3",
    blue: "#09A1ED",
    cyan: "#13BBB7",
    lightBlue: "#6E82A6",
    green: "#2DAE58",
    lime: "#8CBA10",
    yellow: "#CF9C00",
    orange: "#FF5C57",
    mauve: "#A8759A",
    fg: "#565869",
    gray: "#777777",
    fadedGray: "#ADB1C2",
    boldPink: "#F871C0",
    boldBlue: "#1DAEf6",
    boldLightBlue: "#7B8dAE",
    boldFg: "#6C6E83",
};
exports.lightColors = {
    // Note: All non-alpha backgrounds are based on `primaryBg`.
    text: {
        // Most ui text, text editor default text
        normal: "#565869",
        // Setting header text
        bold: "#565869",
        // Text editor line number, text editor suggestion ghost text, list deemphasized text, tab unfocused title,
        // (??? x1)
        muted: "#ADB1C2",
        // Breadcrumb text, general description text, titlebar unfocused text
        light: "#999999",
        // Button text, extension button text, status bar when debugging text & icons
        //
        // DEFAULT: DISABLED_STATUS_BAR: Command bar & intellisense & list selected text & icon, badge text, banner
        // text, menu selected text
        //
        // DEFAULT: Status bar text & icons
        inverse: "#FFFFFF",
        // Peek view selected text, peek view header text, peek view filename text,
        emphasised: "#000000",
        // Text editor unnecessary text
        faded: "#000000C0",
        decoration: {
            // Text editor whitespace chars, text editor indentation guides, text editor rulers
            light: "#CECECE",
            // Text editor matching bracket border, text editor corrent indentation guide
            //
            // MONO_GUIDES: Bracket match guides
            dark: "#AAAAAA",
            // Codelens
            //
            // DEFAULT_INLAY: Inlay hint text
            codelens: "#747474",
            // BCKG_INLAY: Inlay hint text
            alt1Inlay: "#6C6E84",
            // BCKG_INLAY: Inlay hint background
            alt1InlayBgA: "#00000007",
            // ACCENT_INLAY: Inlay hint text
            alt2Inlay: "#FC9AC5",
            // ACCENT_BCKG_INLAY: Inlay hint text
            alt3Inlay: "#FC8CBD",
            // ACCENT_BCKG_INLAY: Inlay hint background
            alt3InlayBgA: "#FF127710",
        },
        // Text editor folded line, text editor hover over symbol background box
        //
        // NORMAL_LINE: Text editor current line background
        currentLineBgA: "#00000007",
        // ALT_LINE: Text editor current line border
        currentLineBorder: "#00000010",
        // Text editor selection background box, text editor matching text background box, text editor matching
        // symbol background box, text editor selection boxes, general selection, input field, terminal selection,
        selectionBg: "#FBE3EE",
        selectionBgA: "#FF12771A",
        // Text editor unfocused selection background box, text editor find current range background box, terminal
        // unfocused selection
        secondarySelectionBgA: "#FF127710",
        // Text editor tabstop background box
        tabstopBgA: "#FF12771A",
        // Text editor & search sidebar find match background box, text editor match line background, peek view
        // match background box, list filter widget background, list filter match background, terminal find match
        // background box, (??? x1)
        matchBg: "#F7F9CB",
        matchBgA: "#EFF3283A",
        // Text editor & search sidebar find match border, peek view match border, list filter match border,
        // terminal find match border,
        matchBorder: "#11C678",
        matchBorderA: "#11C67820",
    },
    accent: {
        // Cursor, text editor current line number, text editor ctrl+click, breadcrumb focused/active text, link
        // text, border of focused elements, button background, extension button background, checkbox tick,
        // progress bar, tab focused indicator, activity bar hover/active icon, activity bar active border,
        // settings modified indicator, panel active title, panel active indicator, border when draggable, command
        // bar grouping text, intellisense widget matching text, block quote left border, welcome page progress
        // bar, (??? x1)
        //
        // DEFAULT: DISABLED_STATUS_BAR: List & command bar currently selected background, intellisense widget
        // selected background, peek view widget selected background, badge background, banner background, menu
        // selected background
        //
        // DEFAULT: status bar background
        //
        // DISABLED_STATUS_BAR: MINIMAL: status bar remote icon
        //
        // MINIMAL: list & command bar matching text, badge text
        primary: "#FF1277",
        primaryHover: "#DA005F",
        link: "#FF1277",
        linkHover: "#DA005F",
        // Button background, codeblock text, (??? x1)
        //
        // DEFAULT: status bar remote background
        secondary: "#09A1ED",
        secondaryHover: "#0784C2",
    },
    diag: {
        // Ruler markers, minimap markers,
        selection: "#FBCEE2",
        match: "#F0E657",
        bracket: "#7777775A",
        // Error lens text, error lens gutter icons, peek view border, input validation text & border, testing
        // message line text (info+error), text editor underline squiggles, problems panel icons, ruler markers,
        // minimap markers, notification icons,
        //
        // DISABLED_STATUS_BAR: MINIMAL: Status bar text & icons,
        hint: "#11C678",
        info: "#00B7E4",
        warning: "#FF942F",
        error: "#FF1277",
        // Error lens line background, peek view header background, input validation background, testing message
        // line background (info+error),
        hintBg: "#DCF5EB",
        hintBgA: "#11C67820",
        infoBg: "#DAF3F9",
        infoBgA: "#00B7E420",
        warningBg: "#FBEEE1",
        warningBgA: "#FF942F20",
        errorBg: "#FBE3EE",
        errorBgA: "#FF12771A",
        // Test status icons
        testPassed: "#11C678",
        testQueued: "#00B7E4",
        testFailed: "#FF1277",
        testUnset: "#FF942F",
        testSkipped: "#ADB1C2",
    },
    git: {
        // Ruler markers, minimap markers, gutter markers, file names
        addedOrStaged: "#11C678",
        modified: "#00B7E4",
        renamed: "#13BBB7",
        untracked: "#C75AF3",
        removedOrConflicting: "#FF1277",
        ignoredOrSubmodule: "#ADB1C2",
        current: "#11C678",
        incoming: "#00B7E4",
        // Diff viewer line backgrounds, refactor preview text backgrounds
        insertedBgA: "#11C6782A",
        removedBgA: "#FF127720",
        diffDiagonal: "#ADB1C288",
        // Conflict viewer line backgrounds
        currentBgA: "#11C6782A",
        currentHeaderBgA: "#11C6786A",
        incomingBgA: "#09A1ED2A",
        incomingHeaderBgA: "#09A1ED6A",
        // Merge editor backgrounds
        mergeWordChangeBgA: "#EFF3282A",
        mergeLineChangeBgA: "#EFF3281A",
        mergeUnhandledUnfocused: "#EFF3287A",
        mergeUnhandledFocused: "#EFF328DA",
        mergeHandledUnfocused: "#0000002A",
        mergeHandledFocused: "#0000004A", // +(ruler marker)
    },
    debug: {
        // Debug toolbar icons
        start: "#11C678",
        pause: "#FF942F",
        step: "#00B7E4",
        stop: "#FF1277",
        // Gutter icons
        breakpoint: "#FF1277",
        breakpointDisabled: "#ADB1C2",
        // Exception widget background
        exceptionBg: "#F7F9CB",
        // Debug console text
        info: "#09A1ED",
        warning: "#FF5C57",
        error: "#FF2E87",
        source: "#000000",
        input: "#C75AF3",
    },
    terminal: {
        // Command decoration icons
        default: "#ADB1C2",
        success: "#11C678",
        error: "#FF1277",
        foreground: "#333333",
        ansiBlack: "#000000",
        ansiBrightBlack: "#666666",
        ansiWhite: "#FAFBFC",
        ansiBrightWhite: "#000000",
        ansiBlue: "#0F7CD7",
        ansiBrightBlue: "#09A1ED",
        ansiCyan: "#1EA0AA",
        ansiBrightCyan: "#13BBB7",
        ansiGreen: "#1EA330",
        ansiBrightGreen: "#30B95E",
        ansiYellow: "#C07205",
        ansiBrightYellow: "#CF9C00",
        ansiRed: "#FF0046",
        ansiBrightRed: "#FF3A70",
        ansiMagenta: "#B016EE",
        ansiBrightMagenta: "#C75AF3",
    },
    ui: {
        // Intellisense widget, command bar, text editor, text editor block cursor char, text editor gutter, text
        // editor minimap, breacrumbs, hover widget, peek view text editor, peek view text gutter, tab empty group,
        // tab drop-into promp, tab active background, tab hover background, tab zen mode sides, activity bar
        // background, welcome page background, panel background, notification background, command center
        // background
        //
        // MINIMAL: Badge background,
        primaryBg: "#FAFBFC",
        // Widgets, hover widget status bar, peek view list, tab row background, tab row empty background, tab
        // inactive background, tab unfocused background, sidebar background, panel section header background,
        // debug toolbar background & border, notification centre header, titlebar, block quote background,
        // code-block background, keybind table header backgrounds, keybind table even row background
        //
        // DISABLED_STATUS_BAR: MINIMAL: Status bar background, status bar remote icon background,
        secondaryBg: "#F3F3F3",
        // Sidebar section header background
        tertiaryBg: "#E5E5E5",
        // Breadcrumb, menu, any button which dropdowns
        dropdownBg: "#FAFBFC",
        // Checkbox, dropdown (+list), input field,
        inputBg: "#FAFBFC",
        // Tab group, sidebar pane, panel section, terminal, list
        primaryDropBg: "#FF12771A",
        // All borders
        border: "#CECECE",
        // Menu separator, command bar group separator, border between pinned and non-pinned tabs, (??? x1)
        separator: "#CECECE",
        // Input field foreground
        placeholderText: "#BEBEBE",
        // Menu disabled entry foreground, (this is chosen to match `placeholderText` since the disabled text also
        // has a secondary fade layer)
        disabledText: "#ABABAB",
        // Little buttons, titlebar menu buttons, editor stick hover
        //
        // DISABLED_STATUS_BAR: MINIMAL: Status bar hover/active button overlays
        hoverBgA: "#0000001A",
        activeBgA: "#0000002A",
        // Lists, command bar hover, notification hover
        //
        // MINIMAL: List unfocused selected overlay
        listHoverBgA: "#00000010",
        // DEFAULT: DISABLED_STATUS_BAR: List unfocused selected overlay
        listInactiveBgA: "#FF12771A",
        // Keybind background
        selectedBgA: "#00000010",
        // Dropdown selected, intellisense widget, peek view result, menu dropdown, command bar, command center
        // hover
        selectedBg: "#EBECED",
        // Welcome page tile on hover
        selectedSecondaryBg: "#DADADA",
        // Tree indent guide
        treeIndent: "#C7C9CA",
        // Scrollbar/minimap handle overlays
        scrollBgA: "#00000010",
        scrollHoverBgA: "#0000001F",
        scrollActiveBgA: "#0000002F",
        // Shadow whenever some scrollable element is scrolled, shadows around open widgets
        shadow: "#0000002F",
        // Status bar during debugging background
        statusDebugBg: "#11C678",
        // Status bar when no folder is open background
        statusEmptyBg: "#E5E5E5",
        // DEFAULT: Status bar hover/active button overlays
        statusHoverBgA: "#0000002F",
        statusActiveBgA: "#0000004F",
        // Tab unfocused indicator
        unfocusedTab: "#FC9AC5",
        // Activity bar inactive icon
        activityBarInactive: "#BFC0C7",
        activityBarTopInactive: "#999aa5",
        // Code actions icon
        lightBulb: "#FFC104",
        // Extension badge icons
        star: "#FFC104",
        remote: "#09A1ED",
        verified: "#11C678",
        prerelease: "#FF942F",
        sponsor: "#FF1277",
        // Chart colours
        chartLine: "#565869",
        chartBlue: "#09A1ED",
        chartGreen: "#2DAE58",
        chartYellow: "#CF9C00",
        chartOrange: "#FF5C57",
        chartRed: "#FF1277",
        chartPurple: "#C75AF3",
        preformatText: "#0896dd",
    },
    brackets: {
        one: "#2DAE58",
        two: "#09A1ED",
        three: "#CF9C00",
        four: "#FF5C57",
        five: "#C75AF3",
        six: "#A8759A",
    },
    gitGraph: [
        "#F767BB",
        "#09A1ED",
        "#2DAE58",
        "#CF9C00",
        "#FF5C57",
        "#C75AF3",
        "#A8759A",
        "#6E82A6",
        "#13BBB7",
        "#8CBA10",
    ],
    todo: {
        todo: "#565869",
        fixme: "#FF5C57",
        bug: "#FF1277",
        hack: "#CF9C00",
        maybe: "#13BBB7",
        unchecked: "#565869",
        checked: "#2DAE58",
    },
};
//# sourceMappingURL=light.js.map