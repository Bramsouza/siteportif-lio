var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

//carregando imagens
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600,200);
  
  //cria o trex 
  trex = createSprite(50,160,20,50);

  //addAnimation recebe dois argumentos — um rótulo que pode ser qualquer string e o nome da animação que foi
  //carregada.
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //cria um chão para o plano de fundo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.velocityX = -4;
  
  //cria chão invisível para o trex
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
}

function draw() {
  //set background color
  background("white");
  
  console.log(trex.y);
  
  //pula quando a tecla space for pressionada e o trex já está em posição >=100
  if(keyDown("space") && trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  //adição de gravidade do trex
  trex.velocityY = trex.velocityY + 0.8;
  
  //no planod e fundo - corta a metade do bloco depois de 0 e divide por outra metade que acrescenta no início para ficar um loop
  if (ground.x <= 0){
    ground.x = ground.width/2;
  }
  
  //o trex colide com o bloco invisível
  trex.collide(invisibleGround);
  
  drawSprites();
}