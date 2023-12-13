function AgeCalculatorForEnglish(){
var bornYear = prompt("Please enter your born year ?");
var results = 2023 - bornYear;

var h2 = document.createElement("h2");
var node = document.createTextNode("You are " + results + " years old");
h2.setAttribute ("id", "AgeCalculator");
h2.append(node);

document.getElementById("results").append(h2);
}
function AgeCalculatorForNepali(){
var bornYear = prompt("Please enter your born year ?");
var results = 2080 - bornYear;

var h2 = document.createElement("h2");
var node = document.createTextNode("You are " + results + " years old");
h2.setAttribute ("id", "AgeCalculator");
h2.append(node);

document.getElementById("results").append(h2);
}
function reset(){

document.getElementById("AgeCalculator").remove();
}