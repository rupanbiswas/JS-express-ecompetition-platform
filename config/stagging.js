module.exports = {
  db: {
    database: process.env.STAGGING_DATABASE,
    host: process.env.STAGGING_HOST,
    username: process.env.STAGGING_USER_NAME,
    password: process.env.STAGGING_PASSWORD,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
};
