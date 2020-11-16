class DateTag extends Tag {
    constructor() {
        const content = `<span id="datetime">pobieranie&hellip;</span>${
            Syntactics.LINE_BREAK.RENDERED}${Syntactics.NEXT_SCOPE_POINTER.RENDERED}`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.CURRENT_DATE);

        super(content, verboseContent);
    }
}
