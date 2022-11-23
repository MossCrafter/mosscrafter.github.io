const gameCanvas = document.getElementById('gameCanvas');
gameCanvas.width = innerWidth / 3; // TODO: should we be using innerWidth/innerHeight or some other width and height?
gameCanvas.height = innerHeight / 5;
const ctx = gameCanvas.getContext('2d');

let clickCounter = 0;
gameCanvas.addEventListener('click', onclick);

let haveFullScreen = false;

drawIntro();

///////////////
// Functions //
///////////////

function drawIntro() {
    drawBackground();
    drawInstructions();
    drawDebugText();
}

function drawBackground() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, gameCanvas.clientWidth, gameCanvas.clientHeight);
}

function drawInstructions() {
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center'
    const againText = clickCounter > 0 ? 'again ' : "";

    if (gameCanvas.clientHeight < screen.height) {
        ctx.fillText('Click ' + againText + 'to try to get full screen', gameCanvas.clientWidth / 2, gameCanvas.clientHeight / 2);
    }
    else {
        haveFullScreen = true;
        ctx.fillText('100% full screen achieved.  Click to play', gameCanvas.clientWidth / 2, gameCanvas.clientHeight / 2)
    }
}

function drawDebugText() {
    ctx.fillText(
        `${clickCounter} clicks.  Resolution: ${gameCanvas.clientWidth}/${screen.width} x ${gameCanvas.clientHeight}/${screen.height}`,
        gameCanvas.clientWidth / 2,
        (gameCanvas.clientHeight / 2) + 12
    );
}

function startGame() {
    draw();
}

function draw() {
    drawBackground();
    drawTerrain();
    drawLander();
}

function drawTerrain() {    
}

function drawLander() {    
}

////////////////////
// Event handlers //
////////////////////

function onclick() {
    ++clickCounter;

    if (!haveFullScreen) {
        gameCanvas.requestFullscreen();
        gameCanvas.width = innerWidth;
        gameCanvas.height = innerHeight;
        drawIntro();
    } else {
        gameCanvas.removeEventListener('click', onclick)
        startGame();
    }
}