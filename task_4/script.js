'use strict';

let button = document.querySelector('.button');
let result = document.querySelector('.result');

button.addEventListener('click', () => {
  const valueInput = +document.querySelector('.input').value;
  const valueInput2 = +document.querySelector('.input2').value;

  console.log(valueInput);
  console.log(valueInput2);

  if ((valueInput < 100 || valueInput > 300 || isNaN(valueInput)) && (valueInput2 < 100 || valueInput2 > 300 || isNaN(valueInput2))) {
    console.log('одно из чисел вне диапазона от 100 до 300');
  } else if ((valueInput >= 100 && valueInput <= 300) && (valueInput2 >= 100 && valueInput2 <= 300)) {
    fetch("https://picsum.photos/200/300")
      .then((response) => {
        const cardBlock = `
        <div class="card">
          <img src="${response.url}" alt="fdsfsdf" class="card-image">
        </div>
        `;

        result.innerHTML = cardBlock;
      })
      .catch(() => {
        console.log('error');
      });
  }
});

