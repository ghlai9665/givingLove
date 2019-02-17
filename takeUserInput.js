document.getElementById("fieldInput-premium").onkeydown = function(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    var userInput = document.getElementById("fieldInput-premium").value;
    text = userInput;
    console.log(text);
    return initLove();
  }
};

document.getElementById("loveButton").addEventListener("click", e => {
  e.preventDefault();
  text = "love";
  return initLove();
});

document.getElementById("fuckButton").addEventListener("click", e => {
  e.preventDefault();
  text = "fuck";
  return initLove();
});
