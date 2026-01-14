// Coding challenge 1 +
function calculateBMI(markMass, markHeight, johnMass, johnHeight) {
  const BMICal = (mass, height) => mass / (height * height);

  let markBMI = BMICal(markMass, markHeight);
  let johnBMI = BMICal(johnMass, johnHeight);

  let markHigherBMI = markBMI > johnBMI;

  console.log("Mark BMI:", markBMI);
  console.log("John BMI:", johnBMI);
  console.log("Mark has higher BMI?", markHigherBMI);

  if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
  } else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
  }
}

calculateBMI(78, 1.69, 92, 1.95);
calculateBMI(95, 1.88, 85, 1.76);



// Coding challenge 3 - Data 1
let dolphinsAvg = (96 + 108 + 89) / 3;
let koalasAvg = (88 + 91 + 110) / 3;

if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins win the trophy");
} else if (koalasAvg > dolphinsAvg) {
  console.log("Koalas win the trophy");
} else {
  console.log("It's a draw");
}

// Coding challenge 3 - Bonus 1
dolphinsAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 123) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("Dolphins win the trophy");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log("Koalas win the trophy");
} else {
  console.log("No team wins the trophy");
}

// Coding challenge 3 - Bonus 2
dolphinsAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 106) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("Dolphins win the trophy");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log("Koalas win the trophy");
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
  console.log("It's a draw");
} else {
  console.log("No team wins the trophy");
}

// Coding challenge 3 - Bonus 2
dolphinsAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 106) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("Dolphins win the trophy");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log("Koalas win the trophy");
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
  console.log("It's a draw");
} else {
  console.log("No team wins the trophy");
}

// Coding challenge 4

function calcTip(bill) {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}

calcTip(275);
calcTip(40);
calcTip(430);
