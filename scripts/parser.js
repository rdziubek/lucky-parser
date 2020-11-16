class Parser {
    constructor(pageScramble) {
        this._rawTagScrambles = pageScramble.matchAll(MatchExpressions.TAG_SCRAMBLE_ABSTRACT);
        this._pageInstance = new Page(
            Syntactics.NEXT_SCOPE_POINTER.RENDERED,
            Syntactics.NEXT_SCOPE_POINTER.VERBOSE);

        for (const rawScramble of this._rawTagScrambles) {
            const tagScramble = new TagScramble(rawScramble[1], rawScramble[2]);

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
                            new InvalidTag(`Zła sygnatura`)
                        );
                    } else {
                        const language = new StringProperty(properties[0][1]).value;
                        const encoding = new StringProperty(properties[1][1]).value;
                        const title = new StringProperty(properties[2][1]).value;

                        const parentSet = new ParentSet(language, encoding, title);
                        parentSet.stylesString = ``;
                        parentSet.cssClasses = [];

                        this._pageInstance.append(
                            new ParentSet(language, encoding, title)
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
                        const width = new NumberProperty(looseProperties[1][1]).value;
                        const height = new NumberProperty(looseProperties[2][1]).value;
                        const alternative = new StringProperty(looseProperties[3][1]).value;

                        const imgTag = new ImgTag(mediaSource, width, height, alternative);
                        imgTag.stylesString = ``;
                        imgTag.cssClasses = [];

                        this._pageInstance.append(
                            new ImgTag(mediaSource, width, height, alternative)
                        );
                    }
                }
                    break;
                /**
                 * Signature same as @see {@link TableTag}
                 * + stylesString, ...cssClasses (specified in @see {@link Tag}).
                 */
                case TagNames.TABLE: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_PROPERTIES)];

                    const tableTag = new TableTag();
                    tableTag.stylesString = ``;
                    tableTag.cssClasses = [];
                }
                    break;
                /**
                 * Signature same as @see {@link DateTag}
                 * + stylesString, ...cssClasses (specified in @see {@link Tag}).
                 */
                case TagNames.DATE: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_PROPERTIES)];

                    const dateTag = new DateTag()
                    dateTag.stylesString = ``;
                    dateTag.cssClasses = [];

                    this._pageInstance.append(
                        new DateTag()
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
                            .matchAll(MatchExpressions.TAG_SCRAMBLE_BRACKETS_CONTENT);
                        const inputs = [];

                        for (const input of inputDescriptions) {
                            if (input[1].trim().includes(` `)) {
                                const delimiterPosition = input[1].indexOf(` `);
                                const title = input[1].substring(0, delimiterPosition);
                                const type = input[1].substring(delimiterPosition + 1, input[1].length);

                                inputs.push(new InputTag(type, title));
                            } else {
                                const type = input[1].trim();

                                inputs.push(new InputTag(type, undefined));
                            }
                        }

                        const formTag = new FormTag(action, method, inputs);
                        formTag.stylesString = ``;
                        formTag.cssClasses = [];

                        this._pageInstance.append(
                            new FormTag(action, method, inputs)
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

                        const aTag = new ATag(url, text);
                        aTag.stylesString = ``;
                        aTag.cssClasses = [];

                        this._pageInstance.append(
                            new ATag(url, text)
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
                        const width = new NumberProperty(looseProperties[0][1]).value;
                        const height = new NumberProperty(looseProperties[1][1]).value;
                        const source = new StringProperty(looseProperties[2][1]).value;
                        const additionalAttribute = new StringProperty(looseProperties[3][1]).value;

                        const videoTag = new VideoTag(width, height, source, additionalAttribute);
                        videoTag.stylesString = ``;
                        videoTag.cssClasses = [];

                        this._pageInstance.append(
                            new VideoTag(width, height, source, additionalAttribute)
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
                            .match(MatchExpressions.TAG_SCRAMBLE_BRACKETS_INPUT)[1]
                            .match(MatchExpressions.TAG_SCRAMBLE_BRACKETS_CONTENT)[1]
                            .matchAll(MatchExpressions.SPACE_SEPARATED_PROPERTIES);

                        let listElements = [];
                        for (const element of listElementsString) {
                            listElements.push(new StringProperty(element[1]).value);
                        }

                        const listTag = new ListTag(type, listElements);
                        listTag.stylesString = ``;
                        listTag.cssClasses = [];

                        this._pageInstance.append(
                            new ListTag(type, listElements)
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

    getLooseProperties(count) {

    }
}
