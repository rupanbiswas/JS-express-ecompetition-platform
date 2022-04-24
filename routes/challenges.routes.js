const express = require('express');
const {
  challengesAll,
  recomendedChallenges,
  challengeOne,
  theme,
  prepdoc,
  challengeSlots,
} = require('../controllers/challenges.controller');
const protect = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * /discover/all:
 *  get:
 *   summary: responses with all the challenges
 *   tags:
 *    - Challenges-Routes
 *   description: returns with all the challenges
 *   parameters:
 *   responses:
 *    200:
 *     description: challenges
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get challenges
 *     content:
 *      application/json:
 *         type: object
 *    500:
 *     description: server error
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/discover/all', challengesAll);
/**
 * @swagger
 * /discover:
 *  get:
 *   summary: responses with the challenges according to the month ,year and class group given
 *   tags:
 *    - Challenges-Routes
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
 */
// router.get('/discover', challenges);
/**
 * @swagger
 * /id/:challengeid:
 *  get:
 *   summary: responses with the challenge
 *   tags:
 *    - Challenges-Routes
 *   description: returns the challenge
 *   parameters:
 *       - name: slug
 *         in: query
 *         description: slug
 *         required: true
 *         type: string
 *       - name: type
 *         in: query
 *         description: slug
 *         required: true
 *         type: string
 *       - name: profileId
 *         in: query
 *         description: profile id
 *         required: true
 *         type: string
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
router.get('/detail', challengeOne);
/**
 * @swagger
 * /theme/:themeid:
 *  get:
 *   summary: responses the theme
 *   tags:
 *    - Challenges-Routes
 *   description: returns the theme for the given id
 *   parameters:
 *   responses:
 *    200:
 *     description: theme
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get class groups
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/theme/:themeid', theme);
/**
 * @swagger
 * /slots/:challengeid:
 *  get:
 *   summary: returns particular challenge slot
 *   tags:
 *    - Challenges-Routes
 *   description: returns a particular challenge slot for the given challenge id and profile id
 *   parameters:
 *   responses:
 *    200:
 *     description: challenge
 *     content:
 *      application/json:
 *         type: object
 *    401:
 *     description: already attempted/free trial used
 *     content:
 *      application/json:
 *         type: object

 *    404:
 *     description: failed to get class groups
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/slots', protect, challengeSlots);
/**
 * @swagger
 * /theme/:themeid:
 *  get:
 *   summary: responses the prepdoc
 *   tags:
 *    - Challenges-Routes
 *   description: returns the prepdoc
 *   parameters:
 *   responses:
 *    200:
 *     description: prepdoc
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get prepdoc
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/prepdoc/:id', prepdoc);
/**
 * @swagger
 * /recomended:
 *  get:
 *   summary: responses with recomended challenges
 *   tags:
 *    - Challenges-Routes
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
 */
router.post('/recomemded', protect, recomendedChallenges);

module.exports = router;
