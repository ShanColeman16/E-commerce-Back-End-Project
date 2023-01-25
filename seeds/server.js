const sequelize = require('../config/connection.js');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
}

seedDatabase();