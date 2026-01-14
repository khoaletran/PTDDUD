// Coding Challenge #1 
const calcAverage = (a,b,c) => (a+b+c)/3
const checkWinner = (a,b) => 
        a >= 2 * b ? console.log(`a win (${a} vs ${b})`) 
        : console.log(`b win (${b} vs ${a})`)
//data 1
checkWinner(calcAverage(44,23,71),calcAverage(65,54,49));
//data 2
checkWinner(calcAverage(85,54,41),calcAverage(23,34,27));

// Coding Challenge #2

const calcTip = (bill) => 
    bill < 50 && bill>300 ? bill * 0.2 : bill * 0.15

let bills = [125,555,44];
let tips = [calcTip(125),calcTip(555),calcTip(44)];
let total = bills.map(bill => bill + calcTip(bill));

console.log(bills);
console.log(tips);
console.log(total);

// Coding Challenge #3

const human = (fullName, mass, height) => {
  return {
    fullName: fullName,
    mass: mass,
    height: height,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
};

let mark = human("Mark Miller",78,1.69);
let john = human("John",92,1.95);

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else {
  console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
}

// Coding Challenge #4

let bills_4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips_4 = [];
let totals_4 = [];

const calcTipsAndTotals = (bills,tips,totals) => {
    for(let i = 0;i<bills.length; i++){
        tips[i] = calcTip(bills[i]);
        totals[i] = tips[i] + bills[i];
    }  
};

calcTipsAndTotals(bills_4, tips_4, totals_4);

console.log(bills_4);
console.log(tips_4);
console.log(totals_4);
