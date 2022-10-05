const { Ingredient } = require('../models');
const seeds = require('./ingredient_data.json')

const ingredientData = seeds.map(ingredient => {
  return {
    id: ingredient.id,
    name: ingredient.name,
    weight: ingredient.weight,
    value: ingredient.value,
  }
});


const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;
