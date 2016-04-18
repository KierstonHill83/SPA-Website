$(document).on('ready', function() {
  console.log("sanity check");

  $('.projectImg').hide();

  //////////////////////////////
  /// Hide all project pages ///
  //////////////////////////////

  $('.dot-page').hide();
  $('.translator-page').hide();
  $('.allies-page').hide();


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
    $('body').css('background-color', '#E4E81E');

    $('.dot-img1').show();
    $('.dot-img2').hide();
    $('.dot-img3').hide();
  });

  // Show Bananas & Butterflies Page
  $('#mainTranslator').click(function() {
    $('.home-page').hide();
    $('.translator-page').show();
    $('body').css('background-color', '#34E842');

    // $('.dot-img1').show();
    // $('.dot-img2').hide();
    // $('.dot-img3').hide();
  });

  // Show Active Allies
  $('#mainAllies').click(function() {
    $('.home-page').hide();
    $('.allies-page').show();
    $('body').css('background-color', '#2597E8');

    // $('.dot-img1').show();
    // $('.dot-img2').hide();
    // $('.dot-img3').hide();
  });

  /////////////////////////////////
  /// Show more project images ///
  ////////////////////////////////

  $('.dot-left').click(function() {
    $('.dot-img1').hide();
    $('.dot-img3').hide();
    $('.dot-img2').show();
  });

  $('.dot-right').click(function() {
    $('.dot-img1').hide();
    $('.dot-img2').hide();
    $('.dot-img3').show();
  });

  ////////////////////
  /// Back Button ///
  ///////////////////

  $('.back-button').click(function() {
    $('.dot-page').hide();
    $('.translator-page').hide();
    $('.allies-page').hide();
    $('.home-page').show();
    $('body').css('background-color', '#707570');
  });
  

});


function dotsBoxes() {

}

