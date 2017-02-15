
$(document).ready(function(){
  $('h1').text('Click me!')

  var click = $('.switch button')
  click.on('click', function(){
    if (click.attr('class') === 'on'){
      click.attr('class', 'off')
      $('body').attr('class', 'dark');
    }
    else {
      click.attr('class', 'on')
      $('body').attr('class', 'light');
    }
  });

});
