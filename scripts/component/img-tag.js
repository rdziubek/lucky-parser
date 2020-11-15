class ImgTag extends Tag {
    constructor(mediaSource, width, height, alternative) {
        const content = `<img src="${mediaSource}" width="${width}" height="${height}" alt=”${alternative}”>`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.IMG);

        super(content, verboseContent);
    }
}
