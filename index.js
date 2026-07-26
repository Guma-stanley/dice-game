//creating a random image
var randomNumber1 = Math.floor(Math.random()*6)+1;

//<img src = "./images/dice1.pn">

var randomDiceImage = "dice"+randomNumber1+".png";

//creating the random image source
var randomImageSource = "./images/"+randomDiceImage;

//changing the src attribute of our images using DOM
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//randomizing the second image
var randomNumber2 = Math.floor(Math.random()*6)+1;

//<img src = "./images/dice1.pn">
var randomImageSource2 = "./images/dice"+randomNumber2+".png";

//selecting the second image using js
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//if stanley wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Stanley Wins!";
} 
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Dr. Fred Wins!";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}
