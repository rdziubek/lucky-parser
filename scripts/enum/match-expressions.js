const MatchExpressions = {
    NEXT_SCOPE_POINTER: {
        VERBOSE: /&lt;-/,
        RENDERED: /<-/
    },
    STARTING_TAG: {
        VERBOSE: /(&lt;)(\w+)(.*)/,
    },
    ENDING_TAG: {
        VERBOSE: /(.*?)(\w+)(&gt;$)/,
    },
    TAG_UNCLOSED: ``,
    TAG_SCRAMBLE_ABSTRACT: /<\s*(\w+)(.*?)>/g,
    TAG_SCRAMBLE_ASSOCIATIVE_PROPERTIES: /(\w+)=(\w+)/g,
    TAG_SCRAMBLE_PROPERTIES: /\s+((?:".*?")|(?:[^\s]+))/g,
    TAG_SCRAMBLE_CURLY_BRACKETS: /.*?({.*}).*?/g,
    TAG_SCRAMBLE_BRACKETS_CONTENT: /{\s*([^}{]+)\s*}/g,
    TAG_SCRAMBLE_CLASSES_FOLLOWING_CURLY_BRACKETS: /.*}\s*(.*?)/g,
    TAG_SCRAMBLE_CLASSES_CONTENT: /\.[A-Za-z0-9_-]/g,
    ALL_UNTIL_NEXT_SCOPE: {
        VERBOSE: /(.*)&lt;-$/s,
        RENDERED: /(.*)<-$/s,
    },
}
