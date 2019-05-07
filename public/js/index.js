// Get references to page elements
//var $exampleText = $("#example-text");
//var $exampleDescription = $("#example-description");
//var $submitBtn = $("#submit");
//var $exampleList = $("#example-list");

var movies = ['Avengers: Endgame', 'The Intruder', 'Little', 'Ugly Dolls'];

function displayMovieInfo() {

  var movie = $(this).attr('data-name');

  var queryURL = "https://www.omdbapi.com/?t=";
  // The API object contains methods for each kind of request we'll make
  //var API = {
  //saveExample: function(example) {
  //return $.ajax({
  //headers: {
  //"Content-Type": "application/json"
  //},
  //type: "POST",
  //url: "api/examples",
  //data: JSON.stringify(example)
  //});
  //},

  $.ajax({
    url: queryURL,
    method: "GET",
    data: {
      apikey: "trilogy"
    }
  }).then(function (response) {

    var movieDiv = $("<div class='movie'>");
    var rating = response.Rated;
    var pOne = $("<p>").text("Rating: " + rating);

    movieDiv.append(pOne);
    var released = response.Released;

    var pTwo = $("<p>").text("Released: " + released);

    movieDiv.append(pTwo);

    var plot = response.Plot;

    var pThree = $("<p>").text("Plot: " + plot);

    movieDiv.append(pThree);

    var imgURL = response.Poster;

    var image = $("<img>").attr("src", imgURL);

    movieDiv.append(image);

    $("#movies-view").prepend(movieDiv);
  });

}

function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < movies.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("movie-btn");
    // Adding a data-attribute
    a.attr("data-name", movies[i]);
    // Providing the initial button text
    a.text(movies[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where a movie button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#movie-input").val().trim();

  // Adding movie from the textbox to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
    //</script >
  //</div >
//</body >

//</html >



  //getExamples: function() {
   // return $.ajax({
    //  url: "api/examples",
   //   type: "GET"
   // });
  //},
//deleteExample: function(id) {
  //return $.ajax({
   // url: "api/examples/" + id,
  //  type: "DELETE"
  //});
//}
 // };

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function () {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
