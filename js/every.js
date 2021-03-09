const deadline = '2021-05-07';

function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 60),
            minutes = Math.floor((t / 1000 * 60) % 60),
            seconds = Math.floor((t / 1000) % 60);


      return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
      };
}

function getZero(num) {
      if (num >=0 && num < 10) {
            return `0${num}`;
      } else {
            return num;
      }
}

function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
            day = document.querySelector('.days'),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            second = document.querySelector('.seconds'),
            time = setInterval(updateClock, 1000);

            function updateClock() {
            const t = getTimeRemaining(endtime);

            day.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            second.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                  clearInterval(time);
            }
      }
}



// tabs
const listParent = document.querySelector('.nav-list'),
      li = document.querySelectorAll('.li'),
      page = document.querySelectorAll('.page');

function deletePages() {
      page.forEach(item => {
            item.style.display = "none";
      });
   
      li.forEach(list => {
            list.classList.remove('active');
      });
}

function showPages(i = 0) {
      page[i].style.display = "block";

      li[i].classList.add('active');
}

deletePages();
showPages();

listParent.addEventListener('click', e => {
      const target = e.target;

      if (target && target.classList.contains('li')) {
            li.forEach((item, i) => {
                  if (target == item) {
                        deletePages();
                        showPages(i);
                        setClock('.timer', deadline);
                  }
                
            });
      }
});

// view details

const coronaParagraph = document.querySelector('.corono-text'),
      coronatag = document.querySelector('.corona-tag');

function hideCoronaText(element) {
      element.classList.add('hide');
      element.classList.remove('show');
}

function showCoronaText(element) {
      element.classList.add('show');
      element.classList.remove('hide');
}

coronatag.addEventListener('click', e => {
      if (coronaParagraph.classList.contains('hide')) {
            showCoronaText(coronaParagraph);
      } else {
            hideCoronaText(coronaParagraph);
      }
});

// modal window

const btn = document.querySelector('.modal-open'),
      modal = document.querySelector('.modal'),
      modalWrapper = document.querySelector('.modal-wrapper');

function showModal() {
      modal.classList.add('show');
      modal.classList.remove('hide');
      // document.body.style.overflow = "hidden";
}

function hideModal() {
      modal.classList.add('hide');
      modal.classList.remove('show');
      // document.body.style.overflow = "";
}

hideModal();

btn.addEventListener('click', e => {
      if (modal.classList.contains('show')) {
            hideModal();
      } else {
            showModal();
      }

});
// const timeout = setTimeout(showModal, 2000);

document.addEventListener('keydown', e => {
      if (e.code === "Escape") {
            hideModal();
      }
      if (e.code === "KeyF") {
            showModal();
          }
});

function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)
      {
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
      }
}

window.addEventListener('scroll', showModalByScroll);

// classes 

class codingTab {
      constructor (src, tag, btn, parentSelector, ...rest) {
            this.src = src;
            this.tag = tag;
            this.btn = btn;  
            this.rest = rest;
            this.parent = document.querySelector(parentSelector);
          }

      render() {
            const element = document.createElement('div');
            if (this.rest.length === 0) {
                  element.classList.add('prototype1');
            } else {
                  this.rest.forEach(classes => element.classList.add(classes));
            }
            element.innerHTML = `
            <img src="/img/${this.src}" width="400" height="250" alt="">
            <p class="coding-tag">${this.tag}</p>
            <button>${this.btn}</button>
            `;
      this.parent.append(element);
      }
}

new codingTab (
      "coding1.jpg",
      'Get better at coding',
      'Start coding',
      '.container',
      'prototype1'
).render();


new codingTab (
      "codi.jpg",
      'Get better at hacking',
      'Start Hacking',
      '.container',
      'prototype1'
).render();


new codingTab (
      "coding3.jpg",
      'Get better at everythink',
      'Start Creating',
      '.container',
      'prototype1'
).render();

// Timer

