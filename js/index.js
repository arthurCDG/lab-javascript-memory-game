import { MemoryGame } from './memory.js';

const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  memoryGame.shuffleCards();

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // console.log(card.getAttribute('data-card-name'));
      card.firstElementChild.classList.toggle('back');
      card.firstElementChild.classList.toggle('front');
      card.lastElementChild.classList.toggle('back');
      card.lastElementChild.classList.toggle('front');

      if (!document.querySelector('.returned')) {
        card.classList.add('returned');
        console.log('Premier if');
      } else if (
        memoryGame.checkIfPair(
          document.querySelector('.returned').getAttribute('data-card-name'),
          card.getAttribute('data-card-name')
        )
      ) {
        console.log('Deuxième if');
        document.querySelector('.returned').classList.toggle('blocked');
        document.querySelector('.returned').classList.toggle('returned');
        card.classList.toggle('blocked');
      } else {
        setTimeout(() => {
          console.log('Troisième if');
          document
            .querySelector('.returned')
            .firstElementChild.classList.toggle('back');
          document
            .querySelector('.returned')
            .firstElementChild.classList.toggle('front');
          document
            .querySelector('.returned')
            .lastElementChild.classList.toggle('back');
          document
            .querySelector('.returned')
            .lastElementChild.classList.toggle('front');
          document.querySelector('.returned').classList.toggle('returned');
          card.firstElementChild.classList.toggle('back');
          card.firstElementChild.classList.toggle('front');
          card.lastElementChild.classList.toggle('back');
          card.lastElementChild.classList.toggle('front');
        }, 1000);
      }
      document.getElementById('pairs-clicked').innerText =
        memoryGame.pairsClicked;
      document.getElementById('pairs-guessed').innerText =
        memoryGame.pairsGuessed;
      if (memoryGame.checkIfFinished()) return alert('You won!');
    });
  });
});
