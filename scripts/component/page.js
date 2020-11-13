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
            .replace(Syntactics.NEXT_SCOPE_POINTER, tag.content);
        super.verboseContent = super.verboseContent
            .replace(Syntactics.NEXT_SCOPE_POINTER, tag.verboseContent);
    }

    serialise() {
        return this._parcelable;
    }
}
