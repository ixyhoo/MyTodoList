console.log('script start'); // Pour vérifier si le script est bien chargé
const form = document.querySelector('form');
const item = document.querySelector('#item');
const list = document.querySelector('#list');
//storage part
function storeList() {
    window.localStorage.myitems = list.innerHTML;
}

function getTodos() {
    if (window.localStorage.myitems){
        list.innerHTML = window.localStorage.myitems;
    } else {
        list.innerHTML = `<li>click on a todo to delete it</li>`;
    }
}

window.addEventListener('load', getTodos);
//getTodos();
//console.log(form, item, list); // Pour vérifier si les éléments sont bien récupérés

form.addEventListener('submit', (e) => {
   //console.log('form submit'); // Pour vérifier si l'événement submit est bien déclenché
   e.preventDefault();

   list.innerHTML += `<li>${item.value}</li>`;
   item.value = ''; 
   storeList();
   //console.log('item added', item.value); // Pour vérifier si un nouvel item est bien ajouté
});
//remove element
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('checked')) {
        e.target.remove();
    } else {
        e.target.classList.add('checked');
    }
    storeList();
});
