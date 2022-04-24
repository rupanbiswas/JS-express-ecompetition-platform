const axios = require('axios');
const qs = require('qs');

module.exports.apiCaller = async (id) => {
  const data = qs.stringify({
    booking_id: id,
  });
  const config = {
    method: 'post',
    url: process.env.CMS_API,
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
