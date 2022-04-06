function percentageOfWorld1(population) {
  let worldPopulation=7900;
  let percentage = (population/worldPopulation)*100;
  return percentage.toFixed(1);
}

let chinaPercentage= percentageOfWorld1(1441);
let israelPercentage= percentageOfWorld1(9.5);
let usaPercentage= percentageOfWorld1(332);

console.log(chinaPercentage);
console.log(israelPercentage);
console.log(usaPercentage);

console.log("**********************************************************************************");

const percentageOfWorld2= function (population) {
  let worldPopulation=7900;
  let percentage = (population/worldPopulation)*100;
  return percentage.toFixed(1);
}

let chinaPercentage2= percentageOfWorld2(1441);
let israelPercentage2= percentageOfWorld2(9.5);
let usaPercentage2= percentageOfWorld2(332);

console.log(chinaPercentage2);
console.log(israelPercentage2);
console.log(usaPercentage2);

