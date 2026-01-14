// Coding challenge 1
const game = { 
    team1: 'Bayern Munich', 
    team2: 'Borrussia Dortmund', 
    players: [ 
      [ 
        'Neuer', 
        'Pavard', 
        'Martinez', 
        'Alaba', 
        'Davies', 
        'Kimmich', 
        'Goretzka', 
        'Coman', 
        'Muller', 
        'Gnarby', 
        'Lewandowski', 
      ], 
      [ 
        'Burki', 
        'Schulz', 
        'Hummels', 
        'Akanji', 
        'Hakimi', 
        'Weigl', 
        'Witsel', 
        'Hazard', 
        'Brandt', 
        'Sancho', 
        'Gotze', 
      ], 
    ], 
    score: '4:0', 
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',  
    'Hummels'], 
    date: 'Nov 9th, 2037', 
    odds: { 
      team1: 1.33, 
      x: 3.25, 
      team2: 6.5, 
    }, 
  };

//1
const [players1,players2] = game.players; 
console.log("----------");
console.log(players1);
console.log(players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log("----------");
console.log(gk);
console.log(fieldPlayers);

//3 
const allPlayers = [...players1, ...players2];
console.log("----------");
console.log(allPlayers);

//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log("----------");
console.log(players1Final);

//5
const {team1,x : draw,team2} = game.odds;
console.log("----------");
console.log(team1);
console.log(draw);
console.log(team2);

//6

const printGoals = (...players) => {
    console.log(players); 
    console.log(`Total goals: ${players.length}`);
}
console.log("----------");
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7
console.log("----------");
game.odds.team1 < game.odds.team2 && console.log('Team 1 is more likely to win');
game.odds.team1 > game.odds.team2 && console.log('Team 2 is more likely to win');

// Coding challenge 2

//1
console.log("----------");
const scored = game.scored.map((name,i) => `Goal ${i+1}: ${name}`);
console.log(scored);

//2
console.log("----------");
const avgOdd = Object.values(game.odds).reduce((a,b) => a+b, 0) / Object.values(game.odds).length;
console.log(avgOdd);

//3
console.log("----------");
console.log(`Odd of ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of $draw: ${game.odds.x}`);
console.log(`Odd of ${game.team2}: ${game.odds.team2}`);

//4 
console.log("----------");
const scorers = {};

for (const player of game.scored) {
    scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}

console.log(scorers);

// Coding challenge 3

const gameEvents = new Map([ 
[17, '⚽ GOAL'], 
[36, '🔁 Substitution'], 
[47, '⚽ GOAL'], 
[61, '🔁 Substitution'], 
[64, '🔶 Yellow card'], 
[69, '🔴 Red card'], 
[70, '🔁 Substitution'], 
[72, '🔁 Substitution'], 
[76, '⚽ GOAL'], 
[80, '⚽ GOAL'], 
[92, '🔶 Yellow card'], 
]); 

//1 
console.log("----------");
const event = [...new Set(gameEvents.values())];

//2
console.log("----------");
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log("----------");
const avgEv = 90 / gameEvents.size;
console.log("An event happened, on average, every "+ avgEv + " minutes: ");

//4
console.log("----------");
for( const [minute, event] of gameEvents ){
    minute < 45 ? console.log("[FIRST HALF] "+ [minute, event]) : console.log("[SECOND HALF] "+ [minute, event])
}

// Coding challenge 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').textContent = 'Convert';

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;

    const rows = text.split('\n');

    for (const [index, row] of rows.entries()) {
        const [first, second] = row
            .toLowerCase()
            .trim()
            .split('_');

        if (!second) continue;

        const camelCase =
            first + second.replace(second[0], second[0].toUpperCase());

        console.log(
            camelCase.padEnd(20, ' ') + '✅'.repeat(index + 1)
        );
    }
});