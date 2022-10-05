// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Effect extends Model {}

// set up fields and rules for Product model
Effect.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    base_mag: {
      type: DataTypes.INTEGER,
      default: null
    },
    base_dur: {
      type: DataTypes.FLOAT,
      default: null
    },
    base_cost: {
      type: DataTypes.FLOAT,
      default: null
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'effect',
  }
);

module.exports = Effect;