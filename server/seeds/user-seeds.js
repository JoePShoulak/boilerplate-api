const { User } = require('../models');

const userData = [
  {
    username: 'Dizzy',
    email: 'dizzy@gmail.com',
    password: 'password'
  },
  {
    username: 'KatyKedi',
    email: 'katykat5bros@gmail.com',
    password: 'password'
  },
  {
    username: 'JoeShmo',
    email: 'joe@gmail.com',
    password: 'password'
  },
  {
    username: 'Gary',
    email: 'gary@gmail.com',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
