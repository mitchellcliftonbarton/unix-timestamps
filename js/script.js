window.setInterval(function() {
  var date = Date.now();
  $('.stamp1').text(date - 2);
  $('.stamp2').text(date - 1);
  $('.stamp3').text(date);
  $('.stamp4').text(date + 1);
  $('.stamp5').text(date + 2);
}, 10);

var colors = ['#dabdbd',
              '#ff0000',
              '#c54492',
              '#9471ab',
              '#4d077b',
              '#004eff',
              '#9ea3af',
              '#000000',
              '#0fc0d2',
              '#22ab3f',
              '#e4ef43',
              '#daaa23',
              '#8a7f62',
              '#6f6f6f',
              '#133f65']

window.setInterval(function() {
  var rando = Math.random() * 40;
  rando = Math.floor(rando);
  clr = colors[rando % colors.length]
  $('body').css('background', clr);
}, 1000);
