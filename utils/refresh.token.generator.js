const jwt = require('jsonwebtoken');

const generateRefreshToken = (id) =>
  jwt.sign(
    {
      id,
    },
    process.env.REFRESH_JWT_SECRET,
    {
      expiresIn: '5y',
    }
  );
module.exports = generateRefreshToken;
