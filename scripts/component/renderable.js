class Renderable {
    constructor(content, verboseContent) {
        this._content = content;
        this._verboseContent = verboseContent;
    }

    get content() {
        return this._content;
    }

    get verboseContent() {
        return this._verboseContent;
    }
}
