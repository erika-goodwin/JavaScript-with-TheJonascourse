// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1991));

//PROBLEM 1:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one dat, calculate the temprerature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is themp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temp?
// - What's a sensor error? and What we do?

// 2) Breaking up into sub-problems
// -How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue; // for skipping 'error'
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// // calcTempAmplitude([3, 7, 4, 23]);
// const aplitude = calcTempAmplitude(temperatures);
// console.log(aplitude);
// max = 3
// max = 7

//PROLEM 2:
// Function should now revieve 2 arrays of temps

//1) Understanding the problem
// - with 2 arrays, should we implement functionality twice? - A: no, just marge two arrays.

//2) Breaking up into sub-problems
// - Marge 2 arrays

/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; // for skipping 'error'
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitudeNew([3, 7, 4, 23]);
const aplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(aplitudeNew);

//L61 Debugging
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    //C) FIX THE BUG
    // value: Number(prompt('Degrees celsois')),
    value: 10,
  };
  //B) FIND A BUG
  console.log(measurement.value); //CHECK1
  console.log(measurement); //CHECK2
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) IDENTIFY
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  // let max = temps[0];
  // let min = temps[0];

  //MADE A BUG HERE
  // debugger;  //for Sources's Brealpoint
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; // for skipping 'error'
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitudeBug([3, 7, 4, 23]);
const aplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//A) IDENTIFY
console.log(aplitudeBug);


//L62 Coding Challenege

//MY ATTAMPT

// 1) Understanding the problem
// - how to know how many numbers are in the array?

// 2) Breaking up into sub-problems
// - use a loop until the last
// - out pu the phrase ' XX degree in XX day'
// - add the phrase in another array ?

const printForecast = function (temp) {
  const tempArray = temp;
  // const finalArray = [];

  // for (let i = 0; i < tempArray.length; i++) {
  //   finalArray.push(`${tempArray[i]} ℃ in (i+1) days...`);
  // }

  let i = 0;
  while (i < tempArray.length) {
    console.log(`${tempArray[i]} ℃ in ${i + 1} days...`);
    i++;
  }
};
// const finalAnswer = printForecast([17, 21, 23]);
const finalAnswer = printForecast([12, 5, -5, 0, 4]);
console.log(finalAnswer);
*/

//TEACHER ANSWER
// 1) Understanding the problem
// - Array transformed to strings, separated by ...
// - What is the X day?
// A Index + 1

// 2) Breaking up into sub-problems
// - transform arraty to string
// - transform each element to string with ℃
// - strings needs to contain day (index + 1)
// - and ... between elements and start and end of string
// - log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
//sumilation
console.log(`... ${data1[0]} ℃ ... ${data1[1]} ℃ ... ${data1[2]} ℃ ... `);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
