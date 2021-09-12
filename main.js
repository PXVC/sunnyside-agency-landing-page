let nav = document.querySelector('.mobile-nav-bar')
let burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
})