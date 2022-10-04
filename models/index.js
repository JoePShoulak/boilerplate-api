const User = require("./User");
const Ingredient = require("./Ingredient")
const Effect = require("./Effect")
const Potion = require("./Potion")

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

Effect.belongsToMany(Ingredient, {
    foreignKey: 'ingredient_id'
});

Ingredient.hasMany(Effect, {
    foreignKey: 'ingredient_id'
});

// create associations
module.exports = { User, Ingredient, Effect, Potion };

