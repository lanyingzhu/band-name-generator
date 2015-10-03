$(function () {
  $('#name').click(function () {
    $.get("http://localhost:3000/adjective", function (response) {
      var resp = JSON.parse(response);
      $('#adjective').text(resp.word);
    });
  });
});
