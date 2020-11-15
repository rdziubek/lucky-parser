class NumberProperty extends Property {
    constructor(rawProperty) {
        let value = null;

        if (rawProperty.includes(`,`)) {
            const decimalPosition = rawProperty.indexOf(`,`);
            const totalPartValue = Number(rawProperty.substring(0, decimalPosition));
            const decimalPartString = rawProperty.substring(decimalPosition, rawProperty.length);

            value = totalPartValue +
                (decimalPartString !== undefined ?
                    Number(decimalPartString) / Math.pow(10, decimalPartString.length) :
                    0);
        } else {
            value = Number(rawProperty);
        }

        super(value);
    }
}
