const nav = document.getElementById('nav');

window.onscroll = function() {
    if(window.scrollY > 22) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};