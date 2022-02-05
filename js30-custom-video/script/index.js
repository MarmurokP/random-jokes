import {i18Obj} from './translate.js';

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
});

// Portfolio

const emptyButtons = document.querySelectorAll('.empty-button');
const portfolioImgs = document.querySelectorAll('.portfolio-img');
const portfolioBtns = document.querySelector('.portfolio-buttons');

function changeImg(event) {
    if(event.target.classList.contains('empty-button')){
        if(event.target.dataset.i18 === 'winter'){
            portfolioImgs.forEach((img, i) => img.src = `./assets/img/winter/${i + 1}.jpg`);
        }else if(event.target.dataset.i18 === 'spring'){
            portfolioImgs.forEach((img, i) => img.src = `./assets/img/spring/${i + 1}.jpg`);
        }else if (event.target.dataset.i18 === 'summer'){
            portfolioImgs.forEach((img, i) => img.src = `./assets/img/summer/${i + 1}.jpg`);
        }else if (event.target.dataset.i18 === 'autumn'){
            portfolioImgs.forEach((img, i) => img.src = `./assets/img/autumn/${i + 1}.jpg`);
        };       
    };
};

portfolioBtns.addEventListener('click', changeImg);

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      seasons.forEach(seas => {
        img.src = `./assets/img/${seas}/${i}.jpg`;
      });      
    };
  };
  preloadImages();

  function clearActive(){
      emptyButtons.forEach(btn => {       
            btn.classList.remove('empty-button-active');       
      });      
  };

  portfolioBtns.addEventListener('click', clearActive);
  
  function addActive(event){
    event.target.classList.add('empty-button-active');
};

portfolioBtns.addEventListener('click', addActive);

// Languages

const eng = document.querySelector('.eng');
const ru = document.querySelector('.ru');

eng.addEventListener('click', () => {
    eng.classList.add('lang-active');
    ru.classList.remove('lang-active');
    function getTranslate(){    
        const dataI = document.querySelectorAll('[data-i18]');
        dataI.forEach(el => {
            let attr = el.getAttribute('data-i18')    
            el.textContent = i18Obj.en[attr];
            if (el.placeholder) {
                el.placeholder = i18Obj.en[attr];
                el.textContent = ''
            };
        });
    };     
    getTranslate();
});
ru.addEventListener('click', () => {
    ru.classList.add('lang-active');
    eng.classList.remove('lang-active');
    function getTranslate(){    
        const dataI = document.querySelectorAll('[data-i18]');
        dataI.forEach(el => {
            let attr = el.getAttribute('data-i18')    
            el.textContent = i18Obj.ru[attr];
            if (el.placeholder) {
                el.placeholder = i18Obj.ru[attr];
                el.textContent = ''
            };
        });
    };    
    getTranslate();
});

// theme

const theme = document.querySelector('.sun');
const themeClasses = theme.classList;
const style = document.querySelector('.style');

theme.addEventListener('click', () => {
if(style.getAttribute('href') === ""){
    style.href = "./light-style.css";
} else {
    style.href = "";
};
themeClasses.toggle('moon');
});

// themeChanger();

// Buttons

const buttons = document.querySelectorAll('button');

buttons.forEach(el => {
    let thHandler;
    el.addEventListener("click", function() {
        let $this = el;
        if ($this.classList.contains("clicked")) {
          $this.classList.remove("clicked");
          if (thHandler) clearTimeout(thHandler);
          thHandler = setTimeout(function() {
            $this.click();
          }, 100);
        } else {
          $this.classList.add("clicked");
          if(thHandler) clearTimeout(thHandler);
          thHandler = setTimeout(function() {
            $this.classList.remove("clicked");
          }, 1100 );
        };
    });      
});


function setLocalStorage() {
    let themeChanger = style.getAttribute('href');    
    localStorage.setItem('themeChanger', themeChanger);
    localStorage.setItem('themeClasses', themeClasses);

  }
  window.addEventListener("beforeunload", setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('themeChanger')) {
      const themeChanger = localStorage.getItem('themeChanger');
      style.href = themeChanger;
      if(localStorage.getItem('themeClasses') === 'sun moon'){
          themeClasses.add('moon');
      } ;
    };
    
  };
  window.addEventListener('load', getLocalStorage);

