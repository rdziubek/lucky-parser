/**
 * Creates a form element.
 * Signature: action, method, input{"label" type}...
 */
class FormTag extends Tag {
    constructor(action, method, formInputs, stylesString, cssClasses) {
        const content = `<form action="${action}" method="${method}"${
            stylesString ? ` style="${stylesString}"` : ``}${
            cssClasses !== `` ? ` class="${cssClasses}"` : ``}>
${formInputs
            .map(input => input.content)
            .join(Syntactics.LINE_BREAK.RENDERED)}
</form>${
            Syntactics.LINE_BREAK.RENDERED}${Syntactics.NEXT_SCOPE_POINTER.RENDERED}`;
        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.FORM);

        super(content, verboseContent);
    }
}
