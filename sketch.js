var music;
var box1,box2,box3,box4;
var pingBall;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(100,590,192.5,15);
    box1.shapeColor = "yellow";

    box2 = createSprite(300,590,192.5,15);
    box2.shapeColor = "blue";

    box3 = createSprite(500,590,192.5,15);
    box3.shapeColor = "red";

    box4 = createSprite(700,590,192.5,15);
    box4.shapeColor = "pink";

    pingBall = createSprite(random(20,750),300,15,15);
    pingBall.shapeColor = "white";
    pingBall.velocityX = -6;
    pingBall.velocityY = 5;

    music.play();

}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    pingBall.bounceOff(edges);

    if(pingBall.isTouching(box1)){
        pingBall.shapeColor = "yellow";
        pingBall.velocityX = 0;
        pingBall.velocityY = 0;
        music.stop();
    }
    
    if(pingBall.isTouching(box2)){
        pingBall.shapeColor = "blue";
        pingBall.velocityX = -2;
        pingBall.velocityY = 5;
    }

    if(pingBall.isTouching(box3)){
        pingBall.shapeColor = "red";
        pingBall.velocityX = -9;
        pingBall.velocityY = 2;
    }

    if(pingBall.isTouching(box4)){
        pingBall.shapeColor = "pink";
        pingBall.velocityX = 25;
        pingBall.velocityY = 6;
    }

    drawSprites();
}