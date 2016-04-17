$(document).on('ready', function() {
  console.log("sanity check");

  $('img').hide();

  $('#mainDot').mouseenter(function() {
    $('#dotGame').show();
  });

  $('#mainDot').mouseleave(function() {
    $('#dotGame').hide();
  });

  

});

