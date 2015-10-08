'use strict';

var url = window.location.href;

$(function() {

  $('#name1').click(function() {
    console.log(url);
    $.get(url + 'adjective', function(response) {
      $('#adjective').text(response.word);
    });
  });
});

$(function() {

  $('#name2').click(function() {
    $.get(url + 'verb', function(response) {

      $('#verb').text(response.word);
    });
  });
});

$(function() {

  $('#name3').click(function() {
    $.get(url + 'noun', function(response) {
      $('#noun').text(response.word);
    });
  });
});

$(function() {
  $('#name').submit(function(e) {
    e.preventDefault();
    var inputValue = $('input:text').val();
    var wordArray = inputValue.split(':');
    if (wordArray[1] === undefined) {
      alert('Please input as format \'type:word\', e.g \'verb:run\', \'noun:peach\', \'adj:fat\'');
      $('input:text').val('');
      return;
    }

    var wordKey = wordArray[0];
    if (wordKey === 'adj') {
      $.post(url + 'adjective', wordArray[1], function(response) {
        $('#word').text(response.result);
        $('input:text').val('');
      });
    } else if (wordKey === 'verb') {
      $.post(url + 'verbs', wordArray[1], function(response) {
        $('#word').text(response.result);
        $('input:text').val('');
      });
    } else if (wordKey === 'noun') {
      $.post(url + 'nouns', wordArray[1], function(response) {
        $('#word').text(response.result);
        $('input:text').val('');
      });
    }
  });
});

