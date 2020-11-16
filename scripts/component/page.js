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
        super.content = super.content
            .replace(MatchExpressions.NEXT_SCOPE_POINTER.RENDERED, tag.content);
        super.verboseContent = super.verboseContent
            .replace(MatchExpressions.NEXT_SCOPE_POINTER.VERBOSE, tag.verboseContent);
    }

    serialise() {
        this._parcelable = {
            content: super.content,
            verboseContent: super.verboseContent,
        }
        return this._parcelable;
    }
}
