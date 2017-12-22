// $(document).ready(function() {

// });

$(".delete-link").click(function(e) {
  e.preventDefault();
  console.log("this is href: " + $(this).attr("href"));
  $.ajax({
    url: $(this).attr("href"),
    method: 'DELETE'
  }).done(function(data) {
    console.log("Success");
    window.location.href="/teams";
  });
});

/*

$('.delete-link').on('click', function(e) {
  e.preventDefault();
  var teamElement = $(this);
  var teamUrl = teamElement.attr('href');
  $.ajax({
    method: 'DELETE',
    url: teamUrl
  }).done(function(data) {
    // get data returned from the DELETE route
    console.log(data);

    // do stuff when the DELETE action is complete
    teamElement.remove();

    // or, you can redirect to another page
    window.location = '/teams';
  });
});

console.log("routing.js works");

$(".delete-link").click(function(e) {
  e.preventDefault();
  $.ajax({
    url: $(this).attr("href"),
    method: 'DELETE'
  }).done(function(data) {
    window.location.href="/articles";
  });
});

*/