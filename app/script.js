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
    var inputValue = $("#name4 input:text").val();
    $.post("http://localhost:3000/adjective", inputValue, function (response) {
      $('#adj').text(response.result);
      $('#name4 input:text').val('');
    });
  });
});

$(function () {
  $('#name5').submit(function (e) {
    e.preventDefault();
    var inputValue = $("#name5 input:text").val();
    $.post("http://localhost:3000/verbs", inputValue, function (response) {
      $('#verbs').text(response.result);
      $('#name5 input:text').val('');
    });
  });
});

$(function () {
  $('#name6').submit(function (e) {
    e.preventDefault();
    var inputValue = $("#name6 input:text").val();
    $.post("http://localhost:3000/nouns", inputValue, function (response) {
      $('#nouns').text(response.result);
      $('#name6 input:text').val('');
    });
  });
});
