window.onload = function(){
  var randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("random_number").innerHTML = randomNumber;
}

const randomBtn = document.getElementById('randBtn');
randomBtn.addEventListener('click', random_Number);


function random_Number(){
  var randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("randBtn").innerHTML = randomNumber;
  randomBtn.removeEventListener('click' , random_number)
}


const htmlButton = document.getElementById('htmlBtn');
htmlButton.addEventListener('click', htmlClick);
const cssButton = document.getElementById('cssBtn');
cssButton = document.getElementById('click', cssClick);

function htmlClick(){
document.getElementById('htmlBtn').style.color = 'red'; 
}
