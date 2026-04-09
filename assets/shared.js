// Theme toggle
document.querySelector('.theme-toggle').addEventListener('click', function() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// Burger menu
var burger = document.querySelector('.burger');
var mobileMenu = document.querySelector('.mobile-menu');

if (burger && mobileMenu) {
    burger.addEventListener('click', function() {
        burger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            burger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });
}
