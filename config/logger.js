const winston = require('winston');
// var { Loggly } = require('winston-loggly-bulk');

const logger = winston.createLogger({
  transports: [
    // new Loggly({
    //   token: '5b38e875-adf0-4936-b315-87b4dcaf3035',
    //   subdomain: 'appycodes',
    //   tags: ['Winston-NodeJS'],
    //   json: true,
    // }),
    // new winston.transports.Console({
    //   level: 'info',
    //   format: winston.format.combine(
    //     winston.format.timestamp(),
    //     winston.format.json()
    //   ),
    // }),
    new winston.transports.File({
      filename: 'debug.log',
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
  ],
});
// winston.add(
//   new Loggly({
//     token: '5b38e875-adf0-4936-b315-87b4dcaf3035',
//     subdomain: 'appycodes',
//     tags: ['Winston-NodeJS'],
//     json: true,
//   })
// );
module.exports = logger;
