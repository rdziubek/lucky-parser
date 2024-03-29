class Parser {
    constructor(pageScramble) {
        this._rawTagScrambles = pageScramble.matchAll(MatchExpressions.TAG_SCRAMBLE_ABSTRACT);
        this._pageInstance = new Page(
            Syntactics.NEXT_SCOPE_POINTER.RENDERED,
            Syntactics.NEXT_SCOPE_POINTER.VERBOSE);

        for (const rawScramble of this._rawTagScrambles) {
            const tagScramble = new TagScramble(rawScramble[1], rawScramble[2]);

            let stylesString = null;                                    // null or one continuous string of css styling
            const stylesStringMatch = tagScramble.description
                .match(MatchExpressions.STYLE_ATTRIBUTE);
            if (stylesStringMatch !== null) {
                stylesString = stylesStringMatch[1].trim();
            }

            const cssClasses = [...tagScramble.description              // empty string or array of props (classes)
                .matchAll(MatchExpressions.CLASS_ATTRIBUTES)]
                .map(attributeMatch => attributeMatch[1])
                .join(` `);

            switch (tagScramble.name) {
                /**
                 * Signature same as @see {@link ParentSet}
                 * + stylesString, ...cssClasses (specified in @see {@link Tag}).
                 */
                case TagNames.PARENT_SET: {
                    const properties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_PROPERTIES)];

                    if (properties.length < 3) {
                        this._pageInstance.append(
                            new InvalidTag(Strings.TAG.INVALID_SIGNATURE)
                        );
                    } else {
                        const language = new StringProperty(properties[0][1]).value;
                        const encoding = new StringProperty(properties[1][1]).value;
                        const title = new StringProperty(properties[2][1]).value;

                        this._pageInstance.append(
                            new ParentSet(language, encoding, title, stylesString, cssClasses)
                        );
                    }
                }
                    break;
                /**
                 * Signature same as @see {@link ImgTag}
                 * + stylesString, ...cssClasses (specified in @see {@link Tag}).
                 */
                case TagNames.IMG: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_PROPERTIES)];

                    if (looseProperties.length < 4) {
                        this._pageInstance.append(
                            new InvalidTag(Strings.TAG.INVALID_SIGNATURE)
                        );
                    } else {
                        const mediaSource = new StringProperty(looseProperties[0][1]).value;
                        const width = new StringProperty(looseProperties[1][1]).value;
                        const height = new StringProperty(looseProperties[2][1]).value;
                        const alternative = new StringProperty(looseProperties[3][1]).value;


                        this._pageInstance.append(
                            new ImgTag(mediaSource, width, height, alternative, stylesString, cssClasses)
                        );
                    }
                }
                    break;
                /**
                 * Signature same as @see {@link DateTag}
                 * + stylesString, ...cssClasses (specified in @see {@link Tag}).
                 */
                case TagNames.DATE: {
                    this._pageInstance.append(
                        new DateTag(stylesString, cssClasses)
                    );
                }
                    break;
                /**
                 * Signature same as @see {@link FormTag}
                 * + stylesString, ...cssClasses (specified in @see {@link Tag}).
                 */
                case TagNames.FORM: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_PROPERTIES)];

                    if (looseProperties.length < 3) {
                        this._pageInstance.append(
                            new InvalidTag(Strings.TAG.INVALID_SIGNATURE)
                        );
                    } else {
                        const action = new StringProperty(looseProperties[0][1]).value;
                        const method = new StringProperty(looseProperties[1][1]).value;
                        const inputDescriptions = [...tagScramble.description.matchAll(
                            MatchExpressions.TAG_SCRAMBLE_FORM_INPUT)][0][1]
                            .matchAll(MatchExpressions.TAG_SCRAMBLE_BRACKETS_CONTENT_NON_GREEDY_MULTIPLE);
                        const inputs = [];

                        for (const input of inputDescriptions) {
                            console.log('INPUT', input);
                            const inputDefinition = input[1];
                            const inputProperties = [...inputDefinition
                                .match(MatchExpressions.TAG_SCRAMBLE_BRACKETS_CONTENT)[1]
                                .matchAll(MatchExpressions.SPACE_SEPARATED_PROPERTIES)];
                            let title = null;
                            let type = null;

                            console.log('props', inputProperties);
                            if (inputProperties.length < 2) {
                                title = null;
                                type = null;
                            } else if (inputProperties.length === 1) {
                                title = null;
                                type = new StringProperty(inputProperties[0][1]).value;
                            } else {
                                console.log(inputProperties.length);
                                title = new StringProperty(inputProperties[0][1]).value;
                                type = new StringProperty(inputProperties[1][1]).value;
                            }

                            inputs.push(new InputTag(type, title));
                        }

                        this._pageInstance.append(
                            new FormTag(action, method, inputs, stylesString, cssClasses)
                        );
                    }
                }
                    break;
                /**
                 * Signature same as @see {@link ATag}
                 * + stylesString, ...cssClasses (specified in @see {@link Tag}).
                 */
                case TagNames.A: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_PROPERTIES)];

                    if (looseProperties.length < 2) {
                        this._pageInstance.append(
                            new InvalidTag(Strings.TAG.INVALID_SIGNATURE)
                        );
                    } else {
                        const url = new StringProperty(looseProperties[0][1]).value;
                        const text = new StringProperty(looseProperties[1][1]).value;

                        this._pageInstance.append(
                            new ATag(url, text, stylesString, cssClasses)
                        );
                    }
                }
                    break;
                /**
                 * Signature same as @see {@link VideoTag}
                 * + stylesString, ...cssClasses (specified in @see {@link Tag}).
                 */
                case TagNames.VIDEO: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_PROPERTIES)];

                    if (looseProperties.length < 4) {
                        this._pageInstance.append(
                            new InvalidTag(Strings.TAG.INVALID_SIGNATURE)
                        );
                    } else {
                        const width = new StringProperty(looseProperties[0][1]).value;
                        const height = new StringProperty(looseProperties[1][1]).value;
                        const source = new StringProperty(looseProperties[2][1]).value;
                        const additionalAttribute = new StringProperty(looseProperties[3][1]).value;

                        this._pageInstance.append(
                            new VideoTag(width, height, source, additionalAttribute, stylesString, cssClasses)
                        );
                    }
                }
                    break;
                /**
                 * Signature same as @see {@link ListTag}
                 * + stylesString, ...cssClasses (specified in @see {@link Tag}).
                 */
                case TagNames.LIST: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_PROPERTIES)];

                    if (looseProperties.length < 2) {
                        this._pageInstance.append(
                            new InvalidTag(Strings.TAG.INVALID_SIGNATURE)
                        );
                    } else {
                        const type = new StringProperty(looseProperties[0][1]).value;
                        const listElementsString = tagScramble.description
                            .match(MatchExpressions.TAG_SCRAMBLE_BRACKETS_CONTENT_NON_GREEDY)[1]
                            .match(MatchExpressions.TAG_SCRAMBLE_BRACKETS_CONTENT)[1]
                            .matchAll(MatchExpressions.SPACE_SEPARATED_PROPERTIES);

                        let listElements = [];
                        for (const element of listElementsString) {
                            listElements.push(new StringProperty(element[1]).value);
                        }

                        this._pageInstance.append(
                            new ListTag(type, listElements, stylesString, cssClasses)
                        );
                    }
                }
                    break;
                /**
                 * Signature same as @see {@link TableTag}
                 * + stylesString, ...cssClasses (specified in @see {@link Tag}).
                 */
                case TagNames.TABLE: {
                    let headerCellsString = ``;
                    let bodyCellsString = ``;
                    const headerCellsMatch = tagScramble.description
                        .match(MatchExpressions.TAG_SCRAMBLE_TABLE_INPUT.HEADER);
                    if (headerCellsMatch !== null) {
                        headerCellsString = headerCellsMatch[1].trim();
                    }
                    const bodyCellsMatch = tagScramble.description
                        .match(MatchExpressions.TAG_SCRAMBLE_TABLE_INPUT.BODY);
                    if (bodyCellsMatch !== null) {
                        bodyCellsString = bodyCellsMatch[1].trim();
                    }

                    const headerCells = headerCellsString
                        .matchAll(MatchExpressions.SPACE_SEPARATED_PROPERTIES);
                    const bodyCells = bodyCellsString
                        .matchAll(MatchExpressions.SPACE_SEPARATED_PROPERTIES);

                    if (headerCells == null || bodyCells == null) {
                        this._pageInstance.append(
                            new InvalidTag(Strings.TAG.INVALID_SIGNATURE)
                        );
                    } else {
                        let listHeaderCells = [];
                        for (const element of headerCells) {
                            listHeaderCells.push(new StringProperty(element[1]).value);
                        }
                        let listBodyCells = [];
                        for (const element of bodyCells) {
                            listBodyCells.push(new StringProperty(element[1]).value);
                        }

                        this._pageInstance.append(
                            new TableTag(listHeaderCells, listBodyCells, stylesString, cssClasses)
                        );
                    }
                }
                    break;
                default:
                    this._pageInstance.append(
                        new InvalidTag(undefined)
                    );
                    break;
            }
        }
    }

    get pageInstance() {
        return this._pageInstance;
    }
}
