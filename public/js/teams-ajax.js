$(document).ready(function() {

  $(".delete-link").click(function(e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr("href"),
      method: 'DELETE'
    }).done(function(data) {
      window.location.href="/teams";
    });
  });

  $(".edit-form").submit(function(e) {
    e.preventDefault();
    console.log("edit clicked");
    $.ajax({
      url: $(this).attr('action'),
      method: 'PUT',
      data: {
        name: $("#new-name").val(),
        members: $("#members").val()
      }
    }).done(function(data) {
      console.log("got to the promise");
      window.location.href="/teams";
    });
  });

});

