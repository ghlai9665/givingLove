document.getElementById('input1').onkeydown = function(e){
    if(e.keyCode == 13){
        e.preventDefault();
        var userInput = document.getElementById("input1").value;
        text = userInput;
        console.log(text);
        return initLove();
    }
 };