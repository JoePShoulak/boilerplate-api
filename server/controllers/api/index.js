const router = require('express').Router();
const ingredientRoutes = require('./ingredient-routes');
const effectRoutes = require('./effect-routes');

router.use('/ingredients', ingredientRoutes);
router.use('/effects', effectRoutes);

module.exports = router;
