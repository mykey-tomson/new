const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// display mobil menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classlist.toggle('active')
}

menu.addEventListener('click', mobileMenu);