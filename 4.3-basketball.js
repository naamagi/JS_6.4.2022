function calculateAverage(score1, score2, score3) {
  let avg = 0;
  avg += score1 + score2 + score3;
  avg = avg / 3;
  return avg;
}
let johnAvg = calculateAverage(89, 120, 103);
console.log(`John average: ${johnAvg}`);

let mikeAvg = calculateAverage(116, 94, 123);
console.log(`Mike average: ${mikeAvg}`);

function whichTeamWins(avgJohn, avgMike) {
  if (avgJohn > avgMike) {
    console.log(`The winner is team John with average of ${avgJohn}`);
    return avgJohn;
  } else if (avgJohn < avgMike) {
    console.log(`The winner is team Mike with average of ${avgMike}`);
    return avgMike;

  } else {
    console.log("Teko");
    return avgJohn;
  }
}
let winner = whichTeamWins(johnAvg, mikeAvg);

whichTeamWins(65, 75);
whichTeamWins(80, 50);
whichTeamWins(99, 99);
let maryAvg = calculateAverage(97, 134, 105);
console.log(`Mary average: ${maryAvg}`);

function whichTeamWinsOfThree(avgJohn, avgMike,avgMary) {
    if (((avgJohn >= avgMike)&&(avgJohn>avgMary))||((avgJohn > avgMike)&&(avgJohn>=avgMary))) {
      console.log(`The winner is team John with average of ${avgJohn}`);
      return avgJohn;
    } else  if (((avgMike >=avgJohn )&&(avgMike>avgMary)) ||((avgMike >avgJohn )&&(avgMike>=avgMary))){
      console.log(`The winner is team Mike with average of ${avgMike}`);
      return avgMike;
  
    } else  if (((avgMary >avgJohn )&&(avgMary>=avgMike))||((avgMary >=avgJohn )&&(avgMary>avgMike))) {
        console.log(`The winner is team Mary with average of ${avgMary}`);
      return avgMary;
    }
    else  if ((avgMary ===avgJohn )&&(avgMary===avgMike)) {
        console.log("Teko");
        return avgJohn;
      }
  }
  let avgOfWinnerOf3=whichTeamWinsOfThree(johnAvg, mikeAvg,maryAvg);

  whichTeamWinsOfThree(50, 50,60);
  whichTeamWinsOfThree(70, 32,32);
  whichTeamWinsOfThree(40, 41,40);
  whichTeamWinsOfThree(45, 45,45);
  whichTeamWinsOfThree(1, 2,3);
  whichTeamWinsOfThree(4, 6,5);
  whichTeamWinsOfThree(9, 8,7);