/**
 * Creates a list element.
 * Signature: type, {"element"...}
 */
class ListTag extends Tag {
    constructor(type, listElements, stylesString, cssClasses) {
        const content = `<${type}${
            stylesString ? ` style="${stylesString}"` : ``}${
            cssClasses !== `` ? ` class="${cssClasses}"` : ``}>
${listElements
            .map(element => `    <li>${element}</li>`)
            .join(`\n`)}
</${type}>${
            Syntactics.LINE_BREAK.RENDERED}${Syntactics.NEXT_SCOPE_POINTER.RENDERED}`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.FORM);

        super(content, verboseContent);
    }
}
