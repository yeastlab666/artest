document.getElementById('start-ar').addEventListener('click', () => {
    if (navigator.xr) {
        navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
            if (supported) {
                navigator.xr.requestSession('immersive-ar').then(onSessionStarted);
            } else {
                alert('AR not supported');
            }
        });
    } else {
        alert('WebXR not supported');
    }
});

function onSessionStarted(session) {
    // Set up WebXR session
    // Here you would typically set up your WebGL context and start rendering
    console.log('AR session started');
}
