const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;


// const width = box.offsetWidth;
// const height = box.offsetHeight;


const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', e => {
      // box.style.cssText = "overflow: inherit;";
      // box.style.height = box.scrollHeight + 'px';
      console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

// console.log(document.documentElement.scrollTop);

// document.documentElement.scroll = 0;
// 0
// document.documentElement.scrollTop = 0;
// 0
// document.documentElement.scrollBy(0, 400);
// undefined
// document.documentElement.scrollBy(-100);
// VM282:1 Uncaught TypeError: Failed to execute 'scrollBy' on 'Element': cannot convert to dictionary.
//     at <anonymous>:1:26
// (anonymous) @ VM282:1
// document.documentElement.scrollBy(0, 700);
// undefined
// document.documentElement.scrollBy(0, 700);
// undefined



































