'use strict';

let button = document.querySelector('.button');
let result = document.querySelector('.result');
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem('localSession') != null) {
    imgRander();
  }
});
function imgRander() {
  let data = JSON.parse(localStorage.getItem('localSession'))
  let cards = ``;
  data.forEach(elem => {
    const cardBlock = `
                    <div class="card">
                      <img src="${elem.url}" alt="fdsfsdf" class="card-image">
                    </div>
                    `;
    cards += cardBlock;
  });
  result.innerHTML = cards;
}
button.addEventListener('click', () => {
  const valuePageNumber = +document.querySelector('.input').value;
  const valueLimit = +document.querySelector('.input2').value;
  const checkDontPageNumber = (valuePageNumber < 1 && valuePageNumber > 10) || isNaN(valuePageNumber);
  const checkValueNoLimit = (valueLimit < 1 && valueLimit > 10) || isNaN(valueLimit);
  const checkPageNumber = (valuePageNumber >= 1 && valuePageNumber <= 10 && !isNaN(valuePageNumber));
  const checkValueLimit = (valueLimit >= 1 && valueLimit <= 10);
  if (checkDontPageNumber) {
    console.log('Номер страницы вне диапазона от 1 до 10');
  } else if (checkValueNoLimit) {
    console.log('Лимит вне диапазона от 1 до 10');
  } else if (checkDontPageNumber && checkValueNoLimit) {
    console.log('Номер страницы и лимит вне диапазона от 1 до 10');
  } else if (checkPageNumber && checkValueLimit) {
    fetch(`https://picsum.photos/v2/list?page=${valuePageNumber}&limit=${valueLimit}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        let arrDataImage = [];
        data.forEach(elem => {
          arrDataImage.push({ url: elem.download_url });
        });
        localStorage.setItem('localSession', JSON.stringify(arrDataImage));
        imgRander();
      })
      .catch((error) => {
        console.log(error);
      })
  }
});


