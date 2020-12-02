const MatchExpressions = {
    NEXT_SCOPE_POINTER: {
        VERBOSE: /&lt;-/,
        RENDERED: /<-/
    },
    STARTING_TAG: {
        VERBOSE: /(&lt;)(\w+)(.*)/,
    },
    ENDING_TAG: {
        VERBOSE: /(.*?)(\w+)(&gt;)(?:$|(\n&lt;-$))/,
    },
    TAG_UNCLOSED: ``,
    TAG_SCRAMBLE_ABSTRACT: /<\s*(\w+)(.*?)>/g,
    TAG_SCRAMBLE_ASSOCIATIVE_PROPERTIES: /(\w+)=(\w+)/g,
    TAG_SCRAMBLE_PROPERTIES: /\s+((?:".*?")|(?:[^\s]+))/g,
    SPACE_SEPARATED_PROPERTIES: /((?:".*?")|(?:[^\s]+))/g,
    TAG_SCRAMBLE_FORM_INPUT: /.*?(input.*}).*?/g,
    TAG_SCRAMBLE_TABLE_INPUT: {
        HEADER: /nagłówek={(.*?)}/,
        BODY: /ciało={(.*?)}/,
    },
    TAG_SCRAMBLE_BRACKETS_CONTENT_NON_GREEDY: /.*?({.*?}).*?/,
    TAG_SCRAMBLE_BRACKETS_CONTENT_NON_GREEDY_MULTIPLE: /.*?({.*?}).*?/g,
    TAG_SCRAMBLE_BRACKETS_CONTENT: /{\s*(.*)\s*}/,
    TAG_SCRAMBLE_BRACKETS_CONTENT_MULTIPLE: /{\s*(.*)\s*}/g,
    TAG_SCRAMBLE_CLASSES_FOLLOWING_CURLY_BRACKETS: /.*}\s*(.*)>/g,
    STYLE_ATTRIBUTE: /styl="(.*)"/,
    CLASS_ATTRIBUTES: /(?:\s\.)([A-Za-z0-9_-]+)/g,
    ALL_UNTIL_NEXT_SCOPE: {
        VERBOSE: /(.*)&lt;-$/s,
        RENDERED: /(.*)<-$/s,
    },
}
