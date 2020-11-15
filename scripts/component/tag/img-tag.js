class ImgTag extends Tag {
    constructor(mediaSource, width, height, alternative) {
        const content = `<img src="${mediaSource}" width="${width}" height="${height}" alt="${alternative}">${
            Syntactics.LINE_BREAK.RENDERED}${Syntactics.NEXT_SCOPE_POINTER}`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.IMG);

        super(content, verboseContent);
    }
}
