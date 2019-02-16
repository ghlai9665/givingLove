document.getElementById('fieldInput').onkeydown = function(e){
    if(e.keyCode == 13){
        e.preventDefault();
        var userInput = document.getElementById("fieldInput").value;
        text = userInput;
        console.log(text);
        return initLove();
    }
 };