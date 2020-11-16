class InputTag extends Tag {
    constructor(type, title) {
        let content = null;
        if (title !== undefined) {
            if (Object.values(InputType.BUTTONS).includes(type)) {
                content = `<input type="${type}" value="${title}">`
            } else {
                content = `<label>${title}
    <input type="${type}">
</label>`;
            }
        } else {
            content = `<input type="${type}">`;
        }

        const verboseContent = Styler.Verbose.designateTagBoundaries(
            Styler.Verbose.makeVerbose(content), Syntactics.STYLE_CLASS_TAG.VERBOSE.FORM);

        super(content, verboseContent);
        this._type = type;
        this._title = (title === undefined ? `` : title);
    }

    get type() {
        return this._type;
    }

    get title() {
        return this._title;
    }
}
