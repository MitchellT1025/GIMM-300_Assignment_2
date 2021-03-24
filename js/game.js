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


function play(){
  attackButton.disabled = false;
  defendButton.disabled = false;
  fleeButton.disabled = false;
  playButton.disabled = true;
}

function attack(){

}

function defend(){

}

function flee(){

}
