// const mobileMenu = document.getElementById('mobile-menu');
// const navLinks = document.querySelector('.nav-links');

// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});