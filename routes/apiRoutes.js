var db = require("../models");

module.exports = function(app) {
  // Get all movies
  app.get("/api/movies", function(req, res) {
    db.Movies.findAll({}).then(function(dbMovies) {
      res.json(dbMovies);
    });
  });

  // Create a new movie
  app.post("/api/movies", function(req, res) {
    db.Movies.create(req.body).then(function(dbMovies) {
      res.json(dbMovies);
    });
  });

  // Delete an movie by id
  app.delete("/api/movies/:id", function(req, res) {
    db.Movies.destroy({ where: { id: req.params.id } }).then(function(dbMovies) {
      res.json(dbMovies);
    });
  });
};
