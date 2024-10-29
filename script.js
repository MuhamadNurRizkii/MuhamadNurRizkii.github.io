// text mengetik
var typed = new Typed('.typing', {
    strings: ['Welcome To <span>RizzStore</span>','Buy Now'],
    typeSpeed: 100,
    backSpeed: 150,
    loop: true
})

const navbar = document.querySelector('.nav-list');
const hamburgerMenu = document.getElementById('hamburger-menu')

// ketika hamburger-menu di klik 
hamburgerMenu.onclick = () => {
    navbar.classList.toggle('active')
}

// klik keluar dimana saja 
document.addEventListener('click', function(e) {
    if(!hamburgerMenu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active')
    }
})