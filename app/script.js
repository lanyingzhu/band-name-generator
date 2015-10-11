'use strict';

$(function() {

  $('#name1').click(function() {
    $.get('adjective', function(response) {
      $('#adjective').text(response.word);
      $('#adjective').css('color', 'red');
      $('#favAdj').text(response.favadj);
      $('#favAdj').css('color', 'red');
    });
  });

  $('#name2').click(function() {
    $.get('verb', function(response) {
      $('#verb').text(response.word);
      $('#verb').css('color', 'blue');
      $('#favVerb').text(response.favverb);
      $('#favVerb').css('color', 'blue');
    });
  });

  $('#name3').click(function() {
    $.get('noun', function(response) {
      $('#noun').text(response.word);
      $('#noun').css('color', 'green');
      $('#favNoun').text(response.favnoun);
      $('#favNoun').css('color', 'green');
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
      $.post('adjective', wordArray[1], function(response) {
        $('#word').text(response.result);
        $('#word').css('color', 'pink');
        $('input:text').val('');
      });
    } else if (wordKey === 'verb') {
      $.post('verb', wordArray[1], function(response) {
        $('#word').text(response.result);
        $('#word').css('color', 'pink');
        $('input:text').val('');
      });
    } else if (wordKey === 'noun') {
      $.post('noun', wordArray[1], function(response) {
        $('#word').text(response.result);
        $('#word').css('color', 'pink');
        $('input:text').val('');
      });
    }
  });
});

