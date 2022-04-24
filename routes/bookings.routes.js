const express = require('express');
const {
  // upcomingBookings,
  // previousBookings,
  upcomingSlots,
  // previousSlots,
} = require('../controllers/bookings.controllers');
const protect = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * /upcoming/slots:
 *  get:
 *   summary: upcoming bookings slots
 *   tags:
 *    - Bookings-Routes
 *   description: returns with upcoming bookings after verifying with token
 *   parameters:
 *   responses:
 *    200:
 *     description: upcoming bookings
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: failed to get upcoming bookings
 *     content:
 *      application/json:
 *         type: object
 */
router.get('/upcoming/slots', protect, upcomingSlots);

module.exports = router;
