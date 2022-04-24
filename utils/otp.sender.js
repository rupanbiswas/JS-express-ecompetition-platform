const axios = require('axios');
const qs = require('qs');

module.exports.otpSender = async (otp, req) => {
  const data = qs.stringify({
    From: 'IMELIO',
    To: `${req.body.phone_number}`,
    Body: `Your OTP for your All rounder Cup account is ${otp}. Please enter the OTP to login into your account. Please don't share with anyone. -Allrounder Cup`,
  });
  const config = {
    method: 'post',
    url: 'https://bf87635837f9e9ed8cacd0c957efb7307df44943a8be9218:0de480f67ff6e239cd2e8f49172a89a47fa4133dae6725b6@api.exotel.com/v1/Accounts/melio3/Sms/send.json',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
