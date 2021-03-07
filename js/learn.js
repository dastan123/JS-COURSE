window.addEventListener("DOMContentLoaded", () => {
      const btnModal = document.querySelectorAll('.btn-modal'),
            modal = document.querySelector('.modal'),
            btnClose = document.querySelector('.btn-close');

      function hideModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
      }


      function showModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
      }

      btnModal.forEach(item => {
            item.addEventListener('click', e => {
                  if (modal.classList.contains('hide')) {
                        showModal();
                  } else {
                        hideModal();
                  }
            });
      });

      hideModal();

      modal.addEventListener('click', e => {
            const target = e.target;

            if (target && target === modal) {
                  hideModal();
            }
      });

      btnClose.addEventListener('click', e => {
            hideModal();
      });

      function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                  showModal();
                  window.removeEventListener('scroll', showModalByScroll);
            }
}

      window.addEventListener('scroll', showModalByScroll);

});
