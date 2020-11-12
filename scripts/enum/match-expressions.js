const MatchExpressions = {
    STARTING_TAG: /(&lt;)(\w+)(.*)/,
    ENDING_TAG: /(.*?)(\w+)(&gt;$)/,
    TAG_UNCLOSED: ``,
}
