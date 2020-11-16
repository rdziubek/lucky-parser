class ParentSet extends Tag {
    constructor(language, encoding, title, stylesString, cssClasses) {
        const content = `<!DOCTYPE html${
            stylesString ? ` style="${stylesString}"` : ``}${
            cssClasses !== `` ? ` class="${cssClasses}"` : ``}>
<html lang="${language}">
<head>
    <meta charset="${encoding}">
    <title>${title}</title>
</head>
<body>
${Syntactics.NEXT_SCOPE_POINTER.RENDERED}
</body>
</html>`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.PARENT_SET);

        super(content, verboseContent);
    }
}
