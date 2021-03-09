"use strict";

class Rectangle {
      constructor(height, width) {
            this.height = height;
            this.width = width;
      }
// class Rectangle {
//       constructor(height, width) {
//             this.height = height;
//             this.width = width;
//       }

      calcArea() {
       return this.height * this.width;     
      }
}
//       calcArea() {
//        return this.height * this.width;
//       }
// }

class ColoredRectangleText extends Rectangle {
      constructor(height, width, text, bgColor) {
            super(height, width); // his parent this.height = height; // only 1 stroke
            this.text = text;
            this.bgColor = bgColor;
      }
// class ColoredRectangleText extends Rectangle {
//       constructor(height, width, text, bgColor) {
//             super(height, width); // his parent this.height = height; // only 1 stroke
//             this.text = text;
//             this.bgColor = bgColor;
//       }

      showMyProps() {
            console.log(`Text: ${this.text}, color ${this.bgColor}`);
      }
 }
//       showMyProps() {
//             console.log(`Text: ${this.text}, color ${this.bgColor}`);
//       }
//  }

//  const div = new ColoredRectangleText(25, 10, 'Hello World', 'red');

 const div = new ColoredRectangleText(25, 10, 'Hello World', 'red');

 div.showMyProps();
 console.log(div.calcArea());
 console.log(div);
//  div.showMyProps();
//  console.log(div.calcArea());
//  console.log(div);

// const square = new Rectangle(10, 10);
// const log = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(log.calcArea()); 
// console.log(log.calcArea());

const btn = document.querySelector('button');

class MenyTab {
      constructor(src, text, parentTab) {
            this.src = src;
            this.text = text;
            this.parent = document.querySelector(parentTab);
      }

      rendering() {
            const tab = document.createElement('div');
            tab.innerHTML = `
            <div class="container-1">
            <div class="tabs">
                <div class="back-img"></div>
            </div>
            <img class="youtube-img" src="/img/${this.src}" width="60" height="auto" alt="">
        
                <p class="tag-youtube">
                    ${this.text}
                </p>
        
            </div>
            `;
            this.parent.append(tab);
            
      }
}

new MenyTab(
      'download.png',
      'Google',
      '.container-1'
).rendering();

class MenuCard {
  constructor(src, alt, title, descr, price, parentSelector, ...classes) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.classes = classes;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 27;
    this.changeToUAH();
  }

  changeToUAH() {
    this.price = this.price * this.transfer;
  }

  render() {
    const element = document.createElement("div");
      if (this.classes.length === 0) {
            this.element = 'menu-block';
            element.classList.add(this.element);     
       }
            else {
                  this.classes.forEach(className => element.classList.add(className));
            }


    element.innerHTML = `
      <img src="/img/${this.src}" width="350" height="auto" alt="${this.alt}" />
      <h3>${this.title}</h3>
      <p>
      ${this.descr}
      </p>
      <hr />
      <div class="elements">
      <p class="cost">Cost:</p>
      <span class="number"> ${this.price} </span>
      <p>Грн/день</p>
      </div>
            `;
            this.parent.append(element);
  }
}





btn.addEventListener('click', e => {
      new MenuCard(
            'pexels-ella-olsson-1640777 (1).jpg',
            'loading',
            'Menu "Prop"',
            'Lorem ipsum dolor sit ame t consectetur adipisicing elit. Quibusda perspiciatis porro inventore maxime obcaecati sed debitis, enim adipiscioptio, iure quia aspernatur exercitationem possimus accusantium, totam magni temporibus laborum! Numquam impedit sed tenetur. Quas cupiditate pariatur ratione dolor aliquam',
            15,
            '.container',
            'menu-block',
            'biggg'

      ).render();

      new MenuCard(
            'pexels-engin-akyurt-1435895.jpg',
            'loaded',
            'Menu "Premium"',
            'Lorem ipsum dolor sit ame t consectetur adipisicing elit. Quibusda perspiciatis porro inventore maxime obcaecati sed debitis, enim adipiscioptio, iure quia aspernatur exercitationem possimus accusantium, totam magni temporibus laborum! Numquam impedit sed tenetur. Quas cupiditate pariatur ratione dolor aliquam',
            125,
            '.container',
            'menu-block'
      ).render();
}); 
