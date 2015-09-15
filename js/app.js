const INCREMENT = 83;
const INCREMENT_X = 100;


// Enemies our player must avoid
var Enemy = function (x, y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = Math.floor(Math.random() * 200 + 1);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.

  this.x += this.speed * dt ;

  //console.log("annemy " + this.x);
  //console.log("player " + player.x);
  //console.log("diff " + (this.x - player.x));

  var checkX = this.x - player.x;
  var checkY = this.y - player.y;

  console.log("checkX " + checkX);
  console.log("checkY " + checkY);

  // checkX collision
  if ((checkX < 10) && (checkX > -10) && (checkY < 10) && (checkY > -10)){
    console.log("collision !!!");
    player.x  = 200;
    player.y = 400;
  }

  if (this.x > 500) {
    this.x = 0
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function (x, y) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
};

// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function () {
  if (this.y < 0) {
    console.log("Winning stage!!!");
    this.x = 200;
    this.y = 400;
  }
};

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) {
  switch (key) {
    case 'left':
      this.x -=  INCREMENT_X;
      break;
    case 'right':
      this.x += INCREMENT_X;
      break;
    case 'up':
      this.y -= INCREMENT;
      break;
    case 'down':
      this.y += INCREMENT;
      break;
  }
  console.log("coordinate x " + this.x);
  console.log("coordinate y " + this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
for (var i = 0; i < 1; i++) {
  aEnemy = new Enemy(0, 83 * (i + 4) - 20);
  console.log("aEnemy " + i + " " + aEnemy.x + " " + aEnemy.y);
  allEnemies.push(aEnemy);
}

// Place the player object in a variable called player
var player = new Player(200, 400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
