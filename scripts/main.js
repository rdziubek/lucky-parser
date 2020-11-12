`use strict`;

const editorWindow = document.querySelector(`.editor`);
const rendererWindow = document.querySelector(`.renderer-window`);
const editorParsedWindow = document.querySelector(`.editor-parsed`);
const generatePageWorker = new Worker(`scripts/worker/generate-page.js`);

rendererWindow.addEventListener(`dblclick`, () => {
    alert(`you have requested help!`);
});

editorWindow.addEventListener(`keyup`, () => {
    const scrambledPageDescription = editorWindow.value;

    if (scrambledPageDescription !== ``) {
        generatePageWorker.postMessage(editorWindow.value);
    } else {
        rendererWindow.innerHTML = Strings.DISPLAY_HELP;
    }
});

generatePageWorker.onmessage = (ev => {
    const serialisedPageInstance = ev.data;

    rendererWindow.innerHTML = serialisedPageInstance.content;
    editorParsedWindow.innerHTML = serialisedPageInstance.verboseContent;
});
