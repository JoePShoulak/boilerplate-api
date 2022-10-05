const { Potion } = require('../models');

const potionData = [
  {
    name: '',
    effect1: ''
  },
];

const seedPotions = () => Potion.bulkCreate(potionData);

module.exports = seedPotions;
