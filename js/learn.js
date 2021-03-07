window.addEventListener("DOMContentLoaded", () => {
  // Modal

  const btnModal = document.querySelectorAll(".btn-modal"),
    btnClose = document.querySelector(".btn-close"),
    modal = document.querySelector(".modal"),
    btnWrapper = document.querySelector(".button-container");

  function hideModal() {
    // modal.style.display = "none";
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    document.body.style.cssText = "pointer-events: auto;";

  }

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    document.body.style.cssText = "pointer-events: none;";
    modal.style.cssText = "pointer-events: auto;";
  }

  function showModal(i) {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    document.body.style.cssText = "pointer-events: none;";
    modal.style.cssText = "pointer-events: auto;";

    clearInterval(modalTimerId);
    btnModal[i].classList.add("active");
  }

  function btnClass() {
      btnModal.forEach((item) => {
        item.classList.remove("active");
      });
    }

  hideModal();
  // btnModal.addEventListener('click', e => {
  //       modal.style.display = "block";
  // });

  btnWrapper.addEventListener("click", (e) => {
    const target = e.target;
    console.log("Hello");
    if (target && target.classList.contains("btn-modal"))
      btnModal.forEach((item, i) => {
        if (target == item) {
          // hideModal();
          showModal(i);
        }
      });
  });

  // btnModal.forEach((item, i) => {
  //       item.addEventListener('click', e => {
  //             // btnModal[i].classList.add('active');
  //             showModal(i);
  //       });
  // });

  const button = document.createElement("button");

  button.textContent = "Click";

  button.classList.add("btn-modal");

  btnWrapper.append(button);

  button.addEventListener("click", (e) => {
    showModal();
  });


  btnClose.addEventListener("click", (e) => {
    modal.classList.toggle("hide");
    document.body.style.overflow = "";
    btnClass();
  });

  modal.addEventListener("click", (e) => {
    const target = e.target;

    if (target === modal) {
      hideModal();
    }
    btnClass();
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      hideModal();
    }
    if (e.code === "KeyF") {
      showModal();
    }
  });

//   const modalTimerId = setTimeout(openModal, 3000);

function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
      }
}

  window.addEventListener('scroll', showModalByScroll);
      // , {once: true}
});
