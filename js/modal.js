(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onKeypressCloseModal);

  function toggleModal() {
    const isModalOpen = refs.openModalBtn.getAttribute(`aria-expended`) === `true` || false;
    refs.openModalBtn.setAttribute(`aria-expended`, !isModalOpen);

    const scrollLockMethod = !isModalOpen ? `disableBodyScroll` : `enableBodyScroll`;
    bodyScrollLock[scrollLockMethod](document.body);

    refs.modal.classList.toggle('is-hidden');
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      refs.modal.classList.toggle('is-hidden');
    }
  }

  function onKeypressCloseModal(event) {
    if (event.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
      refs.modal.classList.toggle('is-hidden');
    }
  }
})();
