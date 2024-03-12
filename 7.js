let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true; // Variável indicando se o corredor se registrou cedo
let runnerAge = 18; // Idade do corredor

if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
    console.log(`Corredor com número ${raceNumber} correrá às 9h30.`);
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Corredor com número ${raceNumber} correrá às 11h00.`);
} else if (runnerAge < 18) {
    console.log(`Corredor com número ${raceNumber} correrá às 12h30.`);
} else {
    console.log("Por favor, dirija-se à mesa de registro.");
}
