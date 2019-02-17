function openModal() {
  //console.log("it tried to open modal");
  $("#modal-asklogin").modal("open");
  //  console.log("it went thru");
  // if log in, allow more fucks

  // else, restart()
}
function limit(callback) {
  var finalMsg = new SpeechSynthesisUtterance();
  finalMsg.text =
    "Wow, 20" + " " + text + "s were given, that's a lot of " + text + "s!!!";
  speechSynthesis.speak(finalMsg);
  callback();
}

var total = 15;
var instructChange1 = 15 * 0.2;
var instructChange2 = 15 * 0.4;
var instructChange3 = 15 * 0.6;
var instructChange4 = 15 * 0.8;

//handle clicks
document.getElementById("section3").onclick = function() {
  /*var instructChange1 = 5;
  var instructChange2 = 7;
  var instructChange3 = 9;
  var total = 11;*/

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
  if (idNumber > instructChange4) {
    document.getElementById("instruction1").innerHTML =
      "You are almost out of " + text.toUpperCase() + "s!";
  }
  if (idNumber == total) {
    document.getElementById("instruction1").innerHTML =
      "Sorry. You are out of " + text.toUpperCase() + "s.";
  }

  if (idNumber > total) {
    /*var finalMsg = new SpeechSynthesisUtterance();
    finalMsg.text =
      "Wow, 20" + " " + text + "s were given, that's a lot of " + text + "s!!!";
    speechSynthesis.speak(finalMsg);*/

    //alert(
    //"20" + " " + text + "s were given !!! That's a lot of " + text + "!!!"
    // );
    /*
    return $("#modal-login")
      .modal("open")
      .then(() => restart());*/
    //return openModal().then(console.log("Promise was fulfilled"));
    return limit(openModal);
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
    "text-align: center; margin-top: 80vh; font-size:3vh;"
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

function restartLove() {
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

  window.scrollTo({
    top: 1 * window.innerHeight,
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
