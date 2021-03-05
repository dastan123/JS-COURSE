const btn = document.querySelector('button'),
      btnStop = document.querySelector('.set-interval-button');
      let timeId,
            i = 0;

function myAnimation() {
      const elem = document.querySelector('.box');
      let pos = 0;

      const id = setInterval(frame, 10);
      function frame() {
            if (pos == 300) {
                  clearInterval(id);
            } else {
                  pos++;
                  elem.style.top = pos + 'px';
                  elem.style.left = pos + 'px';
            }
      //       if (pos == 300) {
      // const id = setInterval(fram, 10);
      //             function fram() {
      //             pos++;
      //             elem.style.bottom = pos + 'px';
      //             elem.style.right = pos + 'px';
      //             }
      //       }
      }
}
myAnimation();

btn.addEventListener('click', myAnimation());

// btnStop.addEventListener('click', e => {
//       clearInterval(timeId);
// });

// // clearInterval(timerId);

// function logger () {
//       if (i === 3) {
//       clearInterval(timeId);
//       }
//       console.log('text');
//       i++;
// }

// let id = setTimeout(function log() {
//       console.log('Hello');
//       id = setTimeout(log, 500);
// }, 500);
