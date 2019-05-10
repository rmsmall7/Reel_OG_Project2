 // displayMovieInfo function re-renders the HTML to display the appropriate content
//  function displayMovieInfo() {

//   var movie = $(this).attr("data-name");
//   var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=9d39ac9c";

  // Creating an AJAX call for the specific movie button being clicked
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {

    // Creating a div to hold the movie
    // var movieDiv = $("<div class='movie'>");

    // Retrieving the URL for the image
    // var imgURL = response.Poster;

    // Creating an element to hold the image
    // var image = $("<img>").attr("src", imgURL);

    // Appending the image
    // movieDiv.append(image);

    // Putting the entire movie above the previous movies
//     $("#movies-view").prepend(movieDiv);
//   });

// }
 
 
 // Function for displaying movie data
//  function renderButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
//   $("#buttons-view").empty();
// }

// This function handles events where a movie button is clicked
// $("#submit-btn").on("click", function(event) {
//   event.preventDefault();
  // This line grabs the input from the textbox
  // var movie = $("#movie-input").val().trim();

  // Adding movie from the textbox to our array
  // movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
//   renderButtons();
// });

// Adding a click event listener to all elements with a class of "movie-btn"
// $(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the intial buttons
// renderButtons();


// Get references to page elements
//var $exampleText = $("#example-text");
//var $exampleDescription = $("#example-description");
//var $submitBtn = $("#submit");
//var $exampleList = $("#example-list");


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
// var refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     var $examples = data.map(function (example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function () {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function () {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);


// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDWIam8b85rg-wubn3YGl5BWTTGg3oGa7E",
//     authDomain: "reel-ogs.firebaseapp.com",
//     databaseURL: "https://reel-ogs.firebaseio.com",
//     projectId: "reel-ogs",
//     storageBucket: "reel-ogs.appspot.com",
//     messagingSenderId: "274209997779",
//     appId: "1:274209997779:web:76c20c22f7e6877e"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>
