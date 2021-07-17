var  cat, rat;
var gardenimg,catmoving,ratanimation, ratstable,catstable,catstop,ratstop;

function preload() {
    //load the images here
   gardenimg = loadImage("images/garden.png");
   catstable = loadAnimation("images/catSitting.png");
   catmoving = loadAnimation("images/cat2.png","images/cat3.png");
   catstop = loadAnimation ("images/cat4.png");
   ratstable = loadAnimation("images/mouseGift.png");
   ratanimation = loadAnimation("images/mouse2.png","images/mouse3.png");
   ratstop = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   

    cat= createSprite(900,700,50,50);
    cat.addAnimation("sitting",catstable);
    cat.scale=0.2;

    rat= createSprite(300,670,50,50);
    rat.addAnimation("gift",ratstable);
    rat.scale=0.15;
    
}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-rat.x<(cat.width/2+rat.width)/2 ){
        cat.addAnimation("it stop",catstop);
        cat.changeAnimation("it stop");
        cat.velocityX=0;
        rat.addAnimation("stop teasing",ratstop);
        rat.changeAnimation("stop teasing");
        }
        keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyDown("Left_Arrow")){
  rat.addAnimation("ratteasing",ratanimation);
  rat.changeAnimation("ratteasing");
  rat.frameDelay=25;
  cat.addAnimation("walking",catmoving);
  cat.changeAnimation("walking");
  cat.velocityX=-4;
 }


}
