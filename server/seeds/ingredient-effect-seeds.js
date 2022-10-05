const { IngredientEffect } = require('../models');
const effectSeeds = require('./effect_data.json')
const ingredientSeeds = require('./ingredient_data.json')

const ingredientEffectData = []

effectSeeds.forEach(effect => {
  ingredientSeeds.forEach(ingredient => {
    const currentObj = { effect_id: effect.id, ingredient_id: ingredient.id }
    const checkList = () => {  if (!ingredientEffectData.includes(currentObj)) {ingredientEffectData.push(currentObj)} }
    switch (effect.name) {
      case ingredient.effect1_name:
        checkList()
      case ingredient.effect2_name:
        checkList()
      case ingredient.effect3_name:
        checkList()
      case ingredient.effect4_name:
       checkList()
      default: return
    } 
  })
})

const seedIngredientEffects = () => IngredientEffect.bulkCreate(ingredientEffectData);

module.exports = seedIngredientEffects;