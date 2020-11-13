class Renderable {
    constructor(content, verboseContent) {
        this._content = content;
        this._verboseContent = verboseContent;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }

    get verboseContent() {
        return this._verboseContent;
    }

    set verboseContent(value) {
        this._verboseContent = value;
    }
}
