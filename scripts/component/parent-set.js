class ParentSet extends Tag {
    constructor(language, encoding, title) {
        const content = `<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="${encoding}">
    <title>${title}</title>
</head>
<body>
test
${Syntactics.NEXT_SCOPE_POINTER}
</body>
</html>`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.PARENT_SET);

        super(content, verboseContent);
    }
}
