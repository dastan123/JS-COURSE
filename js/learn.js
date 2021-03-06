
const btn = document.querySelector('.button'),
      btnDelete = document.querySelector('.delete-button'),
      box = document.querySelectorAll('.box'),
      boxBig = document.querySelector('.box-2'),
      set = document.querySelector('.page-set'),
      form = document.querySelector('.register-form');

function showNextPage(i = 0) {
      box[i].classList.remove('hide'); 
      box[i].classList.add('show'); 
}

function hideNextPage() {
      box.forEach(item => {
      item.classList.remove('show'); 
      item.classList.add('hide'); 
      });
}

hideNextPage();
showNextPage();

btn.addEventListener('click', e => {
 
      if(box[0].classList.contains('show')) {
            hideNextPage();
      }
      if (box[1].classList.contains('hide'))
      {
            showNextPage(1);
      }
});

btnDelete.addEventListener('click', e => {
      if(box[1].classList.contains('show')) {
            hideNextPage();
      }
      if(box[0].classList.contains('hide')) {
            showNextPage();
      }
});
// let num = '1';
// // num.innerHTML = "<a>kalsdf</a>";
// num.
// set.before(num);


function hideForm(arr) {
      arr.classList.add('hide');
}

function showForm() {

   
      if (form.classList.contains('hide')) {
            form.classList.remove('hide');
            form.classList.add('show');
      }
  
     
      console.log('hello');
}

function showBigForm() {
      if (form.classList.contains('show')) {
            form.classList.remove('show');
            form.classList.add('hide');
      }
}

hideForm(form);

const timeI = setInterval(showBigForm, 1000);
const timeId = setInterval(showForm, 1000);





