// Burger Menu
const burgerMenu = document.getElementById('burger-menu');
const header = document.getElementById('header');

burgerMenu.addEventListener('click', ()=> {
   header.classList.toggle('isActive')

})

// Cookies
const cookiesBtn = document.getElementById('cookies-btn');
const cookiesCard = document.getElementById('cookies-card');
const cookiesBackground = document.getElementById('cookies-background');

if(!localStorage.getItem('agree-cookies')) {
   cookiesCard.classList.add('active');
   cookiesBackground.classList.add('active');
}


cookiesBtn.addEventListener('click', () => {
   cookiesCard.classList.remove('active');
   cookiesBackground.classList.remove('active');

   localStorage.setItem('agree-cookies', true)
})