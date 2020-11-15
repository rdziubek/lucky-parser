class StringProperty extends Property {
    constructor(rawProperty) {
        const value = (rawProperty[0] === `"` &&
        rawProperty[rawProperty.length - 1] === `"` ?
            rawProperty.substring(1, rawProperty.length - 1) :
            rawProperty);

        super(value);
    }
}
