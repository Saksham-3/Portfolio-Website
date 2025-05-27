let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = (e) => {
    e.stopPropagation(); // prevent click from bubbling to the document
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// close navbar on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// close navbar when clicking outside 
document.addEventListener('click', (e) => {
    // if click not inside menu or navbar
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

// typing effect
const typed = new Typed('.multiple-text', {
    strings: ['Full-stack Developer', 'Mobile Developer', 'Software Developer','Student'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1200,
    // loop: true,
});
