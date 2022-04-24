const express = require('express');

const router = express.Router();
const {
  createOrder,
  orderVerification,
} = require('../controllers/checkout.controllers');
const protect = require('../middleware/auth');

/**
 * @swagger
 * /payment-order:
 *  post:
 *   summary: creates payment order_id for the booking
 *   tags:
 *    - Checkout-Routes
 *   description: will receive amount and user ,after creating orderid it is returned to the client side
 *   parameters:
 *    - in: body
 *      name: checkout
 *      description: will receive amount and user ,after creating orderid it is returned to the client side
 *      schema:
 *       type: object
 *       properties:
 *        total_amount:
 *         type: number
 *       example:
 *        total_amount: 785
 *   responses:
 *    201:
 *     description: order id created
 *     content:
 *      application/json:
 *         type: object
 *    404:
 *     description: order id not created
 *     content:
 *      application/json:
 *         type: object
 */
router.post('/payment-order', protect, createOrder);
/**
 * @swagger
 * /payment-verification:
 *  post:
 *   summary: check out
 *   tags:
 *    - Checkout-Routes
 *   description: will receive payment info and line item details.
 *   parameters:
 *    - in: body
 *      name: checkout
 *      description: will receive  payment info and line item details.
 *      schema:
 *       type: object
 *       properties:
 *        razorpay_order_id:
 *         type: string
 *        razorpay_payment_id:
 *         type: string
 *        razorpay_signature:
 *         type: string
 *        line_items:
 *         type: array
 *       example:
 *        razorpay_order_id: 7894656df4fdsfsdsd65
 *        razorpay_payment_id: 7894656df4fdsfsdsd65
 *        razorpay_signature: 7894656df4fdsfsdsd65
 *        line_items: [{"challenge_id" :1,"profile_id":2,"slot_id":5,"line_amount":0,"class_group_id":5,"skill_id":5,"challenge_name":"hakunamatata","profile_name":"yoo"}]
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
router.post('/payment-verification', protect, orderVerification);

module.exports = router;
