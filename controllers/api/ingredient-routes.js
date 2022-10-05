const router = require('express').Router();
const { Ingredient, Effect, IngredientEffect } = require('../../models');

// get all ingredients
router.get('/', (req, res) => {
    // find all ingredients
    Ingredient.findAll({
        attributes: [
            'id',
            'name',
            'weight',
            'base_value'
        ],
        include: [
            {
                model: Effect,
                attributes: ['name'],
                through: IngredientEffect,
                as: 'ingredient_with_effect'
            }
        ]
    })
        .then(dbIngredientData => res.json(dbIngredientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one ingredient
router.get('/:id', (req, res) => {
    // find a single ingredient by its `id`
    Ingredient.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'weight',
            'base_value',
            'category_id'
        ],
        include: [
            {
                model: Effect,
                attributes: ['name'],
                through: IngredientEffect,
                as: 'ingredient_with_effect'
            }
        ]
    })
        .then(dbIngredientData => {
            if (!dbIngredientData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbIngredientData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;
