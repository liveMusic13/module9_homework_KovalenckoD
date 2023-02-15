'use strict';


let button = document.querySelector('.button');
let result = document.querySelector('.result');

button.addEventListener('click', () => {
  const valueInput = +document.querySelector('.input').value;
  if (valueInput < 1 || valueInput > 10) {
    console.log('число вне диапазона от 1 до 10');
  } else if (valueInput === 5) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', `https://picsum.photos/v2/list?limit=${valueInput}`, true);
    xhr.onload = function () {
      const resultParse = JSON.parse(xhr.response);
      let cards = ``;
      resultParse.forEach(elem => {
        const cardBlock = `
        <div class="card">
          <img src="${elem.download_url}" alt="fdsfsdf" class="card-image">
          <p class="author">${elem.author}</p>
        </div>
      `;
        cards += cardBlock;
      });
      result.innerHTML = cards;
    }
    xhr.send();
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://picsum.photos/v2/list?limit=10', true);
    xhr.onload = function () {
      const resultParse = JSON.parse(xhr.response);
      let cards = ``;
      resultParse.forEach(elem => {
        const cardBlock = `
        <div class="card">
          <img src="${elem.download_url}" alt="fdsfsdf" class="card-image">
          <p class="author">${elem.author}</p>
        </div>
      `;
        cards += cardBlock;
      });
      result.innerHTML = cards;
    }
    xhr.send();
  }
});

