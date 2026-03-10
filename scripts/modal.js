const modal = document.querySelector('.modal');
const openModal = document.querySelector('.hotel-search__button');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', () => {
  modal.classList.remove('modal_hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('modal_hidden');
});
