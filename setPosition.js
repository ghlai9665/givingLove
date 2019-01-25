function setPosition(){
/*
var prevElement = document.getElementById((idNumber-1).toString()); 
var x = prevElement.offsetLeft;
var y = prevElement.offsetTop;
*/
var firstElement = document.getElementById("1"); 
var x = firstElement.offsetLeft;
var y = firstElement.offsetTop;
//var curElement = document.getElementById(idNumber.toString()); 

return placeDiv(x,y);
}


function placeDiv(top_pos, left_pos) {
        //console.log("top pos: " + myElement.style.top);
        //console.log("left pos: " + myElement.style.left);
        //var plusOrMinus = 1;
        //var moveTop = generateRandomNumber(2,40) * generateRandomSign();
        //var moveLeft = generateRandomNumber(2,40) * generateRandomSign();
        /*console.log("moveTop: " + moveTop);
        console.log("moveLeft: " + moveLeft);
        console.log("top_pos" + top_pos);
        console.log("left_pos" + left_pos);*/
     
        var curElement = document.getElementById(idNumber.toString()); 
        curElement.style.position = "absolute";
        curElement.style.top = (50 + generateRandomNumber(2,45) * generateRandomSign()) + "%";
        curElement.style.left = (50 + generateRandomNumber(2,45) * generateRandomSign()) + "%";
       // console.log("there is overlap? " + checkOverlapForAll());
        while(checkOverlapForAll() === true){
      
        //var startTime = new Date().getTime();        
        curElement.style.top = (50 + generateRandomNumber(2,45) * generateRandomSign()) + "%";
        curElement.style.left = (50 + generateRandomNumber(2,45) * generateRandomSign()) + "%";
        }
//console.log("right now there is overlap? " + checkOverlapForAll());
        //console.log("top pos now: " + myElement.style.top);
        //console.log("left pos now: " + myElement.style.left);
      
        //console.log("check overlap for all is: " + checkOverlapForAll());
        idNumber++;
        //console.log(idNumber);
}

function generateRandomNumber(min, max) 
{
    return Math.random() * (max-min) + min;
} 

function generateRandomSign()
{
        return Math.random() < 0.5 ? -1 : 1;    
}

//check if overlap, while overlap, keep generating random numbers until there is no overlap



function checkOverlap(element1, element2)
{
        var rect1 = element1.getBoundingClientRect();
        var rect2 = element2.getBoundingClientRect();
        var overlap = !(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom);
        return overlap;
        /*for (var i=1; i<idNumber; i++){
                var overlap = !(rect1.right < rect2.left || 
                        rect1.left > rect2.right || 
                        rect1.bottom < rect2.top || 
                        rect1.top > rect2.bottom)
        }*/
}

function checkOverlapForAll()
{ 
        var curElement = document.getElementById(idNumber.toString()); 
        for(var i=1; i<idNumber; i++)
        {
                var compElement = document.getElementById(i.toString());
                if (checkOverlap(curElement, compElement) === true)
                {
                        return true;
                }//if one is true, return true, if all is false, return false
        }
        return false;
}





