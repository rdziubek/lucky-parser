importScripts(`../component/renderable.js`);
importScripts(`../component/page.js`);

onmessage = (e) => {
    const scrambledDescription = e.data;

    let processedData = `this is a null yet`;
    let processedDataVerbose = `this is null too lol`;

    postMessage(new Page(processedData, processedDataVerbose)
        .serialise());
};
