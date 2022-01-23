// Burger
const burgerItem = document.querySelector('.burger');
const burgerClasses = burgerItem.classList;
const menu = document.querySelector('.header-nav');
const menuClasses = menu.classList;
const navLink = menu.querySelectorAll('.nav-link');

burgerItem.addEventListener('click', () => {
    burgerClasses.toggle('burger-cross');   
    menuClasses.toggle('close');
    menuClasses.toggle('open');            
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        burgerClasses.remove('burger-cross');
        menuClasses.remove('open');
        burgerClasses.add('burger');
        menuClasses.add('close');
    });
})


console.log('Ваша отметка - 82 балла(ов)\nОтзыв по пунктам ТЗ:\nЧастично выполненные пункты:\n1) нет полосы прокрутки при ширине страницы от 768рх до 480рх — 4 балл(а)\nКомментарий проверяющего: Пропадает 4-я кнопка раздела portfolio\n2) нет полосы прокрутки при ширине страницы от 480рх до 320рх — 3 балл(а)\nКомментарий проверяющего: Обрезаются поля Contact Me')