//Create variables here
var dog,happydog,foodstock,Food,database,dog_sprite
function preload()
{
  dog=loadImage("Dog.png")
 happydog= loadImage("happydog.png")
}

function setup() {
  database= firebase.database()
	createCanvas(500,500);
  dog_sprite=createSprite (250,250)
  
  dog_sprite.addImage(dog)
  
  dog_sprite.scale=0.1

 foodstock=database.ref("food")
   foodstock.on("value",readStock)
}


function draw() {  
 // console.log(Food)
background(46,139,87);

if(keyDown(UP_ARROW)){
if(Food!==undefined){
writeStock(Food)
if(Food!==0){
dog_sprite.addImage(happydog)
}
}

}

 
  //add styles here
  drawSprites();
  if(Food!==undefined){

  text("food remaining:"+Food,200,200)
  }
  if (Food!==0&&Food!==undefined) {
    
 
  text("press up arrow to feed drago milk",200,50)
}
}

function readStock(data){
Food=data.val();

}

function writeStock(x){
  x=x-1
  if(x<=0){
    x=0
  }
 
  database.ref("/").update({
  food:x})


  

  






}

