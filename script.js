console.log('script start'); // Pour vérifier si le script est bien chargé
const form = document.querySelector('form');
const item = document.querySelector('#item');
const list = document.querySelector('#list');

//console.log(form, item, list); // Pour vérifier si les éléments sont bien récupérés

form.addEventListener('submit', (e) => {
   //console.log('form submit'); // Pour vérifier si l'événement submit est bien déclenché
   e.preventDefault();

   list.innerHTML += `<li>${item.value}</li>`;
   //console.log('item added', item.value); // Pour vérifier si un nouvel item est bien ajouté
});
