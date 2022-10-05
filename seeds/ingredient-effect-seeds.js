const { IngredientEffect } = require('../models');

const ingredientEffectData = [
  {
    ingredient_id: 1,
    effect_id: 1,
  },
//   {
//     ingredient_id: 1,
//     effect_id: 7,
//   },
//   {
//     ingredient_id: 1,
//     effect_id: 8,
//   },
//   {
//     ingredient_id: 2,
//     effect_id: 6,
//   },
//   {
//     ingredient_id: 3,
//     effect_id: 1,
//   },
//   {
//     ingredient_id: 3,
//     effect_id: 3,
//   },
//   {
//     ingredient_id: 3,
//     effect_id: 4,
//   },
//   {
//     ingredient_id: 3,
//     effect_id: 5,
//   },
//   {
//     ingredient_id: 4,
//     effect_id: 1,
//   },
//   {
//     ingredient_id: 4,
//     effect_id: 2,
//   },
//   {
//     ingredient_id: 4,
//     effect_id: 8,
//   },
//   {
//     ingredient_id: 5,
//     effect_id: 3,
//   },
];

const seedIngredientEffects = () => IngredientEffect.bulkCreate(ingredientEffectData);

module.exports = seedIngredientEffects;
