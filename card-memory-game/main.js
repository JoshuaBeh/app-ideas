// eslint-disable-next-line no-unused-vars
var gameImages = [];

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
