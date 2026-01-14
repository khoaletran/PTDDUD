// Coding challenge 1

const printForecast = arr => {
    const forecast = arr.map((temp,i) => `${temp}C in ${i + 1} days`).join(" ... ");
    console.log(`... ${forecast} ...`);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
