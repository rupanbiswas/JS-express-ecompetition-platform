const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const customers = require('../database/models/customers');
const tokens = require('../database/models/tokens');

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // eslint-disable-next-line prefer-destructuring
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const id = decoded.id.split('&')[0];
      const otp = decoded.id.split('&')[1];
      const dbOTP = await tokens
        .findAll({ where: [{ otp }, { customer_id: id }] })
        .catch((err) => {
          res.status(500).json({ err });
        });
      if (dbOTP) {
        dbOTP.map(async (data) => {
          // eslint-disable-next-line eqeqeq
          if (data.dataValues.customer_id == id) {
            req.user = await customers
              .findOne({ where: { id: data.dataValues.customer_id } })
              .catch((err) => {
                res.status(500).json({ err });
              });
            next();
          }
        });
      }
    } catch (error) {
      res.status(401);
      throw new Error('Not Authorised,token failed');
    }
  }

  if (!token) {
    res.status(403);
    throw new Error('not authorized,no token');
  }
});

module.exports = protect;
