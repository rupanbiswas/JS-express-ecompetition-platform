const bookings = require('../models/bookings');
const bookingLineItems = require('../models/booking_line_items');
const slot_round_participant = require('../models/slot_round_participant');
const slots = require('../models/slots');
module.exports.createBooking = {
  //to create order booking
  checkBooking: async (req, items) => {
    const result = await bookingLineItems.findAll({
      where: [{ slot_id: items.slot_id }, { profile_id: items.profile_id }],
    });
    return result;
  },
  //to create order booking
  create: async (req, id) => {
    const result = await bookings.create({
      customer_id: req.user.id,
      booking_status: 0,
      booking_amount: req.body.total_amount,
      payment_status: 0,
      payment_info: 0,
      status: 0,
      notes: 0,
      created_by: req.user.id,
      order_id: id,
    });
    return result;
  },

  //to create booking line items
  items: async (req, items) => {
    const body = JSON.stringify(req.body);

    const result = await bookingLineItems.create({
      booking_id: req.body.order_id,
      challenge_id: items.challenge_id,
      profile_id: items.profile_id,
      slot_id: items.slot_id,
      line_amount: items.line_amount,
      class_group_id: items.class_group_id,
      skill_id: items.skill_id,
      challenge_name: items.challenge_name,
      profile_name: items.profile_name,
      nick_name: items.nick_name,
      slot_date_time: items.slot_date_time,
      parent_id: req.user.id,
      slot_start_time: items.slot_start_time,
      slot_end_time: items.slot_end_time,
      provider: 'node-api',
      request_json: body,
    });
    return result;
  },
  //to fill details for slot round participants
  slots: async (req, items) => {
    const result = await slot_round_participant.create({
      slot_id: items.slot_id,
      customer_id: req.user.id,
      profile_id: items.profile_id,
      status: 1,
      round_number: 1,
    });
    return result;
  },

  //to get a slot by particular id
  getASlot: async (items) => {
    const result = await slots.findOne({
      where: { id: items.slot_id },
    });
    return result;
  },
  //update a slot with participants numbers
  updateSlot: async (items, number) => {
    const result = await slots.update(
      {
        total_participants_count: number,
      },
      {
        where: {
          id: items.slot_id,
        },
      }
    );
    return result;
  },

  //to update booking as paid
  update: async (req) => {
    const result = bookings.update(
      {
        booking_status: 1,
        booking_amount: req.body.total_amount,
        payment_status: 1,
        payment_info: 1,
        status: 1,
        notes: 1,
      },
      {
        where: {
          id: req.body.order_id,
        },
      }
    );
    return result;
  },
};
