class Styler {

    static Verbose = class {

        static colourTagBoundaries(content, colourClass) {
            return content
                .replace(MatchExpressions.STARTING_TAG,
                    `$1${colourClass}$2${Syntactics.VERBOSE_STYLE_CLASS_CLOSING_TAG}$3`)
                .replace(MatchExpressions.ENDING_TAG, (_, remaining, tagName, bracket) =>
                    `${remaining}${tagName === null
                        ? tagName : `${colourClass}${tagName}${Syntactics.VERBOSE_STYLE_CLASS_CLOSING_TAG}`
                    }${bracket}`);
        }
    }
}
