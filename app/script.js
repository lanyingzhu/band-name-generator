$(function () {

  $('#name').click(function () {
    $.get("http://localhost:3000/adjective", function (response) {

      $('#adjective').text(response);
    });
  });
});
