// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Potion extends Model {}

// set up fields and rules for Product model
Potion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    effect1_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'effect',
          key: 'id'
        },
        allowNull: false
    },
    effect2_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'effect',
          key: 'id'
        }
    },
    effect3_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'effect',
          key: 'id'
        }
    },
    effect4_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'effect',
          key: 'id'
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'potion',
  }
);

module.exports = Potion;