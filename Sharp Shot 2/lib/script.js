const canvas = document.getElementById("gameSpace");
const ctx = canvas.getContext("2d");

let asteroidHealth = 1;
let damage = 0;
let levelDamage = 0;
let jPressed = false;
let jPressed2 = false;
let lPressed = false;
let lPressed2 = false;
let kPressed = false;
let kPressed2 = false;
let pace = 5;
let cdtX = 19;
let cdtY = 19; 
let tileAmount = 20;
let tileSize = canvas.width / tileAmount - 2;
let headX = 10;
let headY = 19;
let borderFirstX = 15;
let borderFirstY = 0;
let borderSecondX = 4;
let borderSecondY = 0;
let bulletY = -1;
let bulletX = 10; 
let asteroidX = 10;
let asteroidY = 0;
let bulletShot = false;
let leftPressed = false;
let rightPressed = false;
let gameStarted = false;
let coolDown = false;
let xVelo = 0;
let yVelo = 0;
let yCDTvelo = 0;
let score = 0;
let points = 0;
let gravity = 1;
let bulletSpeed = 3;
let pointUpgrade = 1;
let asteroidStrength = 0;
let gameOverVar = false;
let extraLife = 0;
let priceA = 5;
let priceB = 15;
let priceC = 15;
let priceD = 5;
const shootSound = new Audio('explosion.mp3');
const boomSound = new Audio('shoot.wav')
const upgradeSound = new Audio('fastinvader1.wav')
const upgradeSound2 = new Audio('fastinvader2.wav')
const upgradeSound3 = new Audio('fastinvader3.wav')
const upgradeSound4 = new Audio('fastinvader4.wav')
const upgradeSound5 = new Audio('ufo_lowpitch.wav')

function createGame() {
  changeSnakePos();
  clearScreen();
  gameOver();
  borderFirst();
  borderSecond();
  makeMan();
  makeManUnicode();
  makeDebug();
  makeDebug2();
  makeDebug3();
  makeDebug4();
  makeDebug5();
  makeDebug6();
  makeDebug7();
  makeDebug8();
  makeDebug9();
  makeDebug10();
  makeDebug11();
  makeDebug12();
  makeDebug13();
  makeDebug14();
  makeDebug15();
  makeDebug16();
  makeDebug17();
  makeDebug18();
  makeDebug19();
  makeBullet();
  makeAsteroid();
  makeShooting();
  makeAsteroidCol();
  moveAsteroid();
  makeAsteroidStrength();
  shopFunction();
  setTimeout(createGame, 1000/ pace);
}
function shopFunction(){
if(jPressed === true){
  if(jPressed2 === true){
if(points >= priceB){
  points = points - priceB
 pointUpgrade = pointUpgrade + 1
 jPressed2 = false;
 jPressed = false;
 priceB = priceB * 2;
}
}
}
if(lPressed === true){
  if(lPressed2 === true){
if(points >= priceA){
  points = points - priceA
 bulletSpeed = bulletSpeed + 1
 levelDamage = levelDamage + 1
 lPressed2 = false;
 lPressed = false;
 priceA = priceA + 5;
}
}
}
if(jPressed === true){
if(jPressed2 === true){
if(points <= price){
jPressed = false;
jPressed2 = false;
}
}
}
if(lPressed === true){
  if(lPressed2 === true){
  if(points <= priceB){
  lPressed = false;
  lPressed2 = false;
}
}
}
if(kPressed === true){
  if(kPressed2 === true){
if(points >= priceC){
  points = points - priceC
 extraLife = extraLife + 1;
 kPressed2 = false;
 kPressed = false;
 priceC = priceC * 2;
}
}
}
if(kPressed === true){
  if(kPressed2 === true){
  if(points <= priceC){
  kPressed = false;
  kPressed2 = false;
}
}
}
}
  
function makeAsteroidStrength(){
  if(score === 1){
asteroidStrength = 1
  }
  if(score === 10){
asteroidStrength = 2
asteroidHealth = 2
upgradeSound.play();
  }
  if(score === 25){
 asteroidStrength = 3
 asteroidHealth = 3
upgradeSound2.play();
}
if(score === 35){
asteroidStrength = 4
asteroidHealth = 4
upgradeSound3.play();
 }
 if(score === 50){
 asteroidStrength = 5
 asteroidHealth = 5
 upgradeSound4.play();
 }
 if(score === 100){
  asteroidStrength = 6
  asteroidHealth = 6
  upgradeSound5.play();
  }
}

