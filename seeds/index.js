const seedUsers = require('./user-seeds');
const seedEffects = require('./effect-seeds.js');
const seedPotions = require('./potion-seeds');
const seedIngredients = require('./ingredient-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedEffects();
  console.log('\n----- EFFECTS SEEDED -----\n');
  await seedPotions();
  console.log('\n----- POTIONS SEEDED -----\n');
  await seedIngredients();
  console.log('\n----- INGREDIENTS SEEDED -----\n');
  process.exit(0);
};

seedAll();