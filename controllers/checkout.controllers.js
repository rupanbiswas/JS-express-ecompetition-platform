/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const asyncHandler = require('express-async-handler');
const crypto = require('crypto');
// const Razorpay = require('razorpay');
const { nanoid } = require('nanoid');

const { createBooking } = require('../database/DAO/checkout');
const { apiCaller } = require('../utils/cms.api.caller');

// const razorPayInstance = new Razorpay({
//   key_id: process.env.KEY_ID,
//   key_secret: process.env.KEY_SECRET,
// });
//route = /checkout/payment-order
//method post
//create payment order
module.exports.createOrder = asyncHandler(async (req, res) => {
  if (req.body.amount === 0) {
    const createBookings = await createBooking.create(req, null);
    res.status(201).json({
      booking_id: createBookings.id,
      orderId: null,
      receiptId: null,
      amount: null,
      currency: null,
      createdAt: null,
      status: null,
    });
  } else {
    params = {
      amount: req.body.amount * 100,
      currency: 'INR',
      receipt: nanoid(),
      payment_capture: '1',
    };

    razorPayInstance.orders
      .create(params)
      .then(async (response) => {
        const createBookings = await createBooking.create(req, response.id);
        res.status(201).json({
          booking_id: createBookings.id,
          orderId: response.id,
          receiptId: response.receipt,
          amount: response.amount,
          currency: response.currency,
          createdAt: response.created_at,
          status: response.status,
        });
      })
      .catch((err) => {
        if (err) throw err;
      });
  }
});

//route = /checkout/payment-verification
//method post
//create payment order and booking line items
module.exports.orderVerification = asyncHandler(async (req, res) => {
  let booking;
  if (req.body.total_amount === 0) {
    await createBooking.update(req);
    const itemsLength = req.body.line_items.length;
    for (let i = 0; i < itemsLength; i++) {
      const bookingCheck = await createBooking.checkBooking(
        req,
        req.body.line_items[i]
      );
      if (bookingCheck.length < 1) {
        booking = await createBooking.items(req, req.body.line_items[i]);
        await createBooking.slots(req, req.body.line_items[i]);
        const getASlot = await createBooking.getASlot(req.body.line_items[i]);
        const participantsNumber =
          getASlot.dataValues.total_participants_count + 1;
        await createBooking.updateSlot(
          req.body.line_items[i],
          participantsNumber
        );
        apiCaller(booking.id);
      }
    }
    if (booking) {
      res.status(201).json({
        success: true,
      });
    } else {
      res.status(400).json({
        success: false,
      });
    }
  } else {
    body = `${req.body.razorpay_order_id}|${req.body.razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac('sha256', process.env.KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    if (expectedSignature === req.body.razorpay_signature) {
      await createBooking.update(req);
      const itemsLength = req.body.line_items.length;
      for (let i = 0; i < itemsLength; i++) {
        const bookingCheck = await createBooking.checkBooking(
          req,
          req.body.line_items[i]
        );
        if (bookingCheck.length < 1) {
          booking = await createBooking.items(req, req.body.line_items[i]);
          await createBooking.slots(req, req.body.line_items[i]);
          const getASlot = await createBooking.getASlot(req.body.line_items[i]);
          const participantsNumber =
            getASlot.dataValues.total_participants_count + 1;
          await createBooking.updateSlot(
            req.body.line_items[i],
            participantsNumber
          );
          apiCaller(booking.id);
        }
      }
      if (booking) {
        res.status(201).json({
          success: true,
        });
      }
    } else {
      res.status(400).json({
        success: false,
      });
    }
  }
});
