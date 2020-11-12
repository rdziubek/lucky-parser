class ParentSet extends Tag {
    constructor(language, encoding, title) {
        const content = `<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="${encoding}">
    <title>${title}</title>
</head>
<body>
${Syntactics.NEXT_SCOPE_POINTER}
</body>
</html>`;
        const verboseContent = Styler.Verbose.colourTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.VERBOSE_STYLE_CLASS_OPENING_TAG.PARENT_SET);

        super(content, verboseContent);
    }
}
