class InvalidTag extends Tag {
    /**
     * Default Constructor Returns default message.
     * @param {string} info Custom message to be returned.
     */
    constructor(info) {
        const content = `${(info === undefined ?
            `Taki tag nie istnieje!` : info)
        }${Syntactics.NEXT_SCOPE_POINTER}`;

        super(Styler.Rendered.designateTag(content, Syntactics.STYLE_CLASS_TAG.ERROR.INVALID),
            Styler.Verbose.designateTag(
                Styler.Verbose.makeVerbose(content),
                Syntactics.STYLE_CLASS_TAG.ERROR.INVALID));
    }
}
