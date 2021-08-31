let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnersAge = 29;

if (registeredEarly && runnersAge > 29 ) {
  raceNumber += 1000;
}

if (registeredEarly && runnersAge > 29 ) {
  console.log (`Race will begin at 9:30, your race number is: ${raceNumber}.`);
}

else if (!registeredEarly && runnersAge > 29) {
   console.log (`Race will begin at 11:00, your race number is: ${raceNumber}.`);
}

else if (runnersAge > 29) {
   console.log (`Race will begin at 12:30, your race number is: ${raceNumber}.`);
}

else {
  console.log('Please approach the resgistration desk, thanks!');
}
