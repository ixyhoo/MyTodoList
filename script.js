const form = document.querySelector('form');
const item = document.querySelector('#item');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   list.innerHTML = `<li>${item.value}</li>`;
});