

window.onload = function(){
  var randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("random_number").innerHTML = randomNumber;
}
const randomBtn = document.getElementById('randBtn');
randomBtn.addEventListener('click', random_Number);
