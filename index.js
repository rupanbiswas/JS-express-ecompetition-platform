const express = require('express');

const app = express();
process.env.TZ = 'Asia/Calcutta';
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const dotenv = require('dotenv');

app.use(cors());
dotenv.config();

const config = require('./config/config');

config(process.env.DB_PLATFORM);
const logger = require('./config/logger');

const { errorHandler, notFound } = require('./middleware/errorHandler');
const authRoutes = require('./routes/User.routes');
const commonRoutes = require('./routes/common.routes');
const challenges = require('./routes/challenges.routes');
const bookings = require('./routes/bookings.routes');
const leaderBoard = require('./routes/leader_board.routes');
const progress = require('./routes/progress.routes');
const checkout = require('./routes/checkout.routes');
var scheduler = require('node-schedule');
scheduler.scheduleJob('0 15 0 * * *', function () {
  console.log('debug log cleared');
  fs.unlinkSync('./debug.log');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 8080;
require('dotenv').config();
let swaggerOptions;

// if (process.env.DB_PLATFORM == 'dev') {
  swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Melio v1 API',
        version: '1.0.0',
        description: 'Melio v1 API information',
        contact: {
          name: 'appycodes',
        },
        servers: [{ url: process.env.SERVER_ADDRESS }],
      },
      securityDefinitions: {
        Bearer: {
          ' name': 'Authorization',
          in: 'header',
          type: 'apiKey',
        },
      },
    },
    apis: ['./routes/*.js'],
  };
// }
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use((req, res, next) => {
  logger.info(req.body);
  const oldSend = res.send;

  res.send = function (data) {
    logger.info(JSON.parse(data));

    // eslint-disable-next-line prefer-rest-params
    oldSend.apply(res, arguments);
  };
  next();
});

// sentry  start
const Sentry = require('@sentry/node');

// Importing @sentry/tracing patches the global hub for tracing to work.
// eslint-disable-next-line no-unused-vars
const Tracing = require('@sentry/tracing');

Sentry.init({
  dsn: 'https://ff088fe2544345bf8a7d2a341f37bb14@o1059020.ingest.sentry.io/6047246',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(
  Sentry.Handlers.requestHandler({
    request: ['data'],
  })
);
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// All controllers should live here
app.get('/', function rootHandler(req, res) {
  res.end('Hello world!');
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
// eslint-disable-next-line no-unused-vars
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

// sentry stop
//root routes
app.use('/', commonRoutes);
app.use('/user', authRoutes);
app.use('/challenges', challenges);
app.use('/my-bookings', bookings);
app.use('/leader-Board', leaderBoard);
app.use('/profile', progress);
app.use('/checkout', checkout);
app.use(errorHandler);
app.use(notFound);

//server connection
app.listen(port, () => {
  logger.log('info', `server up and running on port ${port}`);
});

module.exports = app;
