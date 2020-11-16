importScripts(`../component/renderable.js`);
importScripts(`../enum/strings.js`);
importScripts(`../enum/match-expressions.js`);
importScripts(`../enum/syntactics.js`);
importScripts(`../enum/html-escapes.js`);
importScripts(`../enum/tag-names.js`);
importScripts(`../enum/input-type.js`);
importScripts(`../enum/video-formats.js`);
importScripts(`../styler.js`);
importScripts(`../component/page.js`);
importScripts(`../component/property.js`);
importScripts(`../component/property/string-property.js`);
importScripts(`../component/property/number-property.js`);
importScripts(`../component/tag.js`);
importScripts(`../component/tag/invalid-tag.js`);
importScripts(`../component/tag/parent-set.js`);
importScripts(`../component/tag/img-tag.js`);
importScripts(`../component/tag/table-tag.js`);
importScripts(`../component/tag/date-tag.js`);
importScripts(`../component/tag/form-tag.js`);
importScripts(`../component/tag/input-tag.js`);
importScripts(`../component/tag/a-tag.js`);
importScripts(`../component/tag/video-tag.js`);
importScripts(`../component/tag-scramble.js`);
importScripts(`../parser.js`);

onmessage = (e) => {
    const pageScramble = e.data;

    postMessage(new Parser(pageScramble)
        .pageInstance.serialise());
};
