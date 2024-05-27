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
/* console.log(Nan || 2 || undefined);
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5); */

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


console.log(hamburger === 3 && cola || fries === 3 && nuggets) */

/* let hamburger = '';
const fries = NaN;
const cola = 0;
const nuggets = 2;


consolr.log(hamburger || cola || fries === 3 || nuggets) */

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

/* let string = '';
const column = 10;

for( let i = 1; i < column; i++) {

    for( let j = 0; j < i; j++) {
        string += '*';
    }

    string += '\n';
}
console.log(string); */

/* let multiplication;
let sum;

function firstTest(a, b) {

    multiplication = a * b;
    sum = a + b;
    return a - b;

}

firstTest(2, 7);

console.log(multiplication);
console.log(firstTest(6, 10));

let firstTest = (a, b) => {
    let c = 2 * a - b;
    return c;

};

console.log(firstTest(3, 5)) */

/* function exchsngeMoney (ruMoney, value) {
    return ruMoney / value;
}

let euroExchange = exchsngeMoney(500, 90) + ' eur';

console.log(euroExchange); */

/* const textPropertyTest = 'Math is not a problem';

console.log(textPropertyTest.length);

console.log(textPropertyTest.toLowerCase()); */

/* const textMethodsTest = 'My name is Daniil';

console.log(textMethodsTest.indexOf('M'));
console.log(textMethodsTest.slice(3, 7));
console.log(textMethodsTest.substring(11));
console.log(textMethodsTest.substr(3, 10)); */

/* const num = 13.69;

console.log(Math.round(num));

const test = "185.67px";

console.log(parseInt(test));
console.log(parseFloat(test)); */

/* function ucFirst (str) {
    return str[0].toUpperCase() + str.slice(1);
} */

/* console.log(ucFirst('daniil'));

function antiSpam (nikname) {
    nikname = nikname.toLowerCase();

    if (nikname.includes('viagra') || nikname.includes('xxx')) {
        console.log( `${nikname} === true`);
    } else {
        console.log(`${nikname} === falls`);
    };
}

console.log(antiSpam('XxX sex Toys'));

let name = 'hello';

console.log(name.toUpperCase()); */

/* const objectFirstLesson = {
    date: '05.05.2024',
    name: 'Daniil',
    age: 21,
    gender: 'male',
    hobbies: {
        first: 'IT',
        second: 'Video games',
        third: 'Watching YouTube'
    }
}

let {first, second, third} = objectFirstLesson.hobbies;

console.log(first)

console.log(Object.keys(objectFirstLesson).length);

let counter = 0;

for (let key in objectFirstLesson) {

    if (typeof(objectFirstLesson[key]) === 'object') {

        for (let i in objectFirstLesson[key]) {
            console.log(`Подсвойство ${i} имеет значение ${objectFirstLesson[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${objectFirstLesson[key]}`);
        counter++;
    }
}
console.log(counter);
delete objectFirstLesson.date;

console.log(objectFirstLesson); */

/* const arr = [1, 5, 28, 32, 75];

arr.forEach(function (value, i, arr) {
    console.log(`На ${i} месте находится элемент ${value} в массиве ${arr}`);
}); */

/* const red = prompt('Назови 3 любые книги через запятую', '');
let arr = red.split(', ');
let str = arr.join(';');
console.log(str); */

/* let obj = { 
    a:'we',
    b:'qw'
};

/* let objCopy = {...obj, c:'hello'}; */ 

/* console.log(obj);
console.log(objCopy); 

 function copy(mainObj) {
    let objCopy = {};

    let key
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

let newObjOne = copy(obj); 

newObjOne.b = 10;

let newObjTwo = Object.assign({}, obj);
newObjTwo.b = 'fuck';

 console.log(newObjOne);
 console.log(obj);
 console.log(newObjTwo); */
/* 
const prototypeObject = {
    private: true,
    hsv:'(92, 34, 10)',
};

const secondObject = Object.create(prototypeObject);

/* Object.setPrototypeOf(secondObject, prototypeObject); 

console.log(secondObject.hsv); */

/* const arr = [58, 32, 1, 24, 49, 21],
    sorted = arr.sort(sotingMassive);

function sotingMassive(a, b) {
    return a - b;
}

console.log(sorted); */

/* let arr = [1, 2, 3];

arr.forEach(function(value, i, mass) {
    console.log(`элемент ${value} под номером ${i} в массиве из данных:${mass}`);
});

console.log(typeof([] + false)); */

/*  const webCallback = document.getElementsByTagName('button'); */

/*console.log(webCallback[0]);

const anotherWebCallback = [1, 2, 3];

anotherWebCallback.forEach(item => {
    console.log(item);
});
console.log(anotherWebCallback); */

/* const crcl = document.querySelector('.circle');

webCallback[0].style.width = '100px';

const div = document.createElement('div');

div.style.color = 'black';

div.after(crcl);

document.querySelectorAll('button')[1].innerHTML = '<h1>Hello</h1>' */

/* const btn = document.querySelector('button'),
    link = document.querySelector('a');
let i = 0;

 function btnEvent(e) {
    console.log(e.target);
    i++;
    if (i == 2) {
        btn.removeEventListener('mouseenter', btnEvent);
    }
}

btn.addEventListener('mouseenter', btnEvent);
link.addEventListener('click', e => {
    e.preventDefault();

    e.HTML = '<a hover="https://github.com/Animstr/vscodeProjet"></a>';
}) */

// reqursion

/* function pow(x, n) {
    if(n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
};
console.log(pow(2, 5)); */

let students = {
    js: [
        {
            name: 'John',
            progress: 100
        }, {
            name: 'Ivan',
            progress: 60
        }
    ],
    html: {
        basic:[
            {
                name: 'Peter',
                progress: 20
            }, {
                name: 'Ann',
                progress: 18
            }
        ],
        pro: [{
            name:'Sam',
            progress: 10
        }],
        ultra: {
            highQualety: [{
                name: 'Ann',
                progress: 99},
                {name: 'Ann',
                progress: 28}
            ],
            lowQualety: [
                {name: 'Ann',
                progress: 12},
                {name: 'Ann',
                progress: 0}
            ]
        }
    }
};

/* function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for ( let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for ( let objectCourse of Object.values(course)) {
                students += objectCourse.length;
                for (let k = 0; k < objectCourse.length; k++) {
                    total += objectCourse[k].progress; 
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students)); */

function getTotalProgressByRecusion(data) {
    if (Array.isArray(data)) {
        let total = 0;

            for (let i = 0; i < data.length; i++) {
                total += data[i].progress;
            }

        return [total, data.length];    
    } else {
        let total = [0, 0];

        for (let objectData of Object.values(data)) {
            const objectDataArr = getTotalProgressByRecusion(objectData);
            total[0] += objectDataArr[0];
            total[1] += objectDataArr[1];
        }

        return total;
    }
};

const result = getTotalProgressByRecusion(students);

console.log(result[0]/result[1]);