function gameOver(){
  if(gameOverVar === true && extraLife === 0){
    alert('Game Over! Press OK to start again! Your score was ' + score)
    window.location.reload();
     gameStarted = false;
     gameOverVar = true;
   }
   if(asteroidY === 19){
   gameOverVar = true;
   }
   if(gameOverVar === true && extraLife >= 1){
extraLife = extraLife - 1;
gameOverVar = false;
headX = 10;
bulletY = -1;
asteroidY = 0;
asteroidX = 10;
   }
}
function clearScreen() {
  ctx.fillStyle = 'rgba(0, 0, 0, 10)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function makeBullet (){
  ctx.fillStyle = 'gray'
  ctx.fillRect(bulletX * tileAmount, bulletY * tileAmount, tileSize,tileSize)
}
//creates the sprites


function makeAsteroid (){
  if(gameStarted === true){
  if(asteroidStrength === 0){
  ctx.fillStyle = 'rgba(60,60,60,60)'
  }
  if(asteroidStrength === 1){
    ctx.fillStyle ='rgba(60,60,60,60)'  
  }
  if(asteroidStrength === 2){
    ctx.fillStyle = 'rgba(100,100,100,100)'  
  }
  if(asteroidStrength === 3){
    ctx.fillStyle = 'rgba(120,100,100,120)'  
  }
  if(asteroidStrength === 4){
    ctx.fillStyle = 'rgba(120,120,100,140)'  
  }
  if(asteroidStrength === 5){
    ctx.fillStyle = 'rgba(120,120,120,120)'  
  }
  if(asteroidStrength === 6){
    ctx.fillStyle = 'rgba(140,140,140,140)'  
  }
  ctx.fillRect(asteroidX * tileAmount, asteroidY * tileAmount, tileSize,tileSize)
}
}
function makeMan (){
  if(gameStarted === true){
  ctx.fillStyle = 'black'
  ctx.fillRect(headX * tileAmount, headY * tileAmount, tileSize,tileSize)
}}
function makeManUnicode(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "25px Verdana"
  ctx.fillText("👾", headX * tileAmount, headY * tileAmount, tileSize,tileSize)
}}
function borderFirst (){
  if(gameStarted === true){
  ctx.fillStyle = 'rgba(40,40,40,40)'
  ctx.fillRect(borderFirstX * tileAmount, borderFirstY * tileAmount, tileSize,tileSize * 40)
}}
function borderSecond (){
  if(gameStarted === true){
  ctx.fillStyle = 'rgba(40,40,40,40)'
  ctx.fillRect(borderSecondX * tileAmount, borderSecondY * tileAmount, tileSize,tileSize * 40)
}}
function makeDebug8(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "10px Verdana"
  ctx.fillText("Extra Lives:" + extraLife, canvas.width -397, 90)
}}
function makeDebug7(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "7px Verdana"
  ctx.fillText("Extra Life Price:" + priceC, canvas.width -80, 86)
}
}
function makeDebug6(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "7px Verdana"
  ctx.fillText("Point Value Price:" + priceB, canvas.width -80, 93)
}
}
function makeDebug3(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "10px Verdana"
  ctx.fillText("Better Gun:" + levelDamage, canvas.width -397, 100)
}}
  function makeDebug4(){
    if(gameStarted === true){
    ctx.fillStyle = 'white'
    ctx.font= "10px Verdana"
    ctx.fillText("Point Value:" + pointUpgrade, canvas.width -397, 110)
}
  }
