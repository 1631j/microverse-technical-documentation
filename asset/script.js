const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const section = document.querySelector(e.target.hash);
        section.scrollIntoView({ behavior: 'smooth' });

        const nav = document.querySelector('#navbar');
        nav.classList.remove('show');
    });
});

const toggleNav = () => {
    const nav = document.querySelector('#navbar');
    nav.classList.toggle('show');
};

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleNav);