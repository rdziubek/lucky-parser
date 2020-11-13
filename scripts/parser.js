class Parser {
    constructor(pageScramble) {
        this._tagScrambles = pageScramble.matchAll(MatchExpressions.TAG_SCRAMBLE_ABSTRACT);
        this._pageInstance = new Page(Syntactics.NEXT_SCOPE_POINTER, Syntactics.NEXT_SCOPE_POINTER);

        for (const scramble of this._tagScrambles) {
            const tagScramble = new TagScramble(scramble[1], scramble[2]);

            switch (tagScramble.name) {
                case TagNames.PARENT_SET: {
                    this._pageInstance.append(
                        new ParentSet('lang', 'encoding', 'title')
                    );
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
