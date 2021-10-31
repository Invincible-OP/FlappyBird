var myGamePiece;
var myObstacles = [];
var myScore;

var flappy = "https://www.pngitem.com/pimgs/b/184-1842507_flappy-bird-png.png";

function startGame() {
    myGameArea.start();
    myGamePiece = new Component(30, 30, flappy, 120, "image");
    myScore = new Component("30px", "Consolas", "35f27cd", 280, 40, "text");
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 600;
        this.canvas.height = 370;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

function moveup() {
    myGamePiece.speedY = -1;
}

function movedown() {
    myGamePiece.speedY = -1;
}

function moveleft() {
    myGamePiece.speedY = -1;
}

function movedown() {
    myGamePiece.speedX = -1;
}

function moveright() {
    GamePiece.speedX = 1
}

function cleardown() {
    myGamePiece.speedX = -0;
    myGamePiece.speedY = -0;
}