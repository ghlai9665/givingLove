document.getElementById("section2").onclick = function(){
    if (idNumber>20)
    {
      var finalMsg = new SpeechSynthesisUtterance();
      finalMsg.text = "20" + " " + text + "s given !!!!!"
      speechSynthesis.speak(finalMsg);
      return alert("20" + " " + text + "s given !!!!!");
    }
   
    return addLove();
}

function initLove(){
  //clear the field
  idNumber = 2;
  document.getElementById("section2").innerHTML = "";
  //initialize
  var initDiv = document.createElement("div"); 
  initDiv.className = "love";
  initDiv.setAttribute("id", "1");
  initDiv.setAttribute("style", "position: absolute; top:50%; left:50%; margin:10px;");
  var initContent = document.createTextNode(text); 
  initDiv.appendChild(initContent);  
  document.getElementById("section2").appendChild(initDiv);
  //window.location.href = '#section2'; //here needs to add animation
  window.scroll({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
  return;
}

function addLove() { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  newDiv.className = "love";
  newDiv.setAttribute("id", idNumber.toString());
  // and give it some content 
  var newContent = document.createTextNode(text); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  document.getElementById("section2").appendChild(newDiv);
  //play audio
  //var audioText = document.getElementById('1').innerHTML;
  var audioText = text;
  var msg = new SpeechSynthesisUtterance();
  msg.text = audioText;
  speechSynthesis.speak(msg);
  return setPosition();
}

