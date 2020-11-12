class Page extends Renderable {
    constructor(content, verboseContent) {
        const _contentAsFile = `${content}\n`;
        super(_contentAsFile, verboseContent);

        this._parcelable = {
            content: super.content,
            verboseContent: super.verboseContent,
        };
        this._content = content;
        this._verboseContent = verboseContent;
    }

    get content() {
        return super.content;
    }

    set content(value) {
        this._content = value;
    }

    get verboseContent() {
        return super.verboseContent;
    }

    set verboseContent(value) {
        this._verboseContent = value;
    }

    append(tag) {

    }

    serialise() {
        return this._parcelable;
    }
}
