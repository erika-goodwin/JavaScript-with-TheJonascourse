/*
//L9
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN');

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

//L10
let firstName = 'Jonas'; // all need you to do is change this name
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Programer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

//L10 LECTURE: Values and Variables
let country = 'Japan';
let continent = 'Asia';
let population = '126.5'; //(M)

console.log('Country is ' + country);
console.log('Continent is ' + continent);
console.log('Population of ' + country + ' is ' + population);


//L12

//boolean, number, string
let javasriptIsFun = true;
console.log(javasriptIsFun);

console.log(typeof true);
console.log(typeof javasriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//re-define
javasriptIsFun = 'YES';
console.log(typeof javasriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

//null
console.log(typeof null);



//L12 LECTURE: Data Types
let isIsland = true;
let language

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



//L13

let age = 30; //assign
age = 31; //re-assign, mutate

let year;
year = 10;

const birthYear = 1991; //constatnt variable
//birthYear = 1990; //error

//constant job; //error - Missing initializer in const declaration


var job = 'programmer';
job = 'teacher';

//LECTURE: let, const and var
const language = 'Japanese';
let population = 126;
population = 110;

console.log('Language is ' + language);
console.log('population is ' + population);


// L14
//Mathmetic Operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3) //2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtman';
console.log(firstName + ' ' + lastName);

//Assignment Operator
let x = 10 + 5; //=15
x += 10; //x = X + 10 // =25
x *= 4; //x = x * 4 // =100
x++; //x = x + 1 //=101
x--; //x = x - 1 //=100

console.log(x); //100

// Comparison operator
console.log(ageJonas > ageSarah); //true
console.log(ageSarah >= 18); //true

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//LECTURE: Basic Operators
const japanPopulation = 126.5;
const worldPopulation = 75940;
//1
console.log('half of the Japan population is ' + japanPopulation / 2);
console.log('half of the world population is ' + worldPopulation / 2);
//2
console.log(japanPopulation + 1);
//3
const finlandPopulation = 6;
console.log(japanPopulation > finlandPopulation); //true
//4
const avaragePopulation = 33;
console.log(japanPopulation < avaragePopulation); //false
//5
console.log('Portugal is in Europe, and its ' + avaragePopulation / 3 + ' million people speak portuguese');


//15
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

//left-to-right
console.log(25 - 10 - 5); //10

//right-to-left
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

// Avarage
const avarageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, avarageAge); //46 19 55.5
*
const avarageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avarageAge); //46 19 32.5


// L16 Coding Challenge
//1
const markMass = 78; //kg
const markHeight = 1.69; //m

const johnMass = 92;
const johnHeight = 1.95;
//2
const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

console.log('Mark BMI: ' + markBmi + ', ' + 'Jphm BMI: ' + johnBmi);

//3
const markHigherBMI = markBmi > johnBmi;

console.log(markHigherBMI);



// L17
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`string
multipul
line`);

//LECTURE L17

let country = 'Japan';
let continent = 'Asia';
let population = '126.5'; //(M)
let language = 'Japanese';

const description = `${country} is in ${continent}, and its ${population} milion people speak ${language}`
console.log(description);


// L18
const age = 19;

if (age >= 18) {
    console.log('Sarah can start driving license 🏎'); //YES: excuted
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} yesrs.`);
}



const birthYear = 1991;

let country;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

//LECTURE L18
let country = 'Japan';
let population = '126.5'; //(M)

//1
if (population >= 23) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${23 - population} milion below average.`);
}

//L19

// const markMass = 78; //kg
// const markHeight = 1.69; //m

// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95; //kg
const markHeight = 1.88; //m

const johnMass = 85;
const johnHeight = 1.95;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

console.log('Mark BMI: ' + markBmi + ', ' + 'Jphm BMI: ' + johnBmi);

//1
if (markBmi >= johnBmi) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's`);
}
//2
if (markBmi >= johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})! `);
} else {
    console.log(`ohn's(${johnBmi}) BMI is higher than Mark's! (${markBmi})`);
}


//L20
//Type conversion
const inputYear = '1991';
console.log(inputYear + 18); //199118


console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); //2009

console.log(Number('Jpnas')); //Nan (Not an number)
console.log(typeof NaN); //invalid number

console.log(String(23), 23);

//Type coercion
console.log('I am ' + 23 + ' year old');
console.log('I am ' + '23' + ' year old'); //same
console.log('I am ' + String(23) + ' year old'); //same //proper way

console.log('23' - '10' - 3); //10 //convert Strings -> Number
console.log('23' + '10' + 3); //23103 //Number -> Strings (ONLY + operator)

console.log('23' * '2'); //26 //Strings -> Number
console.log('23' / '2'); //11.5 //Strings -> Number

console.log('23' > '18'); //True //Strings -> Number

//GUESS OUTPUT
let n = '1' + 1; //11
n = n - 1; //10
console.log(n);

//LECTURE L20
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //False
console.log(5 + 6 + '4' + 9 - 4 - 2); //5647 (1143)


// L21

console.log(Boolean(0)); //False
console.log(Boolean(undefined)); //False
console.log(Boolean('Jonas')); //Ture
console.log(Boolean({})); //True
console.log(Boolean('')); //false

const money = 0; //False
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should het a job!'); //This is it
}

let height; //False
if (height) {
    console.log('YAY! height is defined')
} else {
    console.log('Height is UNDEFINED') //This one
}

// 22

const age = 18;
if (age === 18) console.log('You just became an adult ;D (STRICT)');

if (age == 18) console.log('You just became an adult ;D (LOOSE)');

//const age = '18';
if (age === 18) console.log('You just became an adult ;D (STRICT)'); //NOT RESULT

if (age == 18) console.log('You just became an adult ;D (LOOSE)');



//PROMPT
const favorite = prompt("Whats your favorite number?");
console.log(favorite);
console.log(typeof favorite); //string

if (favorite == 23) {  //'23'== 23 //OK because of '=='
    console.log('Cool! 23 is an amaxing number!') //OK
}
//WE SHOULD USE '===' ALLWAYS
if (favorite === 23) {  //'23'=== 23 //DOESNT WORK
    console.log('Cool! 23 is an amaxing number!') //NO
}

//SO THIS IS CORRECTWAY
const favorite = Number(prompt("Whats your favorite number?"));
console.log(favorite);
console.log(typeof favorite); //NUMBER

if (favorite === 23) {  //23 === 23 //OK
    console.log('Cool! 23 is an amazing number!') //OK
} else if (favorite === 7) {
    console.log('7 is also an amazing number!')
} else if (favorite === 9) {
    console.log('Cool! 9 is a lucky number!')
} else {
    console.log('Number is not 23, 7 or 9.')
}

if (favorite !== 23) console.log('why not 23?');  //!==(not-eaqual-to) Strict, != loose

//9 -> Why not 23?
//23 -> Cool! 23 is an amazing number

//LECTURE
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}


// L24

Example from L23
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //AND operator
console.log(hasDriversLicense || hasGoodVision); //OR operator
console.log(!hasDriversLicense); //NOT operator

const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false; //C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

//LECTURE
const country = 'Japan';
const language = 'Japanese';
const population = 126.5;
const island = true;

if (language === 'English' && population < 50 && !island) {
    console.log(`You should live in ${Country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}


// L25
// Coding Challenge #3

//1

//TEST DATA1
const dScore1 = 96;
const dScore2 = 108;
const dScore3 = 89;

const kScore1 = 88;
const kScore2 = 91;
const kScore3 = 110;

// //TEST DATA2
// const dScore1 = 97;
// const dScore2 = 112;
// const dScore3 = 101;

// const kScore1 = 109;
// const kScore2 = 95;
// const kScore3 = 123;

//TEST DATA3
// const dScore1 = 97;
// const dScore2 = 112;
// const dScore3 = 101;

// const kScore1 = 109;
// const kScore2 = 95;
// const kScore3 = 106;


const dolphinsAvarage = (dScore1 + dScore2 + dScore3) / 3;
const koalasAvarage = (kScore1 + kScore2 + kScore3) / 3;

//2
if (dolphinsAvarage > koalasAvarage) {
    console.log(`Dolphins WON! (${dolphinsAvarage} > ${koalasAvarage})`);
} else if (dolphinsAvarage === koalasAvarage) {
    console.log(`DRAW! (${dolphinsAvarage} = ${koalasAvarage})`);
} else {
    console.log(`Koalas WON! (${dolphinsAvarage} < ${koalasAvarage})`);
}

//3

const dolphinsWin = dolphinsAvarage > koalasAvarage;
const koalasWin = dolphinsAvarage < koalasAvarage;
const drawScore = dolphinsAvarage === koalasAvarage;

const scoreMinimumDolphins = dolphinsAvarage >= 100;
const scoreMinimumKoalas = koalasAvarage >= 100;

if (dolphinsWin && scoreMinimumDolphins) {
    console.log(`Dolphins WON! (${dolphinsAvarage} > ${koalasAvarage})`);
} else if (koalasWin && scoreMinimumKoalas) {
    console.log(`Koalas WON! (${dolphinsAvarage} < ${koalasAvarage})`);
} else if (drawScore && scoreMinimumKoalas && scoreMinimumKoalas) {
    console.log(`DRAW! (${dolphinsAvarage} = ${koalasAvarage})`);
}


//ANSWER OF CHALLENGE
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolohins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreKoalas === scoreDolphins) {
    console.log('Both win the trophy!');
}

//BONUS 1&2
const scoreDolphins = (97 + 112 + 90) / 3;
const scoreKoalas = (109 + 95 + 95) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolohins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wubs the trophy 😢')
}

// L26



//Switch statement
const day = 'monday';
switch (day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare thepry videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code eample');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

//Same logic but by IF/ELSE
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare thepry videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code eample');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}


//L26 LECTURE
const language = 'japanese';

switch (language) {
    case 'chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}


//L27

//Expression
3 + 4
1991
true && false && !false

//Statement
if (23 > 10) {
    const str = '23 is bigger';
}


const me = 'Jonas';
console.log(`I'm &{2037 - 1991} years old ${me}`);

//L28

//Condiional Operator
const age = 15;
age >= 18 ? console.log('I would like to drink wine🍷') : console.log('I would like to drink water');

age >= 18 ? 'wine🍷' : 'water'; //this is (all operator = )expressions
//And Ecpression provide us Values
//So we can store the value into the valiable
const drink = age >= 18 ? 'wine🍷' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water';
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water'}`);


//L29 Coding Challenge#4
//1
const bill = 430;
const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.20
//2
console.log(`the bill value: ${bill}`, `the tip: ${tip}`, `the final value: ${bill + tip}`);


*/

// L32