function makeDebug5(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "7px Verdana"
  ctx.fillText("Better Gun Price:" + priceA, canvas.width -80, 100)
}
}
function makeDebug2(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "15px Verdana"
  ctx.fillText("Score:" + score, canvas.width -397, 50)
}
}
function makeDebug(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "15px Verdana"
  ctx.fillText("Points:" + points, canvas.width -397, 35)
}
}
function makeDebug9(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "15px Verdana"
  ctx.fillText("Shop 🛒", canvas.width -80, 20)
}
}
function makeDebug10(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "8px Verdana"
  ctx.fillText("Better gun 🔫= 'L'", canvas.width -80, 35)
}
}
function makeDebug11(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "8px Verdana"
  ctx.fillText("Extra life ♥ = 'K'", canvas.width -80, 50)
}
}
function makeDebug12(){
  if(gameStarted === true){
  ctx.fillStyle = 'white'
  ctx.font= "8px Verdana"
  ctx.fillText("Point Value💵 = 'J'", canvas.width -80, 65)
}
}
function makeDebug13(){
  if(gameStarted === false){
  ctx.fillStyle = 'white'
  ctx.font= "9px Verdana"
  ctx.fillText("How to play: try to destroy the Asteroids", canvas.width -295, 215)
}
}
function makeDebug14(){
  if(gameStarted === false){
    ctx.fillStyle = 'white'
  ctx.font= "9px Verdana"
  ctx.fillText("with your alien 👾. You can upgrade your ", canvas.width -295, 225)
  }
}
function makeDebug15(){
  if(gameStarted === false){
    ctx.fillStyle = 'white'
  ctx.font= "9px Verdana"
  ctx.fillText("alien 👾 with the SHOP 🛒. Use 'SPACE' to ", canvas.width -295, 235)
  }
}
function makeDebug16(){
  if(gameStarted === false){
    ctx.fillStyle = 'white'
  ctx.font= "9px Verdana"
  ctx.fillText("shoot, hold! Dont tap the 'LEFT ARROW'⇦ to move to the left,", canvas.width -295, 245)
  }
}
function makeDebug17(){
  if(gameStarted === false){
    ctx.fillStyle = 'white'
  ctx.font= "9px Verdana"
  ctx.fillText("and hold! Dont tap the 'RIGHT ARROW'⇨ to move to the right.", canvas.width -295, 255)
  }
}
function makeDebug19(){
  if(gameStarted === false){
    ctx.fillStyle = 'white'
  ctx.font= "9px Verdana"
  ctx.fillText("Press 'SPACE' to start.", canvas.width -295, 265)
  }
}
function makeDebug18(){
  if(gameStarted === false){
    ctx.fillStyle = 'white'
  ctx.font= "30px Verdana"
  ctx.fillText("🔥 𝕊𝕙𝕒𝕣𝕡 𝕊𝕙𝕠𝕥 🔫", canvas.width -340, 200)
  }
}
function changeSnakePos(){
  if(gameOverVar === false){
    if(headX === 4){
      headX = 10;
      }
      if(headX === 15){
       headX = 10;
      }
if(rightPressed === true){
    headX = headX - 1 
  }
  if (leftPressed === true) {
    headX = headX + 1 

}


}
//end of creating sprites

//event listeners
document.body.addEventListener('keydown', KeyDown);
document.body.addEventListener('keyup', KeyUp);

function KeyDown(event){
  if(event.keyCode == 37){
    rightPressed = true;
    gameStarted = true;
  }
  if(event.keyCode == 39) {
    leftPressed = true;
    gameStarted = true;
  }
  
  if(event.keyCode == 74){
    jPressed = true;
    }
    if(event.keyCode == 76){
      lPressed = true;
  }
  if(event.keyCode == 75){
    kPressed = true;
}
}
function KeyUp(event) {
  if(event.keyCode == 37){
    rightPressed= false;
  }
  if(event.keyCode == 39) {
    leftPressed = false;

  }
  if(event.keyCode == 32){
    if(bulletShot === false){
      if(gameOverVar === false){
      bulletX = headX;
    bulletY = 17
    bulletShot = true;
    gameStarted = true;
    boomSound.play();
    }
}
}  
if(event.keyCode == 74){
  jPressed2 = true;
}
if(event.keyCode == 75){
  kPressed2 = true;
}
if(event.keyCode == 76){
  lPressed2 = true;
}
}
}

function coolDownTimer(){
  if(yCDTvelo === 1){
    cdtY = cdtY - pace
  }
}
function makeShooting(){
  if(bulletY >= -1){
    bulletY = bulletY - bulletSpeed
  }
  if(bulletY <= -1){
    bulletShot = false;
    bulletX = 20;
  }
}
function makeAsteroidCol(){
  if(bulletY <= asteroidY && bulletX === asteroidX){
    if(gameStarted === true){
      if(damage >= asteroidHealth){
    asteroidX = Math.floor(Math.random() * 10 + 5)
    asteroidY = -5
   score++;
   points = points + pointUpgrade
   shootSound.play();
   damage = levelDamage;
    }
  }
  }
  if(bulletY <= asteroidY && bulletX === asteroidX){
  if(gameStarted === true){
    if(damage < asteroidHealth){
damage++;
bulletY = -1;
bulletX = 20;
bulletShot = false;
  }
}
  if(score >= 10){
    pace = 6;
    
  }
  if(score >= 25){
    pace = 7;
    
  }
   if(score >= 35){
      pace = 8;
    
}
if(score >= 50){
  pace = 9;
  
}
  }
}
function moveAsteroid(){
if(gameStarted === true){
asteroidY = asteroidY + gravity
}
if(asteroidX >= 15){
asteroidX = 14
  }
if(asteroidX <= 4)
asteroidX = 5
}

createGame();


