class ImgTag extends Tag {
    constructor(mediaSource, width, height, alternative, stylesString, cssClasses) {
        const content = `<img src="${mediaSource}" width="${width}" height="${height}" alt="${alternative}"${
            stylesString ? ` style="${stylesString}"` : ``}${
            cssClasses !== `` ? ` class="${cssClasses}"` : ``}>${
            Syntactics.LINE_BREAK.RENDERED}${Syntactics.NEXT_SCOPE_POINTER.RENDERED}`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.IMG);

        super(content, verboseContent);
    }
}
