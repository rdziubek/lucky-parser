const MatchExpressions = {
    STARTING_TAG: /(&lt;)(\w+)(.*)/,
    ENDING_TAG: /(.*?)(\w+)(&gt;$)/,
    TAG_UNCLOSED: ``,
    TAG_SCRAMBLE_ABSTRACT: /<\s*(\w+)(.*?)>/g,
    TAG_SCRAMBLE_ASSOCIATIVE_PROPERTIES: /(\w+)=(\w+)/g,
    TAG_SCRAMBLE_LOOSE_PROPERTIES: /\s+((?:".*?")|(?:[^\s]+))/g,
    ALL_UNTIL_NEXT_SCOPE_VERBOSE: /(.*)&lt;br\/&gt;&lt;-$/s,
    ALL_UNTIL_NEXT_SCOPE: /(.*)(<br\/><-$)/s,
}