//   Video

  const player = document.querySelector('.video');
  const video = player.querySelector('.vid-player');
  const bigPlayButton = player.querySelector('.play-button');
  const smallPlayButton = player.querySelector('.video-small-play');
  const playButton = smallPlayButton.classList;
  const progressBar = player.querySelector('.video-progress-bar');
  const soundIcon = player.querySelector('.video-sound-ico');
  const soundIcons = soundIcon.classList;
  const soundBar = player.querySelector('.sound-bar');

  function togglePlay() {
      if(video.paused){
          video.play();
      } else {
          video.pause();
      };
  };

  function updateButtons(){
    bigPlayButton.classList.toggle('play-button-none');
    playButton.toggle('pause');
  }
 
  function handleSoundUpdate(){
    video['volume'] = this.value;
      if(video['volume'] === 0){
          soundIcons.add('mute');
      } else  if(this.value !== 0){        
          soundIcons.remove('mute');
      };    
 };

  function mute (){
    if(video['volume'] !== 0){
       video['volume'] = 0;
       soundIcons.add('mute');
    }else if(soundBar.value > 0){
       video['volume'] = soundBar.value;
       soundIcons.remove('mute');              
    };        
};

soundBar.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${soundBar.value * 100}%, #ffffff ${soundBar.value * 100}%, #ffffff 100%)`;   

function updateVolume() {    
    soundBar.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${soundBar.value * 100}%, #ffffff ${soundBar.value * 100}%, #ffffff 100%)`;  
  };

  function handleProgress(){
      const percent = (video.currentTime / video.duration) * 100;      
      progressBar.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${percent}%, #ffffff ${percent}%, #ffffff 100%)`; 
      progressBar.value = percent;
  }

  function scrub(event){
     const scrubTime = (event.offsetX / progressBar.offsetWidth) * video.duration;
     video.currentTime = scrubTime;
  }

  function keyboardListner(event) {
    const { keyCode } = event;
    switch(keyCode) {
      case 32:
        togglePlay();            
        break;
      case 77:
        mute();
        break;   
    };
  };  
  

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButtons);
video.addEventListener('pause', updateButtons);
video.addEventListener('timeupdate',handleProgress);
document.addEventListener('keyup', keyboardListner);
bigPlayButton.addEventListener('click', togglePlay);
smallPlayButton.addEventListener('click', togglePlay);

soundBar.addEventListener('change', handleSoundUpdate);
soundIcon.addEventListener('click', mute);
soundBar.addEventListener('input', updateVolume);

let mousedown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (event) => mousedown && scrub(event));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);

window.onkeydown = function(event) {
    if(event.keyCode == 32 && event.target == document.body) {
        event.preventDefault();
        return false;
    }
};

console.log('Оценка за задание: 60 баллов\n1. Вёрстка +10 вёрстка видеоплеера: есть само видео, в панели управления есть кнопка Play/Pause, прогресс-бар, кнопка Volume/Mute, регулятор громкости звука +5;\nв футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5;\nКнопка Play/Pause на панели управления +10;\nпри клике по кнопке Play/Pause запускается или останавливается проигрывание видео +5;\nвнешний вид и функционал кнопки изменяется в зависимости от того, проигрывается ли видео в данный момент +5;\nПрогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка +10;\nПри перемещении ползунка регулятора громкости звука можно сделать звук громче или тише. Разный цвет регулятора громкости звука до и после ползунка +10;\nПри клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется, если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля +10;\nКнопка Play/Pause в центре видео +10;\nесть кнопка Play/Pause в центре видео при клике по которой запускается видео и отображается панель управления +5;\nкогда видео проигрывается, кнопка Play/Pause в центре видео скрывается, когда видео останавливается, кнопка снова отображается +5;\n7. Так же добавил управление с клавиатуры:\nspace(пробел) - play/pause;\nm - mute/unmute');
