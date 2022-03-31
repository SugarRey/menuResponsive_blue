const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementBydId('nav-toggle'),
      closeMenu = document.getElementById("nav-close");


toggleMenu.addEventListener('click', () => {
   navMenu.classList.toggle('show')
});