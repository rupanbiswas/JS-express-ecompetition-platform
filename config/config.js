/* eslint-disable global-require */
module.exports = function (value) {
  if (value === 'dev') {
    console.log('in developement process');
    module.exports.properties = require('./development');
  } else if (value === 'stagging') {
    console.log('in stagging process');
    module.exports.properties = require('./stagging');
  } else if (value === 'live') {
    console.log('in live process');
    module.exports.properties = require('./live');
  }else{
     console.log('in developement process');
    module.exports.properties = require('./development');
  }
};
