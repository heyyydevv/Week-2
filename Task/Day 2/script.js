// Toggle navigation menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Active link highlight
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navLinks.forEach(link => link.classList.remove('active-link'));
    this.classList.add('active-link');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));
