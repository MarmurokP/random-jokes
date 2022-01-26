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


// Portfolio

const emptyButton = document.querySelector('.empty-button');
const portfolioImgs = document.querySelectorAll('.portfolio-img');
const portfolioBtns = document.querySelector('.portfolio-buttons');


function changeImg(event) {
    if(event.target.classList.contains('empty-button')){
        if(event.target.dataset.season === 'winter'){
            portfolioImgs.forEach((img, i) => img.src = `./assets/img/winter/${i + 1}.jpg`);
        }else if(event.target.dataset.season === 'spring'){
            portfolioImgs.forEach((img, i) => img.src = `./assets/img/spring/${i + 1}.jpg`);
        }else if (event.target.dataset.season === 'summer'){
            portfolioImgs.forEach((img, i) => img.src = `./assets/img/summer/${i + 1}.jpg`);
        }else if (event.target.dataset.season === 'autumn'){
            portfolioImgs.forEach((img, i) => img.src = `./assets/img/autumn/${i + 1}.jpg`);
        };       
    };
};

portfolioBtns.addEventListener('click', changeImg);

const seasons = ['winter', 'spring', 'summer', 'autumn'];


