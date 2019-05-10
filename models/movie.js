module.exports = function (sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    movie_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    movie_poster: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    movie_year: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    watched: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {

  });

  // Return the model we defined.
  return Movie;
};

 // displayMovieInfo function re-renders the HTML to display the appropriate content
 function displayMovieInfo() {

  var movie = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=9d39ac9c";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    // Creating a div to hold the movie
    var movieDiv = $("<div class='movie'>");

    // Retrieving the URL for the image
    var imgURL = response.Poster;

    // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);

    // Appending the image
    movieDiv.append(image);

    // Putting the entire movie above the previous movies
    $("#movies-view").prepend(movieDiv);
  });

}
 
 
 // Function for displaying movie data
 function renderButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();
}

// This function handles events where a movie button is clicked
$("#submit-btn").on("click", function(event) {
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