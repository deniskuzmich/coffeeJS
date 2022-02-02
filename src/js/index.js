window.addEventListener('DOMContentLoaded', () => {

    const modal = document.querySelector('.modal'),
          openBtn = document.querySelector('[data-modal'),
          closeBtn = document.querySelector('.modal__close');


    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    openBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' &&  modal.style.display === 'block') {
            closeModal();
        }
    })
})