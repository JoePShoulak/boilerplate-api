const { Effect } = require('../models');
const seeds = require('./effect_data.json')

const effectData = seeds.map(effect => {
  console.log(effect.base_mag)
  return {
    id: effect.id,
    name: effect.name,
    base_cost: effect.base_cost ? effect.base_cost : null,
    base_dur: effect.base_dur ? effect.base_dur : null,
    base_mag: effect.base_mag ? effect.base_mag : null
  }
});

const seedEffects = () => Effect.bulkCreate(effectData);

module.exports = seedEffects;
