const randomQuotUrl = 'https://type.fit/api/quotes';
const randomText = document.querySelector('.text');
const quotAutor = document.querySelector('.author');
const quotButton = document.querySelector('.change-joke');


function showData(data) {
    let qoutNum = Math.floor(0 + Math.random() * (data.length + 1));
  
    randomText.textContent = `"${data[qoutNum].text}"`;
    data[qoutNum].author === null ? quotAutor.textContent = `- Unknown` : quotAutor.textContent = `- ${data[qoutNum].author}`;     
};

async function getData() {
    const res = await fetch(randomQuotUrl);
    const data = await res.json();
    
    showData(data);
    
  };
  getData();

  quotButton.addEventListener('click', getData);



  
  
 

 