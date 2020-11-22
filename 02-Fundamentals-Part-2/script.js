'use strict';

/*
//L32
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');


// const interface = 'audio';
// const private = 534;
// const if = 23;


//L33

function logger() {
    console.log('My name is Jonas'); //want to use this line many times
}

//calling, running, or invorking function
logger();
logger();
logger();



function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

//calling, running, or invorking function
fruitProcessor(5, 0); //for '5 0' on the console

const appleJuice = fruitProcessor(5, 0); //for '5 0' on the console
console.log(appleJuice); //for 'Juice with 5 apples and 0 oranges' on the console

console.log(fruitProcessor(5, 0)); //for '5 0' & 'Juice with 5 apples and 0 oranges' on the console

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//L23 LECTURE
function describeCountry(country, population, capitalCity) {
    const statement = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return statement;
}

console.log(describeCountry('Finland', 6, 'Helsinki'));
console.log(describeCountry('Japan', 126.5, 'Tokyo'));
console.log(describeCountry('Canada', 37.59, 'Ottawa'));


// L34

//function declaration
function calcaAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcaAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

//L34 LECTURE
//function declaration
function percentagaeOfWorld1(population) {
    return population / 7900 * 100;
}

const chinaPercentage1 = percentagaeOfWorld1(1441);
const japanPercentage1 = percentagaeOfWorld1(126.5);
const canadaPercentage1 = percentagaeOfWorld1(37.59);
console.log(chinaPercentage1, japanPercentage1, canadaPercentage1);

//function expression
const percentagaeOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const chinaPercentag2 = percentagaeOfWorld2(1441);
const japanPercentage2 = percentagaeOfWorld2(126.5);
const canadaPercentage2 = percentagaeOfWorld2(37.59);
console.log(chinaPercentag2, japanPercentage2, canadaPercentage2);

// L35

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
//arrow function
// birthYear => 2037 - birthYear;
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

//How many year left?
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years. `
}

// console.log(yearUntilRetirement(1991));
console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1994, 'Erika'));
console.log(yearUntilRetirement(1980, 'Bob'));

//L35 LECTURE

const percentagaeOfWorld3 = population => population / 7900 * 100;

const chinaPercentag3 = percentagaeOfWorld3(1441);
const japanPercentage3 = percentagaeOfWorld3(126.5);
const canadaPercentage3 = percentagaeOfWorld3(37.59);
console.log(chinaPercentag3, japanPercentage3, canadaPercentage3);


// L36

//before processe the fruits, we have to CUT it
function cutFruitPieces(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} peices of apples and ${orangePieces} peices of oranges`;
    return juice;
};

console.log(fruitProcessor(2, 3));

// L36 LECTURE
// Functin Declaration
function poplulationCountry1(poplulationInput1) {
    return poplulationInput1 / 75940 * 100;
}
function descrivePopulation1(country, population) {
    const persentageOfWorld1 = poplulationCountry1(population);

    return `${country} has ${population} milion people, which is about ${persentageOfWorld1} % of the world.`
};
console.log(descrivePopulation1('China', 1441));
console.log(descrivePopulation1('Japan', 126.5));
console.log(descrivePopulation1('Canada', 37.59));




// Functin Expression
const poplulationCountry2 = function (poplulationInput2) {
    return poplulationInput2 / 75940 * 100;
}
const descrivePopulation2 = function (country, population) {
    const persentageOfWorld2 = poplulationCountry2(population);

    return `${country} has ${population} milion people, which is about ${persentageOfWorld2} % of the world.`;
}
console.log(descrivePopulation2('China', 1441));
console.log(descrivePopulation2('Japan', 126.5));
console.log(descrivePopulation2('Canada', 37.59));


//Arrow Function
const poplulationCountry3 = (poplulationInput3) => {
    return poplulationInput3 / 75940 * 100;
};
const descrivePopulation3 = (country, population) => {
    const persentageOfWorld3 = poplulationCountry3(population);

    return `${country} has ${population} milion people, which is about ${persentageOfWorld3} % of the world.`
};
console.log(descrivePopulation3('China', 1441));
console.log(descrivePopulation3('Japan', 126.5));
console.log(descrivePopulation3('Canada', 37.59));


//L37


//How many year left?
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired !`);
        return 'Retired';
    }
}

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1994, 'Erika'));
console.log(yearUntilRetirement(1970, 'Bob'));


// L38 CODING CHALLENGE


const calcAvarage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAvarage(44, 23, 71);
let scoreKoalas = calcAvarage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win ( ${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win ( ${avgKoalas} vs ${avgDolphins})`;
    } else {
        return `No one win 😇`;
    };
}
console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));


scoreDolphins = calcAvarage(85, 54, 41);
scoreKoalas = calcAvarage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));



// //**class coding by teacher**
// const calcAvarage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAvarage(3, 4, 5));

// //TEST 1
// let scoreDolphins = calcAvarage(44, 23, 71);  //want to re-assign for TEST 2
// let scoreKoalas = calcAvarage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkwinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         return `Dolphins win ( ${avgDolphins} vs ${avgKoalas})`;
//     } else if (avgKoalas >= avgDolphins * 2) {
//         return `Koalas win ( ${avgKoalas} vs ${avgDolphins})`;
//     } else {
//         return `No one win 😇`;
//     };
// }

// console.log(checkwinner(scoreDolphins, scoreKoalas));


// //TEST 2
// scoreDolphins = calcAvarage(85, 54, 41);
// scoreKoalas = calcAvarage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// console.log(checkwinner(scoreDolphins, scoreKoalas));



// L39

const friend1 = 'Michael';
const frined2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]); //it meams Michael
console.log(friends[2]); //it meams Peter

console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // peter

friends[2] = 'Jay' //change Peter -> Jay
console.log(friends);
// friends = ['Bob', 'Alice'];  //Error: Assignment to constant variable // You cannot reassign entire array

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear
};
const years1 = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years1)); //Nan

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[years1.length - 1])];
console.log(ages);

//LECTURE
//1
const populations = [328.2, 1441, 126.5, 37.59];
//2
console.log(populations.length = 4);
//3
const percentagaeOfWorld2 = function (population) {
    return population / 7900 * 100;
}
const percentages = [
    percentagaeOfWorld2(populations[0]),
    percentagaeOfWorld2(populations[1]),
    percentagaeOfWorld2(populations[2]),
    percentagaeOfWorld2(populations[3]),
];
console.log(percentages);


// L40
const friends = ['Michael', 'Steven', 'Peter'];

//ADD ELEMENT
// friends.push('Jay'); //= function <- can return something
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//REMOVE ELEMENT
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift() //First
console.log(friends);


console.log(friends.indexOf('Steven'));  //1
console.log(friends.indexOf('Bob'));  //-1

//INCLUDS
console.log(friends.includes('Steven'));  //True
console.log(friends.includes('Bob'));  //False

friends.push(23);
console.log(friends.includes('23')); //False because 23(stlings) =/ 23(number)

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter.');
}
if (friends.includes('Steven')) {
    console.log('You have a friend called Steven.');
}


// L41 LECTURE
//1
const neibours = ['Korian', 'China', 'Rossia'];
//2
neibours.push('Utopia');
console.log(neibours);
//3
neibours.pop();
console.log(neibours);
//4
if (neibours.includes('Germany')) {

} else {
    console.log('Probably not a central European country :D')
}
//5
if (neibours.includes('Korian')) {
    neibours[neibours.indexOf('Korian')] = 'Noth Korea';
    console.log(neibours);
}



// //L41  CODING CALLENGE #2
// //1
// const calcTip = function (value) {
//     if (value >= 50 && value <= 300) {
//         const price = value * 1.15;
//         const tips = value * 0.15;
//         console.log(price, tips);
//         return tips;
//     } else {
//         const price = value * 1.20;
//         const tips = value * 0.20;
//         console.log(price, tips);
//         return tips;
//     }
// }
// calcTip(100);
// //2
// const bills = [125, 555, 44];
// //3
// console.log(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// //4
// const calcPrice = function (value) {
//     if (value >= 50 && value <= 300) {
//         const price = value * 1.15;
//         return price;
//     } else {
//         const price = value * 1.20;
//         return price;
//     }
// }
// console.log(calcPrice(bills[0]), calcPrice(bills[1]), calcPrice(bills[2]));


//Teacher Answer
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


// L42
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];
//Want to give NAME for each array
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
};

//LECTURE

const myCountry = {
    country: 'Japan',
    capital: 'Tokyo',
    language: 'Japanese',
    population: 126.5,
    neibours: ['China', 'Korea', 'Rossia']
};




*/

// L43
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']); //can put any expression in the bracket
//[can put any expression in]
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
//CANNOT
// console.log(jonas.'last' + nameKey);//Unexpected string error



const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and freinds'); //-> Return string
console.log(interestedIn);
console.log(jonas.interestedIn); //undefined
console.log(jonas[interestedIn]); //teacher

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and freinds');
};



jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);


// CHALLENGE
// Jonas has 3 friends, and his best friend is called Micheal. 

//MY ATTEMPT//
// console.log(`${jonas.firstName} has ${jonas[friends.length]} friends, and his best friend is called ${jonas[friends[0]]}.`);

//TEACHER ANNSER//
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

//LECTURE
//1
const myCountry = {
    country: 'Japan',
    capital: 'Tokyo',
    language: 'Japanese',
    population: 126.5,
    neibours: ['China', 'Korea', 'Rossia']
};

console.log(`${myCountry.firstName} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neibours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

//2
myCountry.