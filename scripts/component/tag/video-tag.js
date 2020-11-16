class VideoTag extends Tag {
    constructor(width, height, source, additionalAttribute, stylesString, cssClasses) {
        const sourceFileFormat = source.substring(source.indexOf(`.`) + 1, source.length);

        const content = `<video width="${width}" height="${height}" ${additionalAttribute}${
            stylesString ? ` style="${stylesString}"` : ``}${
            cssClasses !== `` ? ` class="${cssClasses}"` : ``}>
    <source src="${source}" type="video/${sourceFileFormat}">
</video>${
            Syntactics.LINE_BREAK.RENDERED}${Syntactics.NEXT_SCOPE_POINTER.RENDERED}`;

        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.VIDEO);

        super(content, verboseContent);
    }
}
