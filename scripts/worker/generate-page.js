importScripts(`../component/renderable.js`);
importScripts(`../component/page.js`);

onmessage = (e) => {
    const scrambledDescription = e.data;

    postMessage(new Page());
};
