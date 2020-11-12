class Page extends Renderable {
    constructor(content, verboseContent) {
        const _contentAsFile = `${content}\n`;
        super(_contentAsFile, verboseContent);

        this._parcelable = {
            content: super.content,
            verboseContent: super.verboseContent,
        };
    }

    get content() {
        return super.content;
    }

    get verboseContent() {
        return super.verboseContent;
    }

    serialise() {
        return this._parcelable;
    }
}
