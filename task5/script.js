const inputField = document.querySelector('#inputField');
const sendButton = document.querySelector('#sendButton');
const duplicateField = document.querySelector('#duplicateField');

inputField.addEventListener('keyup', (event) => {
  duplicateField.textContent = inputField.value;
});

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(inputField.value);
  inputField.value = '';
  duplicateField.innerHTML = '';
});
