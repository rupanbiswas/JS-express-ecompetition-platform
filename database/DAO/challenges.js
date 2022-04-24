// const { Op } = require('sequelize');
const challenges = require('../models/challenges');
// const slots = require('../models/slots');
const themes = require('../models/themes');
// const bookingLineItems = require('../models/booking_line_items');
const sequelize = require('../../commons/dbconnection');
const bookings = require('../models/bookings');
const docs = require('../models/challenge_round_documents');
const { dateTime } = require('../../utils/dateTime');
const slot_round_participant = require('../models/slot_round_participant');
const { dateFormater } = require('../../utils/dateFormater');
const { globalSetting } = require('./common');

module.exports.challenges = {
  //to get all the ochallenges of a particular classgroupid
  challenge: async (req) => {
    const result = await challenges.findAll({
      where: [{ status: 1 }, { class_group_id: req.query.class_group_id }],
    });
    return result;
  },

  //to check the user if he has previously booked for any item
  check: async (req) => {
    const result = await bookings.findAll({
      where: [{ customer_id: req }, { payment_status: 1 }],
    });
    return result;
  },
};
module.exports.challenge = {
  //to get a challenge either by id or slug
  challengeID: async (req) => {
    let result;
    if (req.query.type == 'id') {
      result = await challenges.findAll({
        where: [{ status: 1 }, { id: req.query.filter }],
      });
    } else if (req.query.type == 'slug') {
      result = await challenges.findAll({
        where: [{ status: 1 }, { slug: req.query.filter }],
      });
    }
    return result;
  },
};
module.exports.challengesAll = {
  // to get prepdoc of a challenge
  prepdoc: async (req) => {
    const result = await docs.findOne({
      where: [{ challenge_id: req.params.id }, { round_id: 1 }],
    });
    return result;
  },
};

module.exports.challengeTheme = {
  //to get theme of any particular challenge
  themes: async (req) => {
    const result = await themes.findOne({
      where: { id: req },
    });
    return result;
  },
};

module.exports.recomendedChallenges = {
  //to get recomended challenges
  recomended: async (req) => {
    let result;
    const classGroupId = req.query.class_group_id;
    const cartItems = req.body.cart_items;
    if (cartItems.length >= 1) {
      result =
        await sequelize.query(`SELECT challenges.*,themes.theme_name,themes.theme_description
       FROM challenges AS challenges 
       LEFT JOIN themes
       ON challenges.theme_id = themes.id
       WHERE NOT (challenges.id IN (${cartItems})) AND (challenges.month = ${
          new Date().getMonth() + 1
        } OR challenges.month = ${
          new Date().getMonth() + 2
        }) AND challenges.class_group_id = ${classGroupId} AND challenges.status = 1 ;`);
    } else {
      result = await challenges.findAll({
        where: { class_group_id: classGroupId },
      });
    }
    return result;
  },
};

module.exports.newSlots = {
  //to get upcoming slots
  slot: async (id) => {
    const currentDateTime = new Date(dateTime());
    let response = { id: 1 };
    const settings = await globalSetting.data();
    settings.forEach((element) => {
      response[element.option_name] = element.value;
    });
    console.log(currentDateTime.toLocaleTimeString('en-GB', { hour12: false }));
    console.log(response.slot_closure_time);
    currentDateTime.setMinutes(
      currentDateTime.getMinutes() + Number(response.slot_closure_time)
    );
    console.log(currentDateTime.toLocaleTimeString('en-GB', { hour12: false }));

    const newCurrentDate =
      dateFormater(currentDateTime) +
      ' ' +
      currentDateTime.toLocaleTimeString('en-GB', { hour12: false });

    const result =
      await sequelize.query(` SELECT *, CONCAT(round1_start_date,' ', round1_start_time) AS TIME 
    FROM slots 
    WHERE CONCAT(round1_start_date,' ', round1_start_time) >= '${newCurrentDate}' AND challenge_id = ${id} AND status = 1 
    ORDER BY TIME 
    asc LIMIT 1`);

    return result;
  },

  //to get upcoming slots for subscribed booking
  slotForJoining: async (id) => {
    const currentDateTime = dateTime();
    const result =
      await sequelize.query(` SELECT *, CONCAT(round1_start_date,' ', round1_start_time) AS TIME 
    FROM slots 
    WHERE CONCAT(round1_start_date,' ', round1_end_time) >= '${currentDateTime}' AND challenge_id = ${id} AND status = 1 
    ORDER BY TIME 
    asc LIMIT 1`);

    return result;
  },
  //to check if a item is already subscribed
  bookingCheck: async (slotId, id) => {
    const result = await slot_round_participant.findOne({
      where: [{ slot_id: slotId }, { profile_id: id }],
    });
    return result;
  },
};
