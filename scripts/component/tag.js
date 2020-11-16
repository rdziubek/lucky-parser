/**
 * Generated page's building element; guaranteed not to be ever empty
 */
class Tag extends Renderable {
    constructor(content, verboseContent, stylesString, cssClasses) {
        super(content, verboseContent);
        this._stylesString = stylesString;
        this._cssClasses = cssClasses;
    }

    get stylesString() {
        return this._stylesString;
    }

    set stylesString(value) {
        this._stylesString = value;
    }

    get cssClasses() {
        return this._cssClasses;
    }

    set cssClasses(value) {
        this._cssClasses = value;
    }
}
