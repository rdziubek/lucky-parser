class Page extends Renderable {
    constructor(content, verboseContent) {
        const contentAsFile = `${content}\n`;

        super(contentAsFile, verboseContent);
    }
}
