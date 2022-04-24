module.exports.otpUser = () => {
  const digits = '123456789';
  let OTP = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 4; i++) {
    const rand = Math.random() * 9;
    const floorRand = Math.floor(rand);
    OTP += digits[floorRand];
  }
  return OTP;
};
