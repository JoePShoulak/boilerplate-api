const User = require("./User");
const Ingredient = require("./Ingredient")
const Effect = require("./Effect")
const Potion = require("./Potion")
const IngredientEffect = require("./IngredientEffect")

/* Every USER has
   - MANY favorite Potions
   - MANY favorite Ingredients
   - MANY favorite Effects
   
   Every INGREDIENT has
   - MANY Effects
   
   Every EFFECT has
   - IDK?
   
   Every POTION has
   - MANY Ingredients
   - MANY Effects 
*/



Ingredient.belongsToMany(Effect, {
    through: IngredientEffect,
    as: 'ingredient_with_effect',
    foreignKey: 'ingredient_id'
  });
  
  Effect.belongsToMany(Ingredient, {
    through: IngredientEffect,
    as: 'ingredient_with_effect',
    foreignKey: 'effect_id'
  });

// create associations
module.exports = { User, Ingredient, Effect, Potion, IngredientEffect };

