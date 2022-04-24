const express = require('express');
const { result, reward } = require('../controllers/progress.controller');
const protect = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * profile/result/:profileId:
 *  get:
 *   summary: responses with results of a profile
 *   tags:
 *    - Progress
 *   description: take profile id as param and responses with result
 *   parameters:
 *   responses:
 *    200:
 *     description: result
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get results
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/result/:profileId', protect, result);

/**
 * @swagger
 * profile/reward?rewardId=65&profileId=55:
 *  get:
 *   summary: responses with reward of a profile
 *   tags:
 *    - Progress
 *   description: reward id and profile id is taken and response is reward
 *   parameters:
 *   responses:
 *    200:
 *     description: result
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get results
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/reward', protect, reward);

module.exports = router;
