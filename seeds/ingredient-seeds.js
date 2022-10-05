const { Ingredient } = require('../models');

const ingredientData = [
  {
    name: 'Blisterwort',
  },
  {
    name: 'Wheat',
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;
