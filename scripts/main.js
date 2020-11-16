`use strict`;

const editorWindow = document.querySelector(`.editor`);
const rendererWindow = document.querySelector(`.renderer-window`);
const rendererVerboseWindow = document.querySelector(`.renderer-verbose-window`);
const generatePageWorker = new Worker(`scripts/worker/generate-page.js`);

rendererWindow.addEventListener(`dblclick`, () => {
    alert(`you have requested help!`);
});

editorWindow.addEventListener(`input`, () => {
    const scrambledPageDescription = editorWindow.value;

    if (scrambledPageDescription !== ``) {
        generatePageWorker.postMessage(editorWindow.value);
    } else {
        rendererWindow.innerHTML = Strings.USER_GUIDE;
        rendererVerboseWindow.innerHTML = null;
    }
});

editorWindow.addEventListener(`blur`, (ev) => ev.currentTarget.focus());

generatePageWorker.onmessage = (ev => {
    const serialisedPageInstance = ev.data;

    rendererWindow.innerHTML = serialisedPageInstance.content;
    rendererVerboseWindow.innerHTML = serialisedPageInstance.verboseContent;
});

window.onload = () => (editorWindow.value !== `` ? generatePageWorker.postMessage(editorWindow.value) : null);
