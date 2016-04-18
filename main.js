$(document).on('ready', function() {
  console.log("sanity check");

  $('.projectImg').hide();

  //////////////////////////////
  /// Hide all project pages ///
  //////////////////////////////

  // Hide Dot & Boxes Game
  $('.dot-page').hide();


  ////////////////////////////////////////////
  /// Show image on box with project name ///
  ///////////////////////////////////////////

  // Dot & Boxes Game
  $('#mainDot').mouseenter(function() {
    $('#dotGame').show();
  });

  $('#mainDot').mouseleave(function() {
    $('#dotGame').hide();
  });

  // Bananas & Butterflies
  $('#mainTranslator').mouseenter(function() {
    $('#translator').show();
  });

  $('#mainTranslator').mouseleave(function() {
    $('#translator').hide();
  });

  // Active Allies
  $('#mainAllies').mouseenter(function() {
    $('#allies').show();
  });

  $('#mainAllies').mouseleave(function() {
    $('#allies').hide();
  });

  // Todo
  $('#mainTodo').mouseenter(function() {
    $('#todo').show();
  });

  $('#mainTodo').mouseleave(function() {
    $('#todo').hide();
  });

  // Random Meal Generator
  $('#mainMeal').mouseenter(function() {
    $('#meal').show();
  });

  $('#mainMeal').mouseleave(function() {
    $('#meal').hide();
  });

  // WAR
  $('#mainWar').mouseenter(function() {
    $('#war').show();
  });

  $('#mainWar').mouseleave(function() {
    $('#war').hide();
  });

  // Rock Paper Scissors
  $('#mainRock').mouseenter(function() {
    $('#rock').show();
  });

  $('#mainRock').mouseleave(function() {
    $('#rock').hide();
  });

  //////////////////////////////////
  /// Show project when clicked ///
  /////////////////////////////////

  // Show Dots & Boxes Game
  $('#mainDot').click(function() {
    $('.home-page').hide();
    $('.dot-page').show();
  });

  $('i').click(function() {
    $('.dot-page').hide();
    $('.home-page').show();
  });
  

});

