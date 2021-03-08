// 'use strict';

// const log = function(a, b, ...rest) {
//       console.log(a, b, rest);
// };

// log('basic', 'rest', 'operator', 'usega');

// function calcOrDouble(number, basis = 2) {
//       console.log(number * basis);
// }

// calcOrDouble(3);

'use strict'; 

class Rectangle {
      constructor(height, width) {
            this.height = height;
            this.width = width;
      }

      calcArea() {
       return this.height * this.width;     
      }
}

class ColoredRectangleText extends Rectangle {
      constructor(height, width, text, bgColor) {
            super(height, width); // his parent this.height = height; // only 1 stroke
            this.text = text;
            this.bgColor = bgColor;
      }

      showMyProps() {
            console.log(`Text: ${this.text}, color ${this.bgColor}`);
      }
 }

 const div = new ColoredRectangleText(25, 10, 'Hello World', 'red');
 
 div.showMyProps();
 console.log(div.calcArea());
 console.log(div);

// const square = new Rectangle(10, 10);
// const log = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(log.calcArea());