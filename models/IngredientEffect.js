const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class IngredientEffect extends Model {}

IngredientEffect.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ingredient',
        key: 'id'
      }
    },
    effect_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'effect',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient_effect',
  }
);

module.exports = IngredientEffect;
