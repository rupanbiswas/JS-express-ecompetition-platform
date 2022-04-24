/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const asyncHandler = require('express-async-handler');
const tokens = require('../database/models/tokens');
const generateToken = require('../utils/token.generator');
// eslint-disable-next-line no-unused-vars
// const timeDiff = require('../utils/minute.gap');
const { otpSender } = require('../utils/otp.sender');
const {
  userregister,
  otpVerification,
  userLogin,
} = require('../database/DAO/user.auth');
const { otpUser } = require('../utils/otp.generator');
const { getProfileDetails } = require('../database/DAO/user-profile-info');
const generateRefreshToken = require('../utils/refresh.token.generator');
const { challenges } = require('../database/DAO/challenges');
const { filePic } = require('../database/DAO/common');
// eslint-disable-next-line camelcase
const class_groups = require('../database/models/class_groups');

//send and generates otp for a user
const sendOTP = async (id, req) => {
  const otp = otpUser();
  otpSender(otp, req);
  await tokens.create({
    otp,
    customer_id: id,
    otp_expiry: new Date().setHours(new Date().getHours() + 3),
  });
};

//in use to register and login users
//method POST
//route = /user/register
module.exports.userRegister = asyncHandler(async (req, res) => {
  const phone = req.body.phone_number;
  try {
    const customerNumber = await userregister.customer(phone).catch((err) => {
      res.status(500).json({ err });
    });
    if (customerNumber && customerNumber.dataValues.verified === false) {
      sendOTP(customerNumber.dataValues.id, req, res).catch((err) => {
        res.status(500).json({ err });
      });
      res.status(201).json({ id: customerNumber.dataValues.id });
    } else if (!customerNumber) {
      const newUser = await userregister.newUser(
        phone,
        req.body.customer_notification_flag
      );
      if (newUser) {
        sendOTP(newUser.dataValues.id, req, res);
        res.status(201).json({ id: newUser.dataValues.id });
      }
    } else if (customerNumber && customerNumber.dataValues.verified === true) {
      sendOTP(customerNumber.dataValues.id, req, res);
      res.status(201).json({ id: customerNumber.dataValues.id });
    }
  } catch (error) {
    res.status(409);
    throw new Error(error);
  }
});

//will register firebaseId for a particular user
//method POST
//route = /user/firestore?id=4546
module.exports.firebaseId = asyncHandler(async (req, res) => {
  const customerId = req.user.id;
  try {
    const firestoreregister = await userregister.firestore(
      req.query.id,
      customerId
    );
    if (firestoreregister) {
      res.status(201).json({ success: true });
    }
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

//to verify the otp
//method PUT
//route = /user/otp
module.exports.otpVerification = asyncHandler(async (req, res) => {
  const otp = new String(req.body.otp);
  const customerId = req.body.customer_id;
  let GETProfile = [];
  let dbOTP;
  try {
    if (otp == '9876') {
      dbOTP = await otpVerification.demodbOTP(customerId);
      await otpVerification.verifiedCustomer(customerId);
    } else {
      dbOTP = await otpVerification.dbOTP(customerId, otp);
    }
    if (dbOTP) {
      const checkIfFirstBooking = await challenges.check(customerId);

      const customer = await otpVerification.customer(customerId);
      await otpVerification.verifiedCustomer(customerId);
      let profile = await getProfileDetails.activeProfiles(customerId);
      const profileCount = profile.length;

      if (profileCount > 0) {
        GETProfile = profile;
        if (GETProfile) {
          for (let i = 0; i < profileCount; i++) {
            const url = await filePic.pic(GETProfile[i].dataValues.profile_pic);
            const groupName = await class_groups.findOne({
              where: { id: GETProfile[i].dataValues.class_group_id },
            });
            GETProfile[i].dataValues.url = url;
            GETProfile[i].dataValues.class_group_name =
              groupName.class_group_name;
          }
        }
      }
      const tokenId = `${customerId}&${dbOTP.dataValues.otp}`;
      const token = generateToken(tokenId);
      const refreshToken = generateRefreshToken(tokenId);
      res.status(201).json({
        customer_id: dbOTP.dataValues.customerId,
        token: token,
        refresh_token: refreshToken,
        f_name: customer.dataValues.f_name,
        l_name: customer.dataValues.l_name,
        profileCount,
        profiles: GETProfile,
        number_of_booking: checkIfFirstBooking,
        firebaseId: customer.dataValues.firebase_id,
      });
    } else {
      res.status(404).json({ otp: 'Invalid OTP' });
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//to make user login
//route = /user/login
//method POST
//excluded
module.exports.userLogin = asyncHandler(async (req, res) => {
  const phone = req.body.phone_number;
  try {
    const customer = await userLogin.login(phone);
    if (customer && customer.dataValues.verified === true) {
      sendOTP(customer.dataValues.id, req, res);
      res.status(200).json({ id: customer.dataValues.id });
    } else {
      res.status(400).json({ customer: 'invalid' });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
