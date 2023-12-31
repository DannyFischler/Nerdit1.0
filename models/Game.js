const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    // other attributes...
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "game",
  }
);

module.exports = Game;
