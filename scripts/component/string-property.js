class StringProperty {
    constructor(rawProperty) {
        if (rawProperty[0] === `"` &&
            rawProperty[rawProperty.length - 1] === `"`) {
            this._value = rawProperty.substring(1, rawProperty.length - 1);
        } else {
            this._value = rawProperty;
        }
    }

    get value() {
        return this._value;
    }
}
