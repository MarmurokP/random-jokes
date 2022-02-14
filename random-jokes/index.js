const randomQuotUrl = 'https://type.fit/api/quotes';
const belarusQuotes = './belarus-quotes.json';
const randomText = document.querySelector('.text');
const quotAutor = document.querySelector('.author');
const quotButton = document.querySelector('.change-joke');
const jokeLanguage = document.querySelector('.joke-language');
const img = document.querySelector('.img-container');
let quotes = randomQuotUrl;

const eng = document.querySelector('.eng');
const by = document.querySelector('.by');

  eng.addEventListener('click', () => {
      eng.classList.add('lang-active');
      by.classList.remove('lang-active'); 
      quotes = randomQuotUrl;
      jokeLanguage.textContent = 'Select quote language';
      quotButton.textContent = 'Give me a new quote';
      getData();
      changeImg();
  });
  
  by.addEventListener('click', () => {
      by.classList.add('lang-active');
      eng.classList.remove('lang-active');
      quotes = belarusQuotes;
      jokeLanguage.textContent = 'Абярыце мову цытаты';
      quotButton.textContent = 'Яшчэ адну цытату';
      getData();
      changeImg();
  });

  quotButton.addEventListener('click', getData, changeImg);
  quotButton.addEventListener('click', changeImg);


function showData(data) {
    let qoutNum = Math.floor(0 + Math.random() * (data.length + 1));
  
    randomText.textContent = `"${data[qoutNum].text}"`;
    data[qoutNum].author === null ? quotAutor.textContent = `- Unknown` : quotAutor.textContent = `- ${data[qoutNum].author}`;      
   };


async function getData() {
    const res = await fetch(quotes);
    const data = await res.json();
    
    showData(data);    
  };
  getData();

  function changeImg(){ 
    let random = `rgb(${Math.floor(0 + Math.random() * (255 + 1))} ${Math.floor(0 + Math.random() * (255 + 1))} ${Math.floor(0 + Math.random() * (255 + 1))})`;
    quotButton.style.backgroundColor = random;
    img.style.filter = `invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(1) contrast(102%) drop-shadow(8px 8px 10px ${random})`;
  }
  changeImg();

  console.log('Ваша отметка - 60 балла(ов)\nОтзыв по пунктам ТЗ:\nНе выполненные\не засчитанные пункты:\n1) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения\nВсе оставшиеся пункты выполнены и не имеют комментариев проверяющего.')

  

  
  
  
 


  
  
 

 