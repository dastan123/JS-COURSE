'use strict';

// function showThis(a, b) {
//       console.log(this);
//       function sum() {
//             console.log(this);
//             return a + b;
//       }
//       console.log(sum());
// }

// showThis(4, 6);

// const obj = {
//       a: 20,
//       b: 15,
//       sum: function() {
//       console.log(this.a);
//             function shout() { 
//                   console.log(this);
//             }
//             shout();
//       }
// };

// obj.sum();

// function User(name, id) {
//       this.name = name;
//       this.id = id;
//       this.human = true;
// }
// let ivan = new User('Ivan', 23);

// function sayName() {
//       console.log(this);
//       console.log(this.name + this.surname );
// }

// const user = {
//       name: 'Jonh',
//       surname: 'Smith'
// };

// sayName.call(user);
// sayName.apply(user);

// function count(num) {
//       return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// 1) Обычная функция this = window, но если use strict = undefined
// 2) Контекст у методов обЬекта это сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){ // only if function not working with =>
//       this.style.backgroundColor = "blue";
// });

// const obj = {
//       num: 5,
//       sayNumber: function() {
//             const say = () => { //this will work 
//                   console.log(this.num);
//             };
//       say();
//       }
// };

// obj.sayNumber();

// const double = a => a * 2; // if only 1 stroke return automatic without ()

// console.log(double(4));