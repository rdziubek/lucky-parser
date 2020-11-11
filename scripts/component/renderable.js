class Renderable {
    constructor(content, verboseContent) {
        this._content = null;
        this._verboseContent = null;
    }

    get content() {
        return this._content;
    }

    get verboseContent() {
        return this._verboseContent;
    }
}
