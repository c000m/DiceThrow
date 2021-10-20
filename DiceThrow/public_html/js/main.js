
function rollDice(max) {
  var dice = 0;
  var min = 1;
  max = max+1;
  dice = Math.floor(Math.random() * (max - min)) + min;
  return dice;
}
function writeResult (max){
  var result = rollDice (max);
  var element = document.getElementById("result");
  element.innerHTML = "Zahl: "+result;
}