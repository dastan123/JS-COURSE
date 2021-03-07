window.addEventListener('DOMContentLoaded', () => {

// Modal

const btnModal = document.querySelectorAll('.btn-modal'),
      btnClose = document.querySelector('.btn-close'),
      modal = document.querySelector('.modal'),
      btnWrapper = document.querySelector('.button-container');

      function hideModal() {
            // modal.style.display = "none";
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
      }

      function showModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';

      }
      hideModal();


      // btnModal.addEventListener('click', e => {
      //       modal.style.display = "block";
      // });

      // btnWrapper.addEventListener('click', e => {
      //       const target = e.target;
      //       console.log('Hello');
      //       btnModal.forEach((item, i) => {
      //             if (target == item) {
      //       // modal.style.display = "block"
      //       item.classList.add('active');
      //       showModal();
      //             }
      //       });

      // });

      btnModal.forEach(item => {
            item.addEventListener('click', e => {
                  showModal();

            });
      });

      const button = document.createElement('button');

      button.textContent = 'Click';

      button.classList.add('btn-modal');

      btnWrapper.append(button);

      btnClose.addEventListener('click', e => {
            modal.classList.toggle('hide');
            document.body.style.overflow = '';
      });
      modal.addEventListener('click', e => {
            const target = e.target;

            if (target === modal) {
                  hideModal();
            }
      });

      document.addEventListener('keydown', (e) => {
            if (e.code === "Escape") {
                  hideModal();
            }
            if (e.code === "KeyF") {
                  showModal();
            }
      });
      
});