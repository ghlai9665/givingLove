function setPosition(){
/*
var prevElement = document.getElementById((idNumber-1).toString()); 
var x = prevElement.offsetLeft;
var y = prevElement.offsetTop;
*/
var firstElement = document.getElementById("1"); 
var x = firstElement.offsetLeft;
var y = firstElement.offsetTop;

placeDiv(x,y);
}


function placeDiv(top_pos, left_pos) {
        //console.log("top pos: " + myElement.style.top);
        //console.log("left pos: " + myElement.style.left);
        //var plusOrMinus = 1;
        var moveTop = generateRandomNumber(2,40) * generateRandomSign();
        var moveLeft = generateRandomNumber(2,40) * generateRandomSign();
        console.log("moveTop: " + moveTop);
        console.log("moveLeft: " + moveLeft);
        console.log("top_pos" + top_pos);
        console.log("left_pos" + left_pos);
        var curElement = document.getElementById(idNumber.toString()); 
        curElement.style.position = "absolute";
        curElement.style.top = (50 + moveTop) + "%";
        curElement.style.left = (50 + moveLeft) + "%";
        //console.log("top pos now: " + myElement.style.top);
        //console.log("left pos now: " + myElement.style.left);
        idNumber++;
        console.log(idNumber);
}

function generateRandomNumber(min, max) 
{
    return Math.random() * (max-min) + min;
} 

function generateRandomSign()
{
        return Math.random() < 0.5 ? -1 : 1;    
}

