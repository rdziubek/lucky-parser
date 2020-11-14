class StringProperty {
    constructor(rawProperty) {
        this._value = rawProperty.substring(1, rawProperty.length - 1);
    }

    get value() {
        return this._value;
    }
}
