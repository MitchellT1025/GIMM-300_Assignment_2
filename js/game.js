//button function initialization
const attackButton = document.getElementById('attackBtn');
attackButton.addEventListener('click', attack);
const defendButton = document.getElementById('defendBtn');
defendButton.addEventListener('click', defend);
const fleeButton = document.getElementById('fleeBtn');
fleeButton.addEventListener('click', flee);
const playButton = document.getElementById('playBtn');
playButton.addEventListener('click', play);
//Display Stuff initialized globally
var nameDisp = document.getElementById('enemyCardName');
var imgDisp = document.getElementById('enemyCardImg');
var healthDisp = document.getElementById('enemyCardHealth');
var defenseDisp = document.getElementById('enemyCardDefense');
var playerDamageDisp = document.getElementById('playerDamageReport');
var enemyDamageDisp = document.getElementById('enemyDamageReport');

var playerDeath = false;

window.onload = function() {
  //stuff to happen on the window loading
  var i = 0;
  var titleTextHolder = "Welcome to Javascript RPG"
  var speed = 50;

  function titleWriter() {
    if (i < titleTextHolder.length) {
      document.getElementById("titleText").innerHTML += titleTextHolder.charAt(i);
      i++;
      setTimeout(titleWriter, speed);
    }
  }
  titleWriter();
  //only play button enabled upon window loading
  attackButton.disabled = true;
  defendButton.disabled = true;
  fleeButton.disabled = true;
  playButton.disabled = false;

}
//===========Game Logic Values=============
var playerHealth = 50;
//prevent spamming the defense button to heal
var defenseCounter = 0;
var playerDamage;
var enemyDamage;
var playerHealthRestore;

var enemyCards = [];
//player feedback text
var playerHealthText = document.getElementById('playerHealthText');
playerHealthText.innerHTML = 'Your Health Is: ' + playerHealth;
var outputText = document.getElementById('gameOutputText');
outputText.innerHTML = 'Press play to start';
//player feedback text

//===========Game Logic Values=============
//===========Button Functions==============
function play() {
  if (playerDeath){
    //resets player health & death bool is reset
    playerHealth = 50;
    playerHealthText.innerHTML = 'Your Health Is: ' + playerHealth;
    playerDeath = false;
  }
  //ensure defense counter is reset each round
  defenseCounter = 0;
  //enable buttons
  attackButton.disabled = false;
  defendButton.disabled = false;
  fleeButton.disabled = false;
  playButton.disabled = true;
  //empty previous card array
  enemyCards.splice(0, enemyCards.length);
  //initialize and append new card to emptied array
  initializeCard();
  initializeCardDisplay();
  outputText.innerHTML = 'A wild ' + enemyCards[0][3] + ' appears';
  //empty out labels
  playerDamageDisp.innerHTML = "";
  enemyDamageDisp.innerHTML = "";
  playButton.removeEventListener('click', play);
}
//attack Button
//if your calculated damage is less than the enemy defense, you do minimal damage
function attack() {
  //damage randomized upon click
  playerDamage = parseInt(Math.random() * (20 - 1) + 1);
  enemyDamage = parseInt(Math.random() * (14 - 1) + 1);
  outputText.innerHTML = "";
  console.log('attack pressed');
  if (!gameOver()){
    //if card defense > your damage
    if (enemyCards[0][1] > playerDamage){
      playerDamageDisp.innerHTML = "Your attack was weak and did 1 point of damage";
      enemyDamageDisp.innerHTML = "The " + enemyCards[0][3] + " did " + enemyDamage + " damage";
      playerHealth -= enemyDamage;
      enemyCards[0][0]--;
    }
    else {
      //basic attack
      playerDamageDisp.innerHTML = "You did " + playerDamage + " damage";
      enemyDamageDisp.innerHTML = "The " + enemyCards[0][3] + " did " + enemyDamage + " damage";
      playerHealth -= enemyDamage;
      enemyCards[0][0] -= playerDamage;
    }
    //attacking restores defense counter allowing you to defend more than 3 times
    defenseCounter--;
    //ensures defense counter doesn't go into negatives
    if (defenseCounter < 0){
      defenseCounter = 0;
    }
    console.log(defenseCounter);
    updateDisplay();
  }
  gameOver();
}

