// 2^7, 2^6, 2^5, 2^4, 2^3, 2^2, 2, 1
// check user inputs against above and add the numbers
var $input = document.querySelector('input');
var $button = document.querySelector('.convert-button');
var $decimalResult = document.querySelector('.decimal-result');
var binaryString = '';
function inputHandler(event) {
  for (var i = 0; i < event.target.value.length; i++) {
    if (event.target.value[i] === '0' || event.target.value[i] === '1') {
      $input.classList.remove('red-border');
    } else {
      event.target.value = event.target.value.slice(0, i);
      $input.classList.add('red-border');
      break;
    }
  }
  if (event.target.value.length > 8) {
    event.target.value = event.target.value.slice(0, 8);
  } else {
    binaryString = event.target.value;
  }
  return binaryString;
}
$input.addEventListener('input', inputHandler);

function buttonHandler(event) {
  var decimalValue = 0;
  var currentExponent = 0;
  for (var i = binaryString.length - 1; i >= 0; i--) {
    if (binaryString[i] === '1') {
      decimalValue = decimalValue + Math.pow(2, currentExponent);
    }
    currentExponent++;
  }
  $decimalResult.textContent = 'Result: ' + decimalValue;
  $decimalResult.classList.remove('hidden');
}
$button.addEventListener('click', buttonHandler);
