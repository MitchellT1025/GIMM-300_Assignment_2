const htmlButton = document.getElementById('htmlBtn');
const cssButton = document.getElementById('cssBtn');
htmlButton.addEventListener('click', htmlClick);
cssButton.addEventListener('click', cssClick);


window.onload = function() {
  var randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("random_number").innerHTML = randomNumber;
}

function htmlClick(){

}

function cssClick(){

}
