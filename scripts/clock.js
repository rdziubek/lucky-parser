setInterval(() => {
    try {
        document.getElementById('datetime').innerHTML = new Date().toLocaleString()
    } catch (e) {
    }
}, 1000);
