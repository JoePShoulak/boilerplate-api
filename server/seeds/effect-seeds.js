const { Effect } = require('../models');

const effectData = [
  {
    name: 'damage stamina',
  },
  {
    name: 'frenzy',
  },
  {
    name: 'restore health',
  },
  {
    name: 'fortify health',
  },
  {
    name: 'fortify smithing',
  },
  {
    name: 'damage stamina regen',
  },
  {
    name: 'lingering damage magicka',
  },
];

const seedEffects = () => Effect.bulkCreate(effectData);

module.exports = seedEffects;
