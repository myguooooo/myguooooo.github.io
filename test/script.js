$(function() {
  const $input = $('input[type=range]');
  const $output = $('output');
  const valueMapping = [
    '🕐',
    '🕑',
    '🕒',
    '🕓',
    '🕔',
    '🕕',
    '🕖',
    '🕗',
    '🕘',
    '🕙',
    '🕚',
    '🕛'
  ];
  
  function updateOutput(value) {
    $output[0].textContent = valueMapping[value - 1];  
  }
  
  $input.on('input', function(e) {
    updateOutput(e.target.value);
  });
  
  $input.rangeslider({
    polyfill: false
  });
  
  updateOutput($input[0].value);
});