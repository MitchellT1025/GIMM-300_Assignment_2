//button function initialization
const attackButton = document.getElementById('attackBtn');
attackButton.addEventListener('click', attack);
const defendButton = document.getElementById('defendBtn');
defendButton.addEventListener('click', defend);
const fleeButton = document.getElementById('fleeBtn');
fleeButton.addEventListener('click', flee);
const playButton = document.getElementById('playBtn');
playButton.addEventListener('click', play);

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
var playerDamage;
var enemyHealth;

var enemyCards = [];
//player feedback text
var playerHealthText = document.getElementById('playerHealthText');
playerHealthText.innerHTML = 'Your Health Is: ' + playerHealth;
var outputText = document.getElementById('gameOutputText');
outputText.innerHTML = 'Press play to start';
//player feedback text

//===========Game Logic Values=============
//===========Button Functions==============
function play(){
  attackButton.disabled = false;
  defendButton.disabled = false;
  fleeButton.disabled = false;
  playButton.disabled = true;
  enemyCards.splice(0, enemyCards.length);
  initializeCard();
  initializeCardDisplay();
}

function attack(){

}

function defend(){

}

function flee(){

}
//===========Button Functions==============
//=========Initalize Enemy Card============
function initializeCard(){
  var cardInfo = getStats();
  cardInfo.push(getRandomImage());
  enemyCards.push(cardInfo);
}

function initializeCardDisplay(){
  var imgDisp = document.getElementById('enemyCardImg');
  var healthDisp = document.getElementById('enemyCardHealth');
  var defenseDisp = document.getElementById('enemyCardDefense');

  healthDisp.innerHTML = 'Health: ' + enemyCards[0][0];
  defenseDisp.innerHTML = 'Defense: ' + enemyCards[0][1];
  imgDisp.src = '../Images/' + enemyCards[0][2];
}

function getStats(){
  //random stats for Health and Defense
  var stats = [];

  var attack = parseInt(Math.random() * (26 - 10) + 10);
  var defense = parseInt(Math.random() * (11 - 5) + 5);
  stats.push(attack);
  stats.push(defense);
  console.log(stats);
  return stats;
}

function getRandomImage(){
  var imageSrc = '';
  var images = ['daffy.jpg', 'krab.jpg', 'stimpy.jpg', 'STOPRIGHTTHERE.jpg'];

  imageSrc += images[Math.floor(Math.random() * images.length)];
  console.log(imageSrc);
  return imageSrc;
}
//=========Initalize Enemy Card============
