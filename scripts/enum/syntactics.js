const Syntactics = {
    NEXT_SCOPE_POINTER: {
        VERBOSE: `&lt;-`,
        RENDERED: `<-`,
    },
    STYLE_CLASS_TAG: {
        VERBOSE: {
            PARENT_SET: `<span class="verbose-parent-tag-set">`,
            IMG: `<span class="verbose-img-tag">`,
            TABLE: `<span class="verbose-table-tag">`,
            FORM: `<span class="verbose-form-tag">`,
            CURRENT_DATE: `<span class="verbose-current-date">`,
            A: `<span class="verbose-a-tag">`,
            VIDEO: `<span class="verbose-video-tag">`,
            P: `<span class="verbose-p-tag">`,
        },
        ERROR: {
            INVALID: `<span class="error-invalid-tag">`,
        },
    },
    STYLE_CLASS_CLOSING_TAG: `</span>`,
    LINE_BREAK: {
        VERBOSE: '\n',
        RENDERED: '<br/>',
    }
}
