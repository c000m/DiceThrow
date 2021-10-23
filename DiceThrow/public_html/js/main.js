/*
 * Werfen eines Würfels mit max Augen
 * @param {type} max
 * @returns {Number}
 */
function rollDice(max) {
  if (max == NaN){
      return 0;
  }
  var dice = 0;
  var min = 1;
  max = max+1;
  dice = Math.floor(Math.random() * (max - min)) + min;
  return dice;
}
/*
 * 
 * @param {type} max
 * @returns {undefined}
 */
function writeResult (max){
  var result = rollDice (max);
  var element = document.getElementById("result");
  element.innerHTML = "Zahl: "+result;
}

/**
 * Formular Einheiten auswerten und verarbeiten
 * @returns {undefined}
 */
function processUnitsInput (){
    let output = document.getElementById('output');
    
    let formAttackerUnits = document.getElementById("attackerUnits");
    let formDefenderUnits = document.getElementById("defenderUnits");
    
    //roll dice for attacker
    let attackerDice = formAttackerUnits.value;
    const attackerResults = rollAndSortDices (attackerDice);
     //Ausgabe Würfelergebnis
    let attackerResultsMessage = formatRollDiceResult("Angreifer",attackerDice, attackerResults );
   
   //roll dice for defender
    let defenderDice = formDefenderUnits.value;
    const defenderResults = rollAndSortDices (defenderDice);
     //Ausgabe Würfelergebnis
    let defenderResultsMessage = formatRollDiceResult("Verteidiger",defenderDice, defenderResults );
    
    //todo würfe vergleichen und ergebnis bestimmen
    let defenderLosses = 0;
    let attackerLosses = 0;
    for (let i = 0; i < defenderDice; i++){
        //Würfe in absteigender Höhe vergleichen
        if (defenderResults [i] < attackerResults [i]){
            //Wurf Verteigiger ist kleiner als entsprechender Wurf Angreifer
            //Verteidiger verliert eine Einheit
            defenderLosses++;
            console.log ("Verteidiger verliert eine Einheit.");
        } 
        else {
            //Wurf Verteidiger ist gleich oder größer Wurf Angreifer
            //Angreifer verliert eine Einheit
            attackerLosses++;
            console.log ("Angreifer verliert eine Einheit.");
        }
    }
    console.log("Verluste A: "+attackerLosses+" Verluste Verteidiger: "+defenderLosses);
    let attackCasultiesMessage = "<div>Angreifer verliert: "+attackerLosses+" Einheiten.</div>";
    attackCasultiesMessage += "<div>Verteidiger verliert: "+defenderLosses+" Einheiten.</div>";
    
    //Wurde das Gebiet erorbert?
    let attackConclusionMessage = "<div><b>Gebiet wurde ";
    if (defenderDice > defenderLosses){
        //Angriff nicht erfolgreich
        attackConclusionMessage += "nicht";
    }
    
    else {
        //Angriff erfolgreich
    }
    attackConclusionMessage += " erobert.</b></div>";
    
    //Ausgabe der formatierten Ergebnisse
    output.innerHTML = attackerResultsMessage
            + defenderResultsMessage
            + attackCasultiesMessage
            + attackConclusionMessage;
    
    //Form auf überlebende Einheiten setzen
    formAttackerUnits.value = (attackerDice - attackerLosses);
    formDefenderUnits.value = (defenderDice - defenderLosses);
}

/**
 * Würfeln und Sortieren einer gegebenen Menge an Würfeln
 * Rückgabe der Ergebnisse als sortiertes Array mit absteigenden Augenwerten
 * @param {type} numDice
 * @returns {Array|rollAndSortDices.results}
 */
function rollAndSortDices (numDice){
    const results = [];
    if (numDice < 1) {
        return results;
    }
    
    for (let i = 0; i < numDice; i++ ){
        results [i] = rollDice (6);
    }
    //sortieren
    results.sort(function (a, b) {
        return b - a;
    });
    return results;
}

/**
 * Formatiert die Wurfergebnisse eines Spielers als ul
 * 
 * @param {String} partyName
 * @param {int} numDice
 * @param {Array} results
 * @returns {String}
 */
function formatRollDiceResult (partyName, numDice, results){
    let resultsMessage = "<b>Würfelergebnis "+partyName+"</b><br/><ul>";
    for (let i = 0; i < numDice; i++ ){
        resultsMessage = resultsMessage + "<li>Würfel "+(i+1)+": "+results [i]+"</li>";
        //console.log("r:"+resultsMessage [i]);
    }
    resultsMessage = resultsMessage + "</ul>";
    return resultsMessage;
}