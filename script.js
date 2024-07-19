var firstUserName = document.getElementById("firstUserName");
var secondUserName = document.getElementById("secondUserName");
var displayLove = document.getElementById("displayLove");
var imageLove= document.getElementById("imageLove");

function loveCalculate(){
    var lovePercentage = Math.random(); // generates 0 to 0.9999 randomly
    lovePercentage = lovePercentage*100; // multiplying to scale the number till 99.9
    lovePercentage = Math.floor(lovePercentage) + 1; // rounding number to get a whole number
    displayLove.innerHTML = firstUserName.value + " and "+ secondUserName.value +" has a love percentage of " + lovePercentage + " %";
    if(lovePercentage >= 90)
    {
        imageLove.style.backgroundImage = "url(./Assets/Img90.png)";
    }
    else if(lovePercentage >= 80){
        imageLove.style.backgroundImage = "url(./Assets/Img80.png)";
    }
    else if(lovePercentage >= 60)
    {
        imageLove.style.backgroundImage = "url(./Assets/Img60.png)";
    }
    else if(lovePercentage >= 40)
    {
        imageLove.style.backgroundImage = "url(./Assets/Img40.png)";     
    }
    else if(lovePercentage >= 20)
    {
        imageLove.style.backgroundImage = "url(./Assets/Img20.png)";        
    }
    else
    {
        imageLove.style.backgroundImage = "url(./Assets/Img.png)";
    }
}