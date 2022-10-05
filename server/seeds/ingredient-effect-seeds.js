const { IngredientEffect } = require('../models');
const effectSeeds = require('./effect_data.json')
const ingredientSeeds = require('./ingredient_data.json')

const ingredientEffectData = []

effectSeeds.forEach(effect => {
  ingredientSeeds.forEach(ingredient => {
    const currentObj = { effect_id: effect.id, ingredient_id: ingredient.id }
    switch (effect.name) {
      case ingredient.effect1_name:
        if (!ingredientEffectData.includes(currentObj)) {ingredientEffectData.push(currentObj)}
      case ingredient.effect2_name:
        if (!ingredientEffectData.includes(currentObj)) {ingredientEffectData.push(currentObj)}
      case ingredient.effect3_name:
        if (!ingredientEffectData.includes(currentObj)) {ingredientEffectData.push(currentObj)}
      case ingredient.effect4_name:
        if (!ingredientEffectData.includes(currentObj)) {ingredientEffectData.push(currentObj)}
      default: return
    } 
  })
})

const seedIngredientEffects = () => IngredientEffect.bulkCreate(ingredientEffectData);

module.exports = seedIngredientEffects;