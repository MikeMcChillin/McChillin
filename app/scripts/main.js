'use strict';

$(document).ready(function() {
  var randomColor, changeColor, colorT, scrollio;

  colorT = 0;

  randomColor = function() {
    colorT = Math.floor(Math.random() * 10);
  };
  randomColor();

  changeColor = function() {
    document.body.className = 'color' + colorT % 10;
    colorT++;
    setTimeout(changeColor, 3000);
  };
  changeColor();

  $.typer.options.highlightSpeed = 15;
  $.typer.options.typeSpeed = 50;
  $.typer.options.typerInterval = 6000;
  // $.typer.options.typerInterval = 3000;
  $.typer.options.typeDelay = 50;
  $.typer.options.clearDelay = 1000;
  $('[data-typer-targets]').typer();

  scrollio = function(target, speed) {
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, speed, 'easeOutExpo');
  };

  $('.workheader').on('click', function(e) {
    var target;
    e.preventDefault();
    target = $(this).attr('href');
    scrollio(target, 800);
  });

  $('[data-gtm-category]').on('click', function() {
    var category = $(this).data('gtm-category');
    var action = $(this).data('gtm-action');
    var label = $(this).data('gtm-label');
    gtmClickTrack(category, action, label);
  });

  // Send the info to Google Analytics
  var gtmClickTrack = function(category, action, label) {
    ga('send', {
      hitType: 'event',
      eventCategory: category,
      eventAction: action,
      eventLabel: label
    });
  };

  console.log('%c ✌', 'font-size:10em;');

});
