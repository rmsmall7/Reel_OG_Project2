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
   
  }, {

      });

  // Return the model we defined.
  return Movie;
};
  