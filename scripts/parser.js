class Parser {
    constructor(pageScramble) {
        this._rawTagScrambles = pageScramble.matchAll(MatchExpressions.TAG_SCRAMBLE_ABSTRACT);
        this._pageInstance = new Page(Syntactics.NEXT_SCOPE_POINTER, Syntactics.NEXT_SCOPE_POINTER);

        for (const rawScramble of this._rawTagScrambles) {
            const tagScramble = new TagScramble(rawScramble[1], rawScramble[2]);

            switch (tagScramble.name) {
                /**
                 * Signature same as @see {@link ParentSet}
                 */
                case TagNames.PARENT_SET: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_LOOSE_PROPERTIES)];

                    if (looseProperties.length !== 3) {
                        this._pageInstance.append(
                            new InvalidTag(`Zła sygnatura`)
                        );
                    } else {
                        const language = looseProperties[0][1];
                        const encoding = looseProperties[1][1];
                        const title = new StringProperty(looseProperties[2][1]).value;

                        this._pageInstance.append(
                            new ParentSet(language, encoding, title)
                        );
                    }
                }
                    break;
                /**
                 * Signature same as @see {@link ImgTag}
                 */
                case TagNames.IMG: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_LOOSE_PROPERTIES)];

                    if (looseProperties.length !== 4) {
                        this._pageInstance.append(
                            new InvalidTag(`Zła sygnatura`)
                        );
                    } else {
                        const mediaSource = new StringProperty(looseProperties[0][1]).value;
                        const width = new NumberProperty(looseProperties[1][1]).value;
                        const height = new NumberProperty(looseProperties[2][1]).value;
                        const alternative = new StringProperty(looseProperties[3][1]).value;

                        this._pageInstance.append(
                            new ImgTag(mediaSource, width, height, alternative)
                        );
                    }
                }
                    break;
                /**
                 * Signature same as @see {@link TableTag}
                 */
                case TagNames.TABLE: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_LOOSE_PROPERTIES)];

                }
                    break;
                /**
                 * Signature same as @see {@link DateTag}
                 */
                case TagNames.DATE: {
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_LOOSE_PROPERTIES)];

                    if (looseProperties.length !== 0) {
                        this._pageInstance.append(
                            new InvalidTag(`Zła sygnatura`)
                        );
                    } else {
                        this._pageInstance.append(
                            new DateTag()
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
