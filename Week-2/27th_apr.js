'use strict'
//Activation of strict mode
// let hasdriversLicense = false;
// const passTest = true;

// if (passTest) hasdriversLicense = true;
// if (hasdriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// Coding Challenge #1

/*
The two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs 
the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Tell draws.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// //console.log(calcAverage(3, 4, 5));

// //Test 1 
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphin wins with a score of (${avgDolhins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas wins with a score of (${avgKoalas} vs ${avgDolhins})`);
//     } else {
//         console.log("Its a Draw")
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// //Test 2
// let scoreDolphinss = calcAverage(85, 54, 41);
// let scoreKoalass = calcAverage(23, 34, 27);
// console.log(scoreDolphinss, scoreKoalass);
// checkWinner(scoreDolphinss, scoreKoalass);

//Introduction to Objects
const Vivek = [
    'Vivek',
    'Patil',
    '2022-2003',
    'Teacher',
    454545, ['Karamjeet', 'Kalpesh', 'Rishikesh']
];
const vivek = {
    firstname: 'vivek',
    lastname: 'Patil',
    age: '2022-2003',
    job: 'Teacher',
    friends: ['karamjeet', 'kalpesh', 'Rishikesh']
};
//dot vs bracket notation

//console.log(vivek['lastname']);

const nameKey = 'name';
console.log(vivek['first' + nameKey])
    // console.log(vivek['last' + nameKey])

//console.log(jonas.last + nameKey) error

// const interestedIn = prompt('What do you want to know about vivek? Choose between firstname, lastname, age, job, friends');
// if (vivek[interestedIn]) {
//     console.log(vivek[interestedIn]);
// } else {
//     console.log("Wrong Input , What do you want to know about vivek? Choose between firstname, lastname, age, job, friends")
// }