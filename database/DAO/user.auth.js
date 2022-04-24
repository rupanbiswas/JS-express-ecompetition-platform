const { Op } = require('sequelize');
const customers = require('../models/customers');
const tokens = require('../models/tokens');
const profiles = require('../models/profiles');

module.exports.userregister = {
  //to check if the customer is already present in database
  customer: async (phone) => {
    this.phone = phone;
    const result = await customers.findOne({ where: { phone } });
    return result;
  },
  //to create new user
  newUser: async (phone, flag) => {
    this.phone = phone;
    const result = await customers.create({
      phone: this.phone,
      verified: false,
      customer_notification_flag: flag,
    });
    return result;
  },
  //to assign firestore id to a user
  firestore: async (fireId, customerId) => {
    const result = await customers.update(
      {
        firebase_id: fireId,
      },
      { where: { id: customerId } }
    );
    return result;
  },
};
module.exports.otpVerification = {
  //to find user from real otp
  dbOTP: async (customerId, otp) => {
    const result = await tokens.findOne({
      where: [
        { customer_id: customerId },
        { otp },
        { otp_expiry: { [Op.gte]: new Date() } },
      ],
    });
    return result;
  },

  //to find user from demo otp
  demodbOTP: async (customerId) => {
    const result = await tokens.findOne({
      where: [
        { customer_id: customerId },
        { otp_expiry: { [Op.gte]: new Date() } },
      ],
    });
    return result;
  },

  //to update customer as verified
  verifiedCustomer: async (customerID) => {
    const result = await customers.update(
      {
        verified: true,
      },
      { where: { id: customerID } }
    );
    return result;
  },

  //to find a user with user id
  customer: async (customerID) => {
    const result = await customers.findOne({ where: { id: customerID } });
    return result;
  },

  //to get the profiles of a user
  profileCount: async (customerID) => {
    const result = await profiles.findAll({
      where: { customer_id: customerID },
    });
    return result;
  },
};
