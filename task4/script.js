const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  event.preventDefault();
  const input = prompt('Введите текст');
  if (input !== null) {
    link.textContent = input;
  }
});