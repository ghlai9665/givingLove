//handle clicks
document.getElementById("section3").onclick = function() {
  var instructChange1 = 5;
  var instructChange2 = 7;
  var instructChange3 = 9;
  var total = 11;

  if (idNumber > instructChange1) {
    document.getElementById("instruction1").innerHTML =
      "Keep clicking for more " + text + "s!!";
  }
  if (idNumber > instructChange2) {
    document.getElementById("instruction1").innerHTML =
      "Keep going, let's see how many " + text + "s you can give!!!";
  }
  if (idNumber > instructChange3) {
    document.getElementById("instruction1").innerHTML =
      "DON'T STOP!!!!! MORE " + text.toUpperCase() + "S!!!";
  }
  if (idNumber > total) {
    var finalMsg = new SpeechSynthesisUtterance();
    finalMsg.text =
      "Wow, 20" + " " + text + "s were given, that's a lot of " + text + "s!!!";
    speechSynthesis.speak(finalMsg);
    alert(
      "20" + " " + text + "s were given !!! That's a lot of " + text + "!!!"
    );
    return restart();
  }
  return addLove();
};

function initLove() {
  //clear the field
  idNumber = 1;
  document.getElementById("section3").innerHTML = "";

  //"position: absolute; left: 35vw; top: 90vh"
  //initialize
  var initDiv = document.createElement("div");
  initDiv.className = "instruction";
  initDiv.setAttribute(
    "style",
    "text-align: center; margin-top: 80vh; font-size:5vh;"
  );
  initDiv.setAttribute("id", "instruction1");
  var initContent = document.createTextNode(
    "Click the screen for more " + text + "s!"
  );
  initDiv.appendChild(initContent);
  document.getElementById("section3").appendChild(initDiv);

  //window.location.href = '#section2'; //here needs to add animation

  window.scroll({
    top: 2 * window.innerHeight,
    left: 0,
    behavior: "smooth"
  });

  return;
}

function addLove() {
  // create a new div element
  var newDiv = document.createElement("div");
  newDiv.className = "love";
  newDiv.setAttribute("id", idNumber.toString());
  newDiv.setAttribute("style", "color: #1d1d1d;");
  // and give it some content
  var newContent = document.createTextNode(text);
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the DOM
  document.getElementById("section3").appendChild(newDiv);
  //play audio
  var audioText = text;
  var msg = new SpeechSynthesisUtterance();
  msg.text = audioText;
  speechSynthesis.speak(msg);
  return setPosition();
}
