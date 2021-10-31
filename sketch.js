var meowser6000, meowser6000_running, meowser6000_dead_rip;
var gamestate = "play";
var owoImgage, negative_owoImage, owo, negative_owo;
var forestImage, forest;
var owoG, negative_owoG;
var score = 0;

function preload(){
  meowser6000_running = loadAnimation("9I6U4EG.png","98PYJZ3.png","GU4N3JN.png","VGB89HC.png");
  meowser6000_dead_rip = loadAnimation("QWPOK3N.png","QWPOK3N.png");

  owoSound = loadSound("recording2 (2).wav");
  hissSound = loadSound("recording1 (4).wav"); 
  walkingSound = loadSound("recording3 (1).wav");

  owoImage = loadImage("Image20211029122749-removebg-preview.png");
  negative_owoImage = loadImage("Image20211029122738-removebg-preview.png");
  forestImage = loadImage("Forest.png");
}

function setup() {
    score = 0;
    createCanvas(windowWidth,windowHeight);
    walkingSound.loop();
    background(0);
    forest = createSprite(3000,400);
    forest.addImage("forest",forestImage);

    forest.scale = 3.5;
    forest.velocityX = -6;

    meowser6000 = createSprite(150, 350);
    meowser6000.addAnimation("running", meowser6000_running);
    meowser6000.scale = 0.5;

    owoG=new Group();
    negative_owoG=new Group();
}

function draw() {
    meowser6000.setCollider("rectangle", 0, -5, 200, 750);
    if(gamestate == "play") {


        if(keyDown("up_arrow") && meowser6000.y > 350) {
        meowser6000.y = meowser6000.y - 7;
        }

        if(keyDown("down_arrow") && meowser6000.y < 833) {
            meowser6000.y = meowser6000.y + 7;
        }
        forest.velocityX = -6;

        if(forest.x === -1143.5){
            forest.x = forest.width /2;
        }
        
        if(forest.x < -1143.5){        
            forest.x = forest.width /2;
        }

        if(owo !== undefined) {
            if(meowser6000.isTouching(owo)) { 
                owo.x = 1000000000000000000000000000000000000000000000000000000000000000000000000000000;
                owo.visible = false;
                owoSound.play();
                score = score + 1;
            }
        }

        if(negative_owo !== undefined) {
            if(meowser6000.isTouching(negative_owo)) {
                negative_owo.x = 1000000000000000000000000000000000000000000000000000000000000000000000000000000;
                negative_owo.visible = false;
                hissSound.play();
                gamestate = "end";
            }
        }
        createOwo();
        createNegativeowo();
        drawSprites();
        textSize(40);
        textAlign(TOP);
        textFont("Georgia");
        fill("pink");
        stroke("white");
        strokeWeight(5);
        text("Use up arrow and down arrow keys to move!", 700, 0, 400, 400);
    }



    if(gamestate == "end") {
        background(0);
        owo.visible = false;
        meowser6000.visible = false;
        negative_owo.visible = false;
        forest.visible = false;
        textSize(87);
        textAlign(CENTER);
        textFont("Georgia");
        fill("pink");
        stroke("white");
        strokeWeight(5);
        text("You lose! Your score is: "+score, 700, 200, 400, 400);
    }
}

function createOwo() {
    if (World.frameCount % 160 == 0) {
        owo = createSprite(2000,random(350, 833));
        owo.addImage(owoImage);
        owo.scale=1;
        owo.velocityX = -12;
        owo.lifetime = 170;
        owoG.add(owo);
    }
  }
  
  function createNegativeowo() {
    if (World.frameCount % 220 == 0) {
        negative_owo = createSprite(2000,random(350, 833));
        negative_owo.addImage(negative_owoImage);
        negative_owo.scale=1;
        negative_owo.velocityX = -12;
        negative_owo.lifetime = 170;
        negative_owoG.add(negative_owo);
  }
  }