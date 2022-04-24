const express = require('express');
const {
  classGroup,
  fileUpload,
  skills,
  schools,
  fileDownload,
  checkBooking,
  username,
  cities,
  globalSettings,
  v2classGroup,
  globalConfig,
  forceUpdate,
} = require('../controllers/common.controller');
const protect = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * /class-group:
 *  get:
 *   summary: responses with the class groups
 *   tags:
 *    - Common-Routes
 *   description: returns the class groups
 *   parameters:
 *   responses:
 *    200:
 *     description: class groups
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get class groups
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/class-group', classGroup);
/**
 * @swagger
 * /v2/class-group:
 *  get:
 *   summary: responses with the class groups
 *   tags:
 *    - Common-Routes
 *   description: returns the class groups
 *   parameters:
 *   responses:
 *    200:
 *     description: class groups
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get class groups
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/v2/class-group', v2classGroup);

/**
 * @swagger
 * /username:
 *  get:
 *   summary: checks if a username is present
 *   tags:
 *    - Common-Routes
 *   description: checks if a username is present
 *   parameters:
 *   responses:
 *    200:
 *     description: class groups
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get class groups
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/username', username);
/**
 * @swagger
 * /file-upload:
 *  post:
 *   summary: upload files and returns id
 *   tags:
 *    - Common-Routes
 *   description: upload files and saves it ijn s3 and db ,and the id
 *   parameters:
 *    - in: body
 *      name: upload file
 *      description: upload files and saves it ijn s3 and db ,and the id.
 *      schema:
 *       type: object
 *       properties:
 *        school_name:
 *         type: file
 *       example:
 *        image: file
 *   responses:
 *    201:
 *     description: file uploaded
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: file can not be uploaded
 *     content:
 *      application/json:
 *         type: object
 */
router.post('/file-upload', protect, fileUpload);
/**
 * @swagger
 * /skills:
 *  get:
 *   summary: responses with the skills
 *   tags:
 *    - Common-Routes
 *   description: returns the skills
 *   parameters:
 *   responses:
 *    200:
 *     description: class groups
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get class groups
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/skills', skills);
/**
 * @swagger
 * /schools:
 *  get:
 *   summary: responses with the of particular city schools
 *   tags:
 *    - Common-Routes
 *   description: returns the schools . in query  ?city=.......
 *   parameters:
 *   responses:
 *    200:
 *     description: schools
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get schools
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/schools', schools);
/**
 * @swagger
 * /cities:
 *  get:
 *   summary: responses with the cities
 *   tags:
 *    - Common-Routes
 *   description: returns the cities
 *   parameters:
 *   responses:
 *    200:
 *     description: cities
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get cities
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/cities', cities);
/**
 * @swagger
 * /file/:id:
 *  get:
 *   summary: returns the url for file
 *   tags:
 *    - Common-Routes
 *   description: returns the url
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
router.get('/file/:id', protect, fileDownload);

/**
 * @swagger
 * /count-booking:
 *  get:
 *   summary: count number of booking
 *   tags:
 *    - Common-Routes
 *   description: count number of booking
 *   parameters:
 *   responses:
 *    200:
 *     description: url json data
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get data
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/count-booking', protect, checkBooking);
/**
 * @swagger
 * /global-settings:
 *  get:
 *   summary: global settings
 *   tags:
 *    - Common-Routes
 *   description: global settings
 *   parameters:
 *   responses:
 *    200:
 *     description: url json data
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get data
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/global-settings', globalSettings);
/**
 * @swagger
 * /global-config:
 *  get:
 *   summary: global settings
 *   tags:
 *    - Common-Routes
 *   description: global settings
 *   parameters:
 *   responses:
 *    200:
 *     description: url json data
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get data
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/global-config', globalConfig);
/**
 * @swagger
 * /force-update:
 *  get:
 *   summary: force-update App
 *   tags:
 *    - Common-Routes
 *   description: force-update App
 *   parameters:
 *   responses:
 *    200:
 *     description: url json data
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get data
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/force-update', forceUpdate);

module.exports = router;
