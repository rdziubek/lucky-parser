/**
 * Creates a list element.
 * Signature: type, {"element"...}
 */
class ListTag extends Tag {
    constructor(type, listElements) {
        const content = `<${type}>
${listElements
            .map(element => `    <li>${element}</li>\n`)
            .join(``)
        }</${type}>${
            Syntactics.LINE_BREAK.RENDERED}${Syntactics.NEXT_SCOPE_POINTER.RENDERED}`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.FORM);

        super(content, verboseContent);
    }
}
