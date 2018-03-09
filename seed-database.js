'use strict';
const mongoose = require('mongoose');

const { DATABASE_URL } = require('./config');
const { Cheese } = require('./models/cheese');
const seedCheese = [
  {name: 'Bath Blue'},
  {name: 'Barkham Blue'},
  {name: 'Buxton Blue'},
  {name: 'Cheshire Blue'},
  {name: 'Devon Blue'},
  {name: 'Dorset Blue Vinney'},
  {name: 'Dovedale'},
  {name: 'Exmoor Blue'},
  {name: 'Harbourne Blue'},
  {name: 'Lanark Blue'},
  {name: 'Lymeswold'},
  {name: 'Oxford Blue'},
  {name: 'Shropshire Blue'},
  {name: 'Stichelton'},
  {name: 'Stilton'},
  {name: 'Blue Wensleydale'},
  {name: 'Yorkshire Blue'}
];

mongoose
  .connect(DATABASE_URL)
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => Cheese.insertMany(seedCheese))
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });