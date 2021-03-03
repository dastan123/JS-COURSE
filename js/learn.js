'use strict';
/* jshint node: true */
/* jshint browser: true */
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

// const num = 150;

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
// }



// let num = 20;

// function showFirstMessage(text) {
//       console.log(text);
//       let num = 210;
//       console.log(num);
// }

// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
//       return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//       let num = 50;
//       return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const foo = function() {
//      console.log("Hello");
// };

// foo();

// const calc = (a, b) => {
//       console.log('1');
//       return(a + b);
// } ;

// calc();


//  const str = 'test';
//  const arr = [1, 2, 4];

//  console.log(str.toUpperCase());
//  console.log(str.toLowerCase());

//  const fruit = "Hello Some fruit";

//  console.log(fruit.indexOf("fruit"));

// const logg = 'Hello World adsfasfasdf';

// console.log(logg.substr(12));

// console.log(logg.substring(19, 4));

// const num = '12.4';
// console.log(Math.round(num));

// const test = '12px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// function first() {
//       // Do something 
//       setTimeout(function() {
//             console.log(1);
//       }, 500);
// }

// function second() {
//       console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//              setTimeout(function() {
//              console.log(`i learn ${lang}`);
//        }, 500);
//       callback();
// }

// function done() {
//       console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done;)

const options = {
      name: 'test',
      width: 1024,
      height: 1024,
      colors: {
            border: 'black',
            bg: 'red'
      }
};

console.log(Object.keys(options).length);
// console.log(options["colors"]["bg"]);

delete options.name;

console.log(options);

for (let key in options) {
      if (typeof(options[key] === 'object')) {
            for (let i in options[key]) {
                  console.log(`Properties ${i} has value ${options[key]}`);
            }
      } else {
            console.log(`Properties ${key} has value ${options[key]}`);
      }
}

// const soldier = {
//       name: 'Jonatan',
//       secondname: 'lo',
//       muscles: 'good',
//       birthday: '2 september',
//       age: {
//             hello: 'hi',
//             priver: 'prive'
//       }
// }

// for (let key in soldier) {
//       if (typeof(soldier[key]) === 'object') 
//       for(let i in soldier[key]){
//             console.log(`Personal information ${i}: has value ${soldier[key}`);
//         } else {
//             console.log(`Personal information ${key} has value ${soldier[key]}`);
//       }
//       }
      
// let num = 50;

// // while (num <= 55) {
// //       console.log(num);
// //       num++;
// // }

// // do {
// //       console.log(num);
// //       num++;
// // }
// // while (num <= 55);

// for (let i = 1; i < 5; i++) {
//       if (i === 3) {
//             continue;
//       }
//       console.log(i);
// } 
// var x = 0;
// var z = 0;
// labelCancelLoops: while (true) {
//   console.log("Внешний цикл: " + x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Внутренний цикл: " + z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }
// const options = {
//       name: 'test',
//       width: 1024,
//       height: 1024,
//       colors: {
//             border: 'black',
//             bg: 'red'
//       }
// };

// console.log(Object.keys(options).length);
// // console.log(options["colors"]["border"]);

// // delete options.name;

// // console.log(options);

// for (let key in options) {
//       if (typeof(options[key] === 'object')) {
//             for (let i in options[key]) {
//                   console.log(`Properties ${i} has value ${options[key][i]}`);
//             }
//       } else {
//             console.log(`Properties ${key} has value ${options[key]}`);
//       }
// }

// let whatCars;


// function start(whatCars) {
//       for (let i = 0; i < 1; i++) {
//             whatCars = +prompt('how many cars', '');
//       } while (whatCars == '' || whatCars == null || whatCars > 50) {
//             whatCars = +prompt('how many cars', '');
//       }
// }
// start();


// let obj = {
//       sayName: function() {
//             let num = 20 ;
//             console.log('hi my name is function');
//             if (num == 20) {
//                   console.log('fine');
//             } else {
//                   console.log('bad');
//             }
//             return(num);

//       },
      
// };

//  obj.sayName();
//  for (let key in obj) {
//  if (typeof(obj[key] === 'object')) {
//              console.log('fail');
//        } if (obj > 5) {
//           console.log('interesting');
//        }
//  }



// console.log(Object.keys(cars).length);
// for (let key in cars) {
//       console.log(`Properties of my car is ${key} has machine ${cars[key]}`);
// }

// const arr = [1, 2, 3, 4, 5, 7];

// // arr.push(10);
// // console.log(arr);

// // for (let i = 5; i < arr.length; i++) {
// //       console.log(arr[i]);
// // }

// for(let value of arr) {
//       console.log(value);
// }

// const cars = {
//       name: 'lambo',
//       familia: 'gini',
//       rost: 5.1,        
// };
// for (let key in cars) {
//       if (typeof(cars[key] === 'object'))
//       console.log(`the name of this car is ${key} and the value is ${cars[key]}`);
// }

// const arr = [1, 'hrllodfg', 3, 4, 5, 7];

// // arr.push(10);
// // console.log(arr);

// // for (let i = 5; i < arr.length; i++) {
// //       console.log(arr[i]);
// // }

// for(let value of arr) {
//       console.log(value);
// }

//  const arr = [1, 2, 343, 24, 55, 7];
// arr.sort(compareNum);

// function compareNum(a, b) {
//       return a - b;
// }
//  arr[99] = 0;
// console.log(arr.length);

// console.log(arr);

//  arr.forEach(function(numbers, i, arr) {
//            console.log(`${i}: ${numbers} внутри массива ${arr[2]}`);
//        });

// const str = prompt('', '');
// const products = str.split(', ');
// // console.log(products);
// products.sort();
// console.log(products.join('-'));

// const arr = [1, 2, 4, 5]
// arr.forEach(function( number, ){
//            console.log
//            console.log(`index number ${number} array}`);
// });


// let a = 15,
//     b = a;

//     b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//       a: 5,
//       b: 1
// };

// const copy = obj; //Link

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//       let objCopy = {};

//       let key;
//       for(key in mainObj ) {
//             objCopy[key] = mainObj[key];
//       }

//       return objCopy;
// } 
// const numbers = {
//       a: 2,
//       b: 5,
//       c: {
//             x: 7,
//             y: 4
//       }
// };
// const newNumbers = copy();

// // newNumbers.a = 10;
// // newNumbers.c.x = 10;
// // console.log(newNumbers);
// // console.log(numbers);

// // const add = {
// //       d: 17,
// //       e: 20
// // };

// // const clone = Object.assign({}, add);

// // clone.d = 20;
  
// // console.log(add);
// // console.log(clone);

// const helo = Object.assign({}, numbers);

// helo.a = 20;
// console.log(helo);
// console.log(numbers);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();//link
// newArray[1] = 'Hello';
// console.log(newArray);
// console.log(oldArray);



// function log(a, b) {
//       console.log(a);
//       console.log(b);
// } 

// const num = [2, 5, 7];



//  const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

//  const arraybi = ["a", "b", "hello"];
//  const operator = [...arraybi];

//  console.log(operator);

// const q = {
//       one: 1,
//       two: 2
// };

// const newObject = {...q};

// console.log(newObject);


// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// let soldier = {
//       health: 400,
//       armor: 100,
//       speed: 50,
//       sayHello: function() {
//             console.log('This work');
//             let num = 15;
//             return num;
//       }
// };

// let jonh = {
//       ...soldier,
//       age: 15
// };

// //  jonh.__proto__ = soldier;

// //  Object.setPrototypeOf(jonh, soldier);

//  jonh.sayHello();

//  soldier.sayHello(15);
//  console.log(jonh.armor);

//  console.log(typeof(String(43)));
//  console.log(typeof(String(null)));

//  // 2
//  console.log(typeof(5 + ''));

//  const num = 5;

//  console.log("https://vk.com/catalog/" + num);

//  let  fontSize = 'askjfkjsadlfdsaf';

//    To number

//    1)
//  console.log(typeof(Number('4')));

//  console.log(typeof(+'5'));

//  console.log(typeof(+fontSize));


// let answer = +prompt("hello", '');

// // To boolean

// // 0, '', null, undefined, NaN; - False - not working
// // 1 to boolean
// let switcher = null 

// if (switcher == null) {
//       console.log('working');
// }

// // 2
// console.log(typeof(Boolean('4')));

// // 3 
// console.log(typeof(!!"44444"));

// let hello = null;

// hello = 1;

// if (hello == true) {
//       console.log('king')
// }
// // while (num <= 55) {
// //       console.log(num);
// //       num++;
// // }

// // do {
// //       console.log(num);
// //       num++;
// // }
// // while (num <= 55);

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.hearts'),// . for selectors
//       oneHeart = wrapper.querySelector('.hearts'); //first selector with this name



//       const arr = [1, 2, 4, 5, 6, 6];
// // only arrays
// for (let value of arr) {
//       console.log(`value`);
// }


// // console.log(hearts[1]);

// // oneHeart.style.width = '500px';
// // oneHeart.style.backgroundColor = 'blue';

// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px';

// // for (let i = 0; i < hearts.length; i++) {
// //       hearts[i].style.cssText = 'background-color: green;';
// // }

// hearts.forEach(item => {
//    item.style.backgroundColor = 'blue';
// });
// console.log(hearts);

// const div = document.createElement('div');
// // const text = document.createTextNode('Тут был я');

// div.classList.add('black');
// // div.style.cssText = `width: 500px; background-color: black; height: 100px`;

// // wrapper.append(div);
// // wrapper.style.cssText = `display: flex`;
// // wrapper.prepend(div);
// // wrapper.appendChild(div);
// hearts[2].before(div);

// // wrapper.insertBefore(div, hearts[2]);

// // circles[0].remove();
// // circles[0].style.backgroundColor = 'blue';

// hearts[2].replaceWith(circles[2]);

// // wrapper.remove();
// // wrapper.removeChild(hearts[0]);

// // wrapper.replaceChild(circles[2], hearts[1]);

// // div.textContent = "<p>Hello</p>"; //only strin

// div.innerHTML = "<h1>Hello World</h1>"; 

// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); //useful

