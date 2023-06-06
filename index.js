const burgerMenu = document.getElementById('burger-menu');
const header = document.getElementById('header');

burgerMenu.addEventListener('click', ()=> {
   header.classList.toggle('isActive')

})