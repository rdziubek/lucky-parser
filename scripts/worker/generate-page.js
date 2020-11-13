importScripts(`../component/renderable.js`);
importScripts(`../enum/match-expressions.js`);
importScripts(`../enum/syntactics.js`);
importScripts(`../enum/html-escapes.js`);
importScripts(`../enum/tag-names.js`);
importScripts(`../styler.js`);
importScripts(`../component/page.js`);
importScripts(`../component/tag.js`);
importScripts(`../component/invalid-tag.js`);
importScripts(`../component/parent-set.js`);
importScripts(`../component/tag-scramble.js`);
importScripts(`../parser.js`);

onmessage = (e) => {
    const pageScramble = e.data;

    postMessage(new Parser(pageScramble)
        .pageInstance.serialise());
};
