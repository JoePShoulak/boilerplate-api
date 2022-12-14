const router = require('express').Router();
const { Ingredient, Effect, IngredientEffect } = require('../../models');

// get all effects
router.get('/', (req, res) => {
  // find all effects
  Effect.findAll({
    attributes: [
        'id',
        'name',
    ],
    include: [
      {
        model: Ingredient,
        attributes: ['name'],
        through: IngredientEffect,
        as: 'ingredient_with_effect'
      }
    ]
  })
  .then(dbEffectData => res.json(dbEffectData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get all ingredients with certain effect
router.get('/:id', (req, res) => {
    // find all ingredients
    Effect.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'name'
        ],
        include: [
            {
                model: Ingredient,
                attributes: [
                    'id',
                    'name',
                    'weight',
                    'base_value'],
                through: IngredientEffect,
                as: 'ingredient_with_effect'
            }
        ]
    })
        .then(dbEffectData => res.json(dbEffectData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

});

module.exports = router;
