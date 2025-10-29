const images = ["images/Cannavaro.png", "images/Casillas.png","images/DelPiero.png","images/Messi.png","images/Ronaldo.png"];
const randomNum = Math.floor((Math.random())*images.length);
const selectedImg = images[randomNum];

document.querySelector("#quoteImage").src = selectedImg;