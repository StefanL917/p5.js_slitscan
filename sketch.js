let img, canvas, w, h

let scannerHead = 4;
let driverX = 0
let driverSpeed = 1;
let stopAndGo = true

let fps = 60

function preload() {

    img = loadImage('./img/coln3.jpg')  //path to your image
}

function setup() {
    canvas = createCanvas(1080, 1080)
    frameRate(fps)
    background(50)
    // noCursor()
    imageMode(CENTER)
    img.loadPixels()
    w = width
    h = height
}

function draw() {
    //map mouse position to move image for scanner
    let imgWidthMap = map(mouseX, 0, w, 0, img.width)
    let imgHeightMap = map(mouseY, 0, h, 0, img.height)
    //copy loaded image on canvas
    copy(img, imgWidthMap - 10, (imgHeightMap - img.height / 2) * -1, img.width, h / 1.5, driverX, 0, scannerHead, h)

    //increase driver for scanner head
    driverX += driverSpeed;
    //reset scanner head to 0
    if (driverX >= w) {
        driverX = 0
    }
}


function keyPressed() {

    //hit SPACEBAR to pause
    if (keyCode === 32) {
        stopAndGo = !stopAndGo
    }

    if (stopAndGo === true) {
        driverSpeed = 1
    }

    if (stopAndGo === false) {
        driverSpeed = 0
    }


    //save canvas on ENTER
    if (keyCode == ENTER) {
        saveCanvas(canvas, 'myCanvas', 'jpg');
    }

    //change scanner speed
    switch (key) {
        case '1':
            driverSpeed = 1;
            break;

        case '2':
            driverSpeed = 2;
            break;

        case '3':
            driverSpeed = 3;
            break;
        case '4':
            driverSpeed = 4;
            break;
        case '5':
            driverSpeed = 5;
            break;

        default:
            break;
    }
}

