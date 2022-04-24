const Sequelize = require('sequelize');
const config = require('../config/config');

console.log('database is :', config.properties.db.database);
const sequelize = new Sequelize(
  config.properties.db.database,
  config.properties.db.username,
  config.properties.db.password,

  {
    logging: false,
    host: config.properties.db.host,
    dialect: config.properties.db.dialect,
    // timezone: '+05:30',
    // dialectOptions: { useUTC: false },
    // database:process.env.database,
    // username:process.env.username,
    // password:process.env.password,
    pool: {
      max: 50,
      min: 0,
      idle: 15000,
      acquire: 120000,
    },
  }
);

sequelize.authenticate().then((err) => {
  if (err) {
    console.log('Unable to connect to the database : ', err);
  } else {
    console.log(
      'Connection to the mysql Database is Established Successfully '
    );
  }
});

module.exports = sequelize;
