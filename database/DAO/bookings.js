const sequelize = require('../../commons/dbconnection');
const { dateTime } = require('../../utils/dateTime');
// const bookingLineItems = require('../models/booking_line_items');

module.exports.userBookings = {
  // to get my booked challenges
  upComingBookingSlots: async (req) => {
    let dateTimeCheck = dateTime();
    const result = sequelize.query(
      `select slot_round_participant.*,profiles.full_name as profile_name,profiles.f_name,profiles.nickname as nick_name,challenges.title as challenge_name,challenges.slug,class_groups.class_group_name,slots.id,slots.round1_game_pin,slots.round1_start_date,slots.round1_start_time,slots.round1_end_time,slots.practice_url,slots.zoom_url,slots.round1_game_url,CONCAT(slots.round1_start_date,' ', slots.round1_start_time) AS TIME,slots.title,slots.challenge_id
      from slot_round_participant
      JOIN slots
      ON slot_round_participant.slot_id = slots.id
      join challenges
      ON slots.challenge_id = challenges.id
      LEFT JOIN profiles
      ON slot_round_participant.profile_id = profiles.id
      LEFT JOIN class_groups
    ON challenges.class_group_id = class_groups.id
    WHERE slot_round_participant.customer_id = ${req.user.id} AND slot_round_participant.round_number = 1 AND CONCAT(slots.round1_start_date,' ', slots.round1_end_time) >= '${dateTimeCheck}'
    ORDER BY TIME`
    );
    return result;
  },
};
