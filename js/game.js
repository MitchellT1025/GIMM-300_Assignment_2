window.onload = function() {

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
}
