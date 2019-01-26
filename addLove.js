document.getElementById("section2").onclick = function(){
    if (idNumber>20)
    {
            return alert("Too much " + text + "!!!!!");
    }
    return addLove();
}

function initLove(){
  //initialize
  // create a new div element 
  var initDiv = document.createElement("div"); 
  initDiv.className = "love";
  initDiv.setAttribute("id", "1");
  initDiv.setAttribute("style", "position: absolute; top:50%; left:50%; margin:10px;");
  var initContent = document.createTextNode(text); 
  initDiv.appendChild(initContent);  
  document.getElementById("section2").appendChild(initDiv);
  window.location.href = '#section2';
  return;
}

function addLove() { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  newDiv.className = "love";
  newDiv.setAttribute("id", idNumber.toString());
  //newDiv.setAttribute("display", "block;");
  //newDiv.setAttribute("margin");
 // console.log("love id is set to:" + idNumber);
  // and give it some content 
  var newContent = document.createTextNode(text); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  document.getElementById("section2").appendChild(newDiv);
  return setPosition();
}