//defense Button
//method to heal up and prepare for a big enemy if you have low health
//can only use up to 3 times, after that you lose the ability to defend and take regular damage
//to use defense you must use it less than 3 times and prioritize attacks
function defend() {
  //counter increments
  defenseCounter++;
  //damage calculated upon defense failure
  enemyDamage = parseInt(Math.random() * (14 - 1) + 1);

  if(!gameOver()){
    //fail to defend
    if (defenseCounter > 3){
      outputText.innerHTML = "";
      playerDamageDisp.innerHTML = "The " + enemyCards[0][3] + " interrupts your defensive stance";
      playerHealth -= enemyDamage;
      enemyDamageDisp.innerHTML = "";
      defendButton.disabled = true;
    }
    //defend
    else{
      outputText.innerHTML = "";
      playerDamageDisp.innerHTML = "You set up in a defensive stance and recieve minimal damage";
      playerHealthRestore = parseInt(Math.random() * 4 + 1);
      playerHealth += playerHealthRestore;
      enemyDamageDisp.innerHTML = "You heal " + playerHealthRestore + " health points";
    }
    updateDisplay();
  }
  gameOver();
}

//50-50 chance of escaping a fight or losing the ability to and taking damage
function flee() {
  //enemy damage calculated upon failing to flee
  enemyDamage = parseInt(Math.random() * (14 - 1) + 1);
  //successful flee
  if (Math.random() < 0.5){
    outputText.innerHTML = 'You escape successfully!';
    playerHealthRestore = parseInt(Math.random() * (6 - 1) + 1);
    playerHealth += playerHealthRestore;
    playerDamageDisp.innerHTML = "You gain " + playerHealthRestore + " health points";
    attackButton.disabled = true;
    defendButton.disabled = true;
    fleeButton.disabled = true;
    playButton.disabled = false;
    playButton.addEventListener('click', play);
  }
  //fail to flee
  else{
    outputText.innerHTML = 'You failed to escape. Sorry!';
    playerDamageDisp.innerHTML = "";
    enemyDamageDisp.innerHTML = "The " + enemyCards[0][3] + " did " + enemyDamage + " damage";
    playerHealth -= enemyDamage;
    fleeButton.disabled = true;
  }
  updateDisplay();
}
//===========Button Functions==============
//========Game Condiction Checking=========
function gameOver() {
  //if player dies
  if (playerHealth <= 0) {
    attackButton.disabled = true;
    defendButton.disabled = true;
    fleeButton.disabled = true;
    playButton.disabled = false;
    outputText.innerHTML = 'YOU DIED! Press Play to Restart';
    playerDeath = true;
    playButton.addEventListener('click', play);
    return true;
  }
  //if enemy dies
  if (enemyCards[0][0] <= 0) {
    attackButton.disabled = true;
    defendButton.disabled = true;
    fleeButton.disabled = true;
    playButton.disabled = false;
    outputText.innerHTML = 'VICTORY';
    playerHealthRestore = parseInt(Math.random() * (6 - 1) + 1);
    playerHealth += playerHealthRestore;
    playerDamageDisp.innerHTML = "You gain " + playerHealthRestore + " health points";
    enemyDamageDisp.innerHTML = "";
    playerHealthText.innerHTML = 'Your Health Is: ' + playerHealth;
    playButton.addEventListener('click', play);
    return true;
  }
  return false;
}
//========Game Condiction Checking=========
//=========Initalize Enemy Card============
function initializeCard() {
  var cardInfo = getStats();
  cardInfo.push(getRandomImage());
  cardInfo.push(getRandomName());
  enemyCards.push(cardInfo);
}

function initializeCardDisplay() {

  //Enemy Health and Defense
  healthDisp.innerHTML = 'Health: ' + enemyCards[0][0];
  defenseDisp.innerHTML = 'Defense: ' + enemyCards[0][1];
  //Enemy name
  nameDisp.innerHTML = enemyCards[0][3];//index is 3
  //Enemy Image Display
  imgDisp.src = '../Images/' + enemyCards[0][2];//index is 2
}
function updateDisplay(){
  playerHealthText.innerHTML = 'Your Health Is: ' + playerHealth;
  healthDisp.innerHTML = 'Health: ' + enemyCards[0][0];
}

function getStats() {
  //random stats for Health and Defense
  var stats = [];

  var attack = parseInt(Math.random() * (26 - 10) + 10);
  var defense = parseInt(Math.random() * 14 + 2);
  stats.push(attack);
  stats.push(defense);
  console.log(stats);
  return stats;
}

function getRandomImage() {
  var imageSrc = '';
  var images = ['daffy.jpg', 'krab.jpg', 'stimpy.jpg', 'STOPRIGHTTHERE.jpg', 'Ricky.jpg', 'gazpacho.png', 'lego.png', 'stalker.png'];

  imageSrc += images[Math.floor(Math.random() * images.length)];
  console.log(imageSrc);
  return imageSrc;
}

function getRandomName() {
  var name = '';
  var names = ['Mourntaur', 'Smogbody', 'Glowbrute', 'Doomling'];
  var name = names[Math.floor(Math.random() * names.length)];
  console.log(name);
  return name;
}
//=========Initalize Enemy Card============
