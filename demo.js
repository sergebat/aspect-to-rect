var aspectToRect = require("./");
var fitRect = require("fit-rect");

var canvas = document.createElement('canvas');
canvas.style.position = "absolute";
document.body.appendChild(canvas);
var context = canvas.getContext("2d");

function resize() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Compute canvas resolution best suited for current window
    var canvasSize = aspectToRect(windowWidth / windowHeight, {
        width: {min: 712, max: 1024},
        height: 640
    });

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    // Position/scale canvas accordingly
    var canvasPosition = fitRect([0, 0, canvasSize.width, canvasSize.height], [0, 0, windowWidth, windowHeight]);
    canvas.style.left = canvasPosition[0] + "px";
    canvas.style.top = canvasPosition[1] + "px";
    canvas.style.width = canvasPosition[2] + "px";
    canvas.style.height = canvasPosition[3] + "px";

    // Draw canvas content

    // Clear canvas and put coordinates into it's center
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.transform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2);

    // Simulate fixed resolution 1024x640 game background (which can be clipped on the sides if needed,
    // but it does not make sense to extend canvas beyond it)
    context.fillStyle = "red";
    context.fillRect(-512, -320, 1024, 640);

    // Simualte fixed resolution 712x640 main game area (which must always be visible)
    context.fillStyle = "blue";
    context.fillRect(-356, -320, 712, 640);

}
window.addEventListener('resize', resize);
resize();