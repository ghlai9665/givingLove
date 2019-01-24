function setPosition(){

var prevElement = document.getElementById((idNumber-1).toString()); 
var x = prevElement.offsetLeft;
var y = prevElement.offsetTop;
placeDiv(x,y);
}

function placeDiv(top_pos, left_pos) {
        //console.log("top pos: " + myElement.style.top);
        //console.log("left pos: " + myElement.style.left);
        console.log("The IDNumber now is" + idNumber);
        var curElement = document.getElementById(idNumber.toString()); 
        curElement.style.position = "absolute";
        curElement.style.top = top_pos + generateRandomNumber(-50,50) + "px";
        curElement.style.left = left_pos + generateRandomNumber(-50,50)  + "px";
        //console.log("top pos now: " + myElement.style.top);
        //console.log("left pos now: " + myElement.style.left);
        idNumber++;
        console.log(idNumber);
}

function generateRandomNumber(min, max) 
{
    return Math.random() * (max-min) + min ;
} 

