// eslint-disable-next-line no-unused-vars
var gameImages = ['/images/apple.jpg', '/images/banana.jpg'];

// eslint-disable-next-line no-unused-vars
var $cardGameUl = document.querySelector('#card-game');

// eslint-disable-next-line no-unused-vars
function renderCardGame() {
  var li = document.createElement('li');
  li.className = 'col-third';
  var img = document.createElement('img');
  li.appendChild(img);

  return li;
}

const $playbutton = document.querySelector('.play-button');
function playHandler() {
  renderCardGame();
}
$playbutton.addEventListener('click', playHandler);
