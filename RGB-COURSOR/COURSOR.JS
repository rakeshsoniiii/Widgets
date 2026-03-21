import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"

// Initialize the effect on the canvas element
const canvasEl = document.getElementById('canvas');

const app = TubesCursor(canvasEl, {
    tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
        }
    }
});

// Change colors on every click
document.body.addEventListener('click', () => {
    const colors = randomColors(3);
    const lightsColors = randomColors(4);
    
    // Update the app state
    if (app.tubes) {
        app.tubes.setColors(colors);
        app.tubes.setLightsColors(lightsColors);
    }
});

function randomColors(count) {
    return new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
}