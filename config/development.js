module.exports = {
  db: {
    database: process.env.DEV_DATABASE,
    host: process.env.DEV_HOST,
    username: process.env.DEV_USER_NAME,
    password: process.env.DEV_PASSWORD,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },

  //    jwt : {
  //        secret: 'tgsecret'

  //    //     database:"fongtbri_foodapp",
  //    //     host:"www.sittongtourismfestival.com",
  //    //     port: "5432",
  //    //     dialect: "postgres",
  //    //     username: "fongtbri_fxnveqj",
  //    //     password: "{}q]M4?Pm0l-"
  //    // },
  //    // jwt : {
  //    //     secret: 'tgsecret'
  //    }
};
