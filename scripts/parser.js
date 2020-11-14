class Parser {
    constructor(pageScramble) {
        this._tagScrambles = pageScramble.matchAll(MatchExpressions.TAG_SCRAMBLE_ABSTRACT);
        this._pageInstance = new Page(Syntactics.NEXT_SCOPE_POINTER, Syntactics.NEXT_SCOPE_POINTER);

        for (const scramble of this._tagScrambles) {
            const tagScramble = new TagScramble(scramble[1], scramble[2]);

            switch (tagScramble.name) {
                case TagNames.PARENT_SET: {
                    /**
                     * Property signature: language, encoding, title
                     */
                    const looseProperties = [...tagScramble.description
                        .matchAll(MatchExpressions.TAG_SCRAMBLE_LOOSE_PROPERTIES)];

                    if (looseProperties.length !== 3) {
                        this._pageInstance.append(
                            new InvalidTag(`Invalid tag signature`)
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
                default:
                    this._pageInstance.append(
                        new InvalidTag()
                    );
                    break;
            }
        }
    }

    get pageInstance() {
        return this._pageInstance;
    }
}
