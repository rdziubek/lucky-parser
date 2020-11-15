class DateTag extends Tag {
    constructor() {
        const content = `<span id='datetime'>testhere</span>${
            Syntactics.LINE_BREAK.RENDERED}${Syntactics.NEXT_SCOPE_POINTER}<script>setTimeout(() => {
    document.getElementById('datetime').innerHTML = new Date().toLocaleString();
} ,1000)</script>`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.CURRENT_DATE);

        super(content, verboseContent);
    }
}
