let img, canvas
let w, h

let imgWidth = 1080 / 2
let imgHeight = 1080 / 2


let driverX = 0
let driverSpeed = 1;
let stopAndGo = true



let scannerHead = 5;

function preload() {
    img = loadImage('./img/img2.jpg')
}

function setup() {
    canvas = createCanvas(1080, 1080)
    background(125)
    noCursor()
    imageMode(CORNER)
    rectMode(CENTER)

    w = width
    h = height
}




function draw() {
    fill(125, 100, 0)
    noStroke()

    copy(img, 0, h / 4, mouseX, mouseY, 0 + driverX, 0, scannerHead, h)



    driverX += driverSpeed;

    if (driverX >= w) {
        driverX = 0
    }
}




function keyPressed() {


    if (keyCode === 32) {
        stopAndGo = !stopAndGo
    }

    if (stopAndGo === true) {
        driverSpeed = 1
    }

    if (stopAndGo === false) {
        driverSpeed = 0
    }


    if (keyCode == ENTER) {
        saveCanvas(canvas, 'myCanvas', 'jpg');
    }

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

