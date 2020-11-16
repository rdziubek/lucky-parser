/**
 * Creates a table element.
 */
class TableTag extends Tag {
    /**
     * Default Constructor
     * @param headerCells   string comprising th elements
     * @param bodyCells     string comprising td elements
     * @param stylesString  continuous string of CSS styling
     * @param cssClasses    string of space-separated CSS class properties
     */
    constructor(headerCells, bodyCells, stylesString, cssClasses) {
        const headerCount = headerCells.length;
        const bodyCount = bodyCells.length;

        const content = `<table${
            stylesString ? ` style="${stylesString}"` : ``}${
            cssClasses !== `` ? ` class="${cssClasses}"` : ``}>${
            headerCells?.length ? `
    <thead>
        <tr>
            ${headerCells
                .map(cell => `<th>${cell}</th>`)
                .join(`\n            `)
            }
        </tr>
    </thead>` : ``}${
            bodyCells?.length ? `
    <tbody>        ${Tabler.generateBody(headerCount, bodyCount, bodyCells)}
    </tbody>` : ``}
</table>${
            Syntactics.LINE_BREAK.RENDERED}${Syntactics.NEXT_SCOPE_POINTER.RENDERED}`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.TABLE);

        super(content, verboseContent);
    }
}
