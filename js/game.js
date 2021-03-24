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
  attackButton.disabled = true;
  defendButton.disabled = true;
  fleeButton.disabled = true;
  playButton.disabled = false;

}
//===========Game Logic Values=============
var playerHealth = 50;
var playerDamage = 10;

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
  attackButton.disabled = false;
  defendButton.disabled = false;
  fleeButton.disabled = false;
  playButton.disabled = true;
  enemyCards.splice(0, enemyCards.length);
  initializeCard();
  initializeCardDisplay();
  outputText.innerHTML = 'A wild ' + enemyCards[0][3] + ' appears';
  playButton.removeEventListener('click', play);
}

function attack() {
  console.log('attack pressed');
  if (!gameOver()){
    playerHealth -= enemyCards[0][1];
    enemyCards[0][0] -= playerDamage;
    updateDisplay();
  }
  gameOver();
}

function defend() {

}

function flee() {

}

function gameOver() {
  //if player dies
  if (playerHealth <= 0) {
    attackButton.disabled = true;
    defendButton.disabled = true;
    fleeButton.disabled = true;
    playButton.disabled = false;
    outputText.innerHTML = 'YOU DIED';
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
    playButton.addEventListener('click', play);
    return true;
  }
  return false;
}

//===========Button Functions==============
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
  var defense = parseInt(Math.random() * (11 - 5) + 5);
  stats.push(attack);
  stats.push(defense);
  console.log(stats);
  return stats;
}

function getRandomImage() {
  var imageSrc = '';
  var images = ['daffy.jpg', 'krab.jpg', 'stimpy.jpg', 'STOPRIGHTTHERE.jpg'];

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
