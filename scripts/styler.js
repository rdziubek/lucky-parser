class Styler {

    static Verbose = class {

        static makeVerbose(content) {
            for (const [key, value] of Object.entries(HtmlEscapes)) {
                content = content.replaceAll(key, value);
            }

            return content;
        }

        static designateTagBoundaries(content, cssClass) {
            return content
                .replace(MatchExpressions.STARTING_TAG_VERBOSE,
                    `$1${cssClass}$2${Syntactics.STYLE_CLASS_CLOSING_TAG}$3`)
                .replace(MatchExpressions.ENDING_TAG_VERBOSE, (_, remaining, tagName, bracket) =>
                    `${remaining}${tagName === null
                        ? tagName : `${cssClass}${tagName}${Syntactics.STYLE_CLASS_CLOSING_TAG}`
                    }${bracket}`);
        }

        static designateTag(content, cssClass) {
            return content
                .replace(MatchExpressions.ALL_UNTIL_NEXT_SCOPE_VERBOSE,
                    `${cssClass}$1${Syntactics.STYLE_CLASS_CLOSING_TAG}${Syntactics.NEXT_SCOPE_POINTER}`);
        }
    }

    static Rendered = class {

        static designateTag(content, cssClass) {
            return content
                .replace(MatchExpressions.ALL_UNTIL_NEXT_SCOPE,
                    `${cssClass}$1${Syntactics.STYLE_CLASS_CLOSING_TAG}$2`);
        }
    }
}
