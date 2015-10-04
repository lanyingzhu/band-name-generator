$(function () {

  $('#name1').click(function () {
    $.get("http://localhost:3000/adjective", function (response) {

      $('#adjective').text(response.word);
    });
  });
});

$(function () {

  $('#name2').click(function () {
    $.get("http://localhost:3000/verb", function (response) {

      $('#verb').text(response.word);
    });
  });
});

$(function () {

  $('#name3').click(function () {
    $.get("http://localhost:3000/noun", function (response) {
      $('#noun').text(response.word);
    });
  });
});

$(function () {
  $('#name4').submit(function (e) {
    e.preventDefault();
    var inputValue = $("input:text").val();
    $.post("http://localhost:3000/adjective", inputValue, function (response) {
      $('#adj').text(response.result);
      $('input:text').val('');
    });
  });
});
