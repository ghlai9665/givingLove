document.onclick = function(){
    addLove();
}

function addLove () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  newDiv.className = "love";
  newDiv.setAttribute("id", idNumber.toString());
  console.log("love id is set to:" + idNumber);
  // and give it some content 
  var newContent = document.createTextNode("LOVE"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  document.body.appendChild(newDiv);
  setPosition();
}

