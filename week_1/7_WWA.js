// Coding challenge 1

const checkDogs = (dogsJulia, dogsKate) => {
    const dogsJulia_v1 = dogsJulia.slice(1,-2);
    const allDogs = [...dogsJulia_v1,...dogsKate];
    allDogs.forEach((age, i) => { age < 3
    ? console.log(`Dog number ${i + 1} is still a puppy`)
    : console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    });
}

checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
console.log("----------");
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);

// Coding challenge 2, 3

const calcAverageHumanAge = (dogs) =>{
    const humanage = dogs.map(age =>  age < 3 ? age = 2 * age : age = 16 + age * 2);
    console.log(dogs);
    console.log(humanage);

    const humanage18 = humanage.filter(age => age > 17);
    console.log(humanage18);

    const avg = humanage18.reduce((a,b) => a+b, 0) / humanage18.length;
    console.log(avg);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Coding challenge 4
const dogs = [ 
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, 
{ weight: 8, curFood: 200, owners: ['Matilda'] }, 
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, 
{ weight: 32, curFood: 340, owners: ['Michael'] }, 
]; 

//1
for(const dog of dogs){
    dog.recommendedFood = dog.weight ** 0.75 * 28;
}
console.log(dogs);

//2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

if (sarahDog.curFood > sarahDog.recommendedFood) {
    console.log("Chó của Sarah ăn quá nhiều");
} else if (sarahDog.curFood < sarahDog.recommendedFood) {
    console.log("Chó của Sarah ăn quá ít");
} else {
    console.log("Chó của Sarah ăn đúng lượng khuyến nghị");
}

const checkFood = dog =>  {
    curFood > recommendedFood * 0.9 && curFood < recommendedFood * 1.1 ? true : false
}

//3
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

for (const dog of dogs ){
    dog.curFood < dog.recommendedFood ? ownersEatTooLittle.push(...dog.owners) : ownersEatTooMuch.push(...dog.owners)
}

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

