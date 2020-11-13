class InvalidTag extends Tag {
    constructor() {
        const content = `Not a valid tag!`;

        super(content, content);
    }
}
