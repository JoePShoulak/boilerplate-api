const { Effect } = require('../models');

const effectData = [
  {
    name: 'damage stamina',
    ingredient_id: 1
  },
  {
    name: 'frenzy',
    ingredient_id: 1
  },
  {
    name: 'restore health',
    ingredient_id: 1
  },
  {
    name: 'restore health',
    ingredient_id: 2
  },
  {
    name: 'Fortify health',
    ingredient_id: 2
  },
  {
    name: 'fortify smithing',
    ingredient_id: 1
  },
  {
    name: 'damage stamina regen',
    ingredient_id: 2
  },
  {
    name: 'lingering damage magicka',
    ingredient_id: 2
  },
];

const seedEffects = () => Effect.bulkCreate(effectData);

module.exports = seedEffects;
