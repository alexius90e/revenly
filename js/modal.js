const modal = document.querySelector('.modal');

const modalForm = document.querySelector('.modal__form');

const getAccessButtons = document.querySelectorAll('.get-access-button');

getAccessButtons.forEach((button) => {
  button.addEventListener('click', () => modal.classList.add('active'));
});

modal.addEventListener('click', (event) => {
  const isLayout = event.target.classList.contains('modal');
  const isBody = event.target.classList.contains('modal__body');
  if (isLayout || isBody) modal.classList.remove('active');
});

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  modal.classList.remove('active');
});
