const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg()

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
     // write code to fetch time from API
    //change the data in JSON format
   // write code slice the datetime
     var time= await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
     var timeJSON=await time.json()
     var dateTime=timeJSON.datetime
     var hour=dateTime.slice(11,13)
    console.log(hour)
   

    

    // add conditions to change the background images from sunrise to sunset
if (hour>=04 && hour<=06){
    bg="sunrise1.png"
}else if(hour>=06 && hour<=08){
    bg="sunrise2.png"
}else if(hour>=08 && hour<=10){
    bg="sunrise3.png"
}else if(hour>=10 && hour<=13){
    bg="sunrise4.png"
}else if(hour>=13 && hour<=16){
    bg="sunrire5.png"
}
else if(hour>=16 && hour<=17){
    bg="sunrise6.png"
}else if(hour>=17 && hour<=18){
    bg="sunrire7.png"
}else if(hour>=18 && hour<=19){
    bg="sunrise8.png"
}else if(hour>=19 && hour<=20){
    bg="sunrire9.png"
}else if(hour>=20 && hour<=21){
    bg="sunrise10.png";
}else if(hour>=21 && hour==0){
    bg="sunrire11.png";
}
else {
    bg="sunrise2.png";
}

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)

}
