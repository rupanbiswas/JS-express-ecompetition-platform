const timeDiff = (createdAt) => {
  const difference = new Date() - createdAt;
  // eslint-disable-next-line no-bitwise
  const min = Math.floor((difference / 1000 / 60) << 0);
  return min;
};

module.exports = timeDiff;
