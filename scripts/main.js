'use strict';

const editorWindow = document.querySelector('.editor');
const rendererWindow = document.querySelector('.renderer-window');
const editorParsedWindow = document.querySelector('.editor-parsed');
const generatePageWorker = new Worker('scripts/worker/generate-page.js');

rendererWindow.addEventListener('dblclick', () => {
    alert('you have requested help!');
});

editorWindow.addEventListener('keyup', () => {
    const scrambledContent = editorWindow.value;

    if (scrambledContent !== '') {
        generatePageWorker.postMessage(editorWindow.value);
    } else {
        rendererWindow.innerHTML = Strings.DISPLAY_HELP;
    }
});

generatePageWorker.onmessage = (ev => {
    rendererWindow.innerHTML = ev.data._renderedContent;
    editorParsedWindow.innerHTML = ev.data._renderedContentStyledSource;
});
