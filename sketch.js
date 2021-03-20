var ball;

var mydatabase;
var myBallPosition;
function setup(){
    createCanvas(500,500);
    mydatabase = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";


    var ballPositionRef = mydatabase.ref('Ball/Position');
    ballPositionRef.on("value", readPosition , showError);
}

function draw(){


    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    
    mydatabase.ref('Ball/Position').set({
        x: ball.x + x,
        y: ball.y + y
    })

}


function readPosition(data){
myBallPosition = data.val();
console.log(myBallPosition);

ball.x =myBallPosition.x;
ball.y =myBallPosition.y;
}

function showError(){
    console.log("error");
}