/* eslint-disable max-len */
const express = require('express');

const router = express.Router();
const {
  userRegister,
  otpVerification,
  firebaseId,
} = require('../controllers/user.auth.controller');
const {
  postUserDetails,
  userdetails,
  postProfileDetails,
  getProfiles,
  updateProfile,
  deleteProfile,
} = require('../controllers/user-profile-info.controller');
const protect = require('../middleware/auth');
const refreshProtect = require('../middleware/refresh.auth');
const { refreshToken } = require('../controllers/common.controller');

/**
 * @swagger
 * /user/register:
 *  post:
 *   summary: User registration
 *   tags:
 *    - User-Routes
 *   description: Will receive phone number and a parameter customer_notification_flag and send otp to the customer
 *   parameters:
 *    - in: body
 *      name: user register
 *      description: Will take phone number of the user and return with otp ,there are few conditions if the user is already registered than the user can directly login when user enters the otp the other condition is if the user try to register but didn't got verified after entering the otp the user will be verified and loged in and the last condition is if the user is neither registered nor verified than the user wiil get registered and will be loged in.
 *      schema:
 *       type: object
 *       properties:
 *        phone_number:
 *         type: number
 *        customer_notification_flag:
 *         type:boolean
 *       example:
 *        phone_number: 7908988240
 *        customer_notification_flag: true
 *   responses:
 *    201:
 *     description: otp has been sent and responses with user id
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: user not registered
 *     content:
 *      application/json:
 *         type: object
 */
router.post('/register', userRegister);

/**
 * @swagger
 * /user/firestore:
 *  post:
 *   summary: will take firestore id and register it for user
 *   tags:
 *    - User-Routes
 *   description: will take firestore id and register it for user
 *   parameters:
 *    - in: body
 *      name: user register
 *      description: will take firestore id and register it for user
 *      schema:
 *       type: object
 *       properties:
 *        firestoreId:
 *         type: number
 *       example:
 *        firestoreId: 7908988240
 *   responses:
 *    201:
 *     description: firestoreid registered
 *     content:
 *      application/json:
 *         type: object
 *    400:
 *     description: firestoreid not registered
 *     content:
 *      application/json:
 *         type: object
 */
router.post('/firestore', protect, firebaseId);
/**
 * @swagger
 * /user/otp:
 *  put:
 *   summary: Verification of the user
 *   tags:
 *    - User-Routes
 *   description: After user is verified user info along with token is sent to the client
 *   parameters:
 *    - in: body
 *      name: register verification
 *      description: After client enter the otp we verify it,if its found legit than we respons with users info and token
 *      schema:
 *       type: object
 *       properties:
 *        customer_id:
 *         type: number
 *        otp:
 *         type: number
 *       example:
 *        customer_id: 8
 *        otp: 456789
 *   responses:
 *    201:
 *     description: the user is verified and responded with token and user details
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: user verification failed
 *     content:
 *      application/json:
 *         type: object
 */
router.put('/otp', otpVerification);

// router.post('/login', userLogin);

/**
 * @swagger
 * /user/details:
 *  post:
 *   summary: User details
 *   tags:
 *    - User-Routes
 *   description: Will the token and user details
 *   parameters:
 *    - in: body
 *      name: user details
 *      description: Will take token and user details after that we will update the user details.
 *      schema:
 *       type: object
 *       properties:
 *        first_name:
 *         type: string
 *        last_name:
 *         type: string
 *        email:
 *         type: string
 *       example:
 *        first_name: rupan
 *        last_name: biswas
 *        email: rupan@gmail.com
 *   responses:
 *    201:
 *     description: user details has been inserted in the database
 *     content:
 *      application/json:
 *         type: object
 *    400:
 *     description: user not registered
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.post('/details', protect, postUserDetails);
/**
 * @swagger
 * /user/details:
 *  get:
 *   summary: token verification and get user details
 *   tags:
 *    - User-Routes
 *   description: checks user verification token and respondes with user details
 *   parameters:
 *   responses:
 *    200:
 *     description: user details
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get user details
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/details', protect, userdetails);

// router.put('/details', protect, postUserDetails);

/**
 * @swagger
 * /user/profile/details:
 *  post:
 *   summary: post profile details
 *   tags:
 *    - User-Routes
 *   description: Adds a profile for the user
 *   parameters:
 *    - in: body
 *      name: post profile details
 *      description: will take the details of the user and add a profile in relation to them.
 *      schema:
 *       type: object
 *       properties:
 *        school_name:
 *         type: string
 *        city:
 *         type: string
 *        country:
 *         type: string
 *        profile_pic_id:
 *         type: number
 *        student_name:
 *         type: string
 *        class_id:
 *         type: number
 *        class_group:
 *         type: string
 *        dob:
 *         type: date
 *        gender:
 *         type: string
 *        school_card_id:
 *         type: number
 *        selected_option:
 *         type: boolean
 *       example:
 *        school_name: hebron
 *        city: siliguri
 *        country: india
 *        profile_pic_id: 4
 *        student_name: rupan
 *        class_id: 4
 *        class_group: 5-6
 *        dob: 2021-02-18
 *        gender: male
 *        school_card_id: 5
 *        selected_option: 0
 *   responses:
 *    201:
 *     description: profile details added in the relation with the user and profiles are responded
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: profiles is not added
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.post('/profile/details', protect, postProfileDetails);
/**
 * @swagger
 * /user/profile/details:
 *  get:
 *   summary: responses with the profiles related with profiles
 *   tags:
 *    - User-Routes
 *   description: checks user verification token and respondes with profiles details
 *   parameters:
 *   responses:
 *    200:
 *     description: profile details
 *     content:
 *      application/json:
 *         type: object
 *    400:
 *     description: failed to get profile details
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/profile/details', protect, getProfiles);
/**
 * @swagger
 * /user/profile/details/:id:
 *  put:
 *   summary: update profile details
 *   tags:
 *    - User-Routes
 *   description: update a profile for the user
 *   parameters:
 *    - in: body
 *      name: update profile details
 *      description: will take the details of the user and update a profile whose id is given.
 *      schema:
 *       type: object
 *       properties:
 *        school_name:
 *         type: string
 *        city:
 *         type: string
 *        country:
 *         type: string
 *        profile_pic_id:
 *         type: string
 *        student_name:
 *         type: string
 *        class_id:
 *         type: string
 *        class_group:
 *         type: string
 *        dob:
 *         type: string
 *        gender:
 *         type: string
 *        school_card_id:
 *         type: string
 *        selected_option:
 *         type: string
 *       example:
 *        school_name: hebron
 *        city: siliguri
 *        country: india
 *        profile_pic_id: 4
 *        student_name: rupan
 *        class_id: 4
 *        class_group: 5-6
 *        dob: 2021-02-18
 *        gender: male
 *        school_card_id: 5
 *        selected_option: 0
 *   responses:
 *    201:
 *     description: profile details updated and profiles are responded
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: profiles is not added
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.put('/profile/details/:id', protect, updateProfile);
/**
 * @swagger
 * /user/profile/details/:id:
 *  delete:
 *   summary: removes a profiles from user
 *   tags:
 *    - User-Routes
 *   description: receives the id of thep profile and removes that profile
 *   parameters:
 *   responses:
 *    200:
 *     description: profile removed
 *     content:
 *      application/json:
 *         type: object
 *    400:
 *     description: failed to delete profile details
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.delete('/profile/details/:id', protect, deleteProfile);
/**
 * @swagger
 * /user/refresh-token:
 *  get:
 *   summary: takes refreshtoken and generates new token
 *   tags:
 *    - User-Routes
 *   description: takes refreshtoken and generates new token
 *   parameters:
 *   responses:
 *    200:
 *     description: url json data
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get profile pic url
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/refresh-token', refreshProtect, refreshToken);
module.exports = router;
