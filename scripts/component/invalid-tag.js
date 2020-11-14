class InvalidTag extends Tag {
    /**
     * Default Constructor Returns default message.
     * @param {string} info Custom message to be returned.
     */
    constructor(info) {
        const content = `${(info === undefined ?
            `Not a valid tag!` : info)
        }\n${Syntactics.NEXT_SCOPE_POINTER}`;

        super(content, Styler.Verbose.makeVerbose(content));
    }
}

