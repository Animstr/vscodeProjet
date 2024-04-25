"use strict";
/* let LeftBorderWidth ={
    width: 5000,
    length: 10000,
    height: 2500
};
console.log(LeftBorderWidth.height);
const arr = ["true", "false", "don't find"];
console.log(arr[2]); */
/* const result = confirm("what are you doing?");
/* const a = [1, 2, 3, 4];
b = a[0];
console.log(b) 
console.log(result); */
/* const result = +prompt('how old are you?', '');

console.log(result);
/* let result = []; */

/* result[0] = prompt('how  are you?', '');
result[1] = prompt('Are you her me?', '');
result[2] = prompt('why not?', '');
console.log(result); */ 
/* document.write(result); */
/* const category = 'painter';
console.log(`https://something.com/${category}/black/0.5`); */

/* let user = 'Daniil';

alert(`Hello, ${user}`) */

/* let isEnter = true,
    isExit = true; */

/* isEnter;
isExit; */
/* console.log(!isEnter && !isExit);

Array("hello");
console.log(array); */

/* const chicken = 38; */

/* if (chicken < 25) {
    console.log('Неверно');
} else if (chicken > 45){
    console.log('Неверно');
} else {
    console.log('вы прошли!');
}

(chicken === 38) ? console.log('вы прошли!') : console.log('Неверно'); */

/* const chicken = 38;

switch (chicken) {
    case 49:
        console.log('error');
        break;
    case 38:
        console.log('exelent!');
        break;
    default:
        console.log('try again');
        break;
} */
console.log(Nan || 2 || undefined);
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


console.log(hamburger === 3 && cola || fries === 3 && nuggets) */

let hamburger = '';
const fries = NaN;
const cola = 0;
const nuggets = 2;


consolr.log(hamburger || cola || fries === 3 || nuggets)

/* let i =69;

/* while (i >= 50) {
    console.log(i);
    i--;
} 

do{
    console.log(i);
    i = i * 2;
} while(i< 100000) */

/* const array = [3, 4, 5]; 

for(let i = 12; i > 0; i--) {
    if(i === array[0, 1, 2]) {
        continue;
    }
    console.log(i);
} */

let string = '';
const column = 10;

for( let i = 1; i < column; i++) {

    for( let j = 0; j < i; j++) {
        string += '*';
    }

    string += '\n';
}
console.log(string);