// Burger
const burgerItem = document.querySelector('.burger');
const burgerClasses = burgerItem.classList;
const menu = document.querySelector('.header-nav');
const menuClasses = menu.classList;

burgerItem.addEventListener('click', () => {
    burgerClasses.toggle('burger-cross');
    menuClasses.toggle('close');
    menuClasses.toggle('open');
})

