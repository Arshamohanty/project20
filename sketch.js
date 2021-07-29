var bg;
var cat;
var mouse;

function preload() {
    //load the images here
    bg = loadAnimation("images/garden.png");

    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");

    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png");
    mouse3 = loadAnimation("images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here  

    backGround = createSprite(200,200)
    backGround.addAnimation("background", bg)

    cat = createSprite(500,300)
    cat .addAnimation("running", cat2)
    cat.scale = 0.1

    mouse = createSprite(70,430)
    mouse .addAnimation("mouseRunning", mouse2)
    mouse.scale = 0.1
}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.addAnimation("happyCat", cat3)
        cat.changeAnimation("happyCat")
        

        mouse.addAnimation("happyMouse", mouse1)   
        mouse.changeImage("happyMouse")
    }

    drawSprites();
}


function keyPressed(){

    if (keyCode === LEFT_ARROW){

        mouse .addAnimation("teasing",mouse3)
        mouse.changeAnimation("teasing")
        mouse.frameDelay = 25;

        cat.velocityX = -3
        cat.velocityY = 0.7

    }



}