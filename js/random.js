var img = document.getElementById('Ricky');

window.onload = function(){
  var randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("random_number").innerHTML = randomNumber;

  img.style.visibility = 'hidden';
}

const randomBtn = document.getElementById("randBtn");
randomBtn.addEventListener('click', random_Number);


function random_Number(){
  var randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("random_number").innerHTML = randomNumber;
  randomBtn.removeEventListener('click' , random_number)
}


const htmlButton = document.getElementById('htmlBtn');
htmlButton.addEventListener('click', htmlClick);
const cssButton = document.getElementById('cssBtn');
cssButton.addEventListener('click', cssClick);

function htmlClick(){
  if (img.style.visibility == 'visible') {
      img.style.visibility = 'hidden';
    }
    else{
      img.style.visibility = 'visible'; 
    }
}

function reset(){
  img.style.visibility = 'hidden';
}


function cssClick(){
  cssButton.style.backgroundColor = 'red';
}
