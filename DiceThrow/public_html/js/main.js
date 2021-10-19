//function setAction(form) {
//  form.action = "register.html";
//  alert(form.action);
//  return false;
//}
function rollDice(max) {
  var dice = 0;
  var min = 1;

  dice = Math.floor(Math.random() * (max - min)) + min;
  var element = document.getElementById("result");
  element.innerHTML = "Zahl: "+dice;
}