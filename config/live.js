module.exports = {
  db: {
    database: process.env.LIVE_DATABASE,
    host: process.env.LIVE_HOST,
    username: process.env.LIVE_USER_NAME,
    password: process.env.LIVE_PASSWORD,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
};
