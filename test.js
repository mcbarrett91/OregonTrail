console.log(
  "\n%cMichael Barrett\n",
  "font-size:40px;color:#fff;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);"
);
console.groupCollapsed("%cOregon Trail Test.js", "font-size:20px;color:#fff;");

let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`
);
wagon.join(henrietta);
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`
);
wagon.join(juan);
wagon.join(maude); // There is no room for her!
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`
);
henrietta.hunt(); // Henrietta goes in search of food.
juan.eat(); // Juan eats – as Juan does. 🤣
juan.eat(); // Juan has run out of food!
console.log(juan);
console.log(
  `Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`
);
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`);
console.groupEnd();
