
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

/*
 * Formular Einheiten auswerten und verarbeiten
 */
function processUnitsInput (form){
    let output = document.getElementById('output');
    let attackerUnits = null;
    attackerUnits = document.getElementById("attackerUnits");
    
    let defenderUnits = null;
    defenderUnits = document.getElementById("defenderUnits");
    

    //null check on form
    if (!form || !attackerUnits || !defenderUnits) {
        output.innerHTML = "form is not vailid";
        return;
    }
    
    //roll dice for attacker
    let diceAttacker = attackerUnits.value;
    const attackerResults = [diceAttacker];
 
    for (let i = 0; i < attackerResults.length; i++ ){
        attackerResults [i] = rollDice (6);
    }
    //todo sortieren
   
   //todo defender
    let diceDefender = defenderUnits.value;    
    output.innerHTML = "Angreifer: "+attackerUnits.value+"</br>"+"Verteidiger: "+defenderUnits.value;
    
    //todo würfe vergleichen und ergebnis bestimmen
}