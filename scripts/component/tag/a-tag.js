class ATag extends Tag {
    constructor(url, text) {
        const content = `<a href="${url}">${text}</a>${
            Syntactics.LINE_BREAK.RENDERED}${Syntactics.NEXT_SCOPE_POINTER.RENDERED}`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.A);

        super(content, verboseContent);
    }
}
