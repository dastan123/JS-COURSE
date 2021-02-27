"use strict";
 /* global alert */
// var, let, const
// Strings, Numbers, Boolean, null, undefined, Symbol

// const name = "John";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof z);


// const name = "Jogn";
// const age = 30;
// //Concatenation
// console.log('My name is ' + name + ' and i am ' + age);
// // Template String
// const hello = `My name is ${name} and i am ${age}`;
// console.log (hello);


// const  s = 'techology, computers, it, code';
// console.log(s.split(','));


// Arrays - variables that hold multiple values
// const numbers = new Array(1,2,3,4,5);

// const hello = new Array(1,2,3,4,5);
// const fruits = ['apples', 'oranges', 'pears'];

// fruits[5] ='grapes';

// fruits.push('mangas');

// fruits.unshift('strawberries');//puts in the begining

// fruits.pop();

// console.log(Array.isArray()); //checking array

// console.log(fruits.indexOf('grapes'));

// console.log(fruits);

// const person = {
//       firstName: 'John',
//       lastName: 'Doe',
//       age: 30,
//       hobbies: ['music', 'movies', 'sports'],
//       address: {
//             street: '50 main st',
//             city: 'Boston',
//             state: 'Ma'
//       }
// };

// console.log(person.firstName, person.lastName, person.hobbies[1]), person.address[1];

// let hell;
// console.log(hell);

// const person = {
//       hobbies:['music', 'movies']
// };

// console.log(person.hobbies[1]);

// let arr = ['hello', 'grapes', 'mandalini', 6, {}, []];

// console.log(arr[1]);

// alert('hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");

// console.log(answer + 5);

// const answers = [];

//   answers[0] = prompt('Как ваше имя?', '');
//   answers[1] = prompt('Как ваше фамилия?', '');
//   answers[2] = prompt('Сколько вам лет?', '');

//  console.log(answers);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Hello`, ${user});

// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decro = 10;

// incr++; + 1 to number
// decro--; - 1 to number

// console.log(++incr);
// console.log(--decro);

// console.log(5%2);
// console.log(2*4 != '8');

// const isChecked = false,
//       isClosed = false;

// console.log(isChecked || !isClosed); 

// let incr = 10 == 50;

// ++incr;
// console.log(incr);

// if (4 == 4) {
//       console.log('ok!');
// } else {
//       console.log('error');
// }

// const num = 50;

// if (num < 49) {
//       console.log('Error');
// } else if(num > 100) {
//      console.log('toomuch');
// } else {
//       console.log('ok!');
// }

// const num = 50;

// (num === 50) ? console.log('ok') : console.log('not right');

// const num = '50';

// switch (num) {
//       case 49: 
//             console.log('NO');
//             break;
//       case 100:
//             console.log('NOOOO');
//             break;
//       case '50': 
//       console.log('Yes');
//       break;
//       default:
//             console.log('something is not right');
//             break;
// 

let num = 50;

// while (num <= 55) {
//       console.log(num);
//       num++;
// }

// do {
//       console.log(num);
//       num++;
// }
// while (num <= 55);

for (let i = 1; i < 5; i++) {
      if (i === 3) {
            continue;
      }
      console.log(i);
} 