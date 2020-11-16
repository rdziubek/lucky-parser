class Renderer {

    static renderHelpWindow() {
        const window = document.querySelector('.help-window');

        window.style.display = 'flex';
    }

    static removeHelpWindow() {
        const window = document.querySelector('.help-window');

        window.style.display = 'none';
    }
}
