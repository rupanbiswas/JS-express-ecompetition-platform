/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const asyncHandler = require('express-async-handler');
const { userBookings } = require('../database/DAO/bookings');

//method GET
//to get upcoming challenge and slot
//route = /upcoming/slots
module.exports.upcomingSlots = asyncHandler(async (req, res) => {
  try {
    const result = await userBookings.upComingBookingSlots(req);
    for (i = 0; i < result[0].length; i++) {
      if (result[0][i].round1_start_date) {
        let resultData = {};
        resultData.round1_game_pin = result[0][i].round1_game_pin;
        resultData.round1_start_date = result[0][i].round1_start_date;
        resultData.round1_start_time = result[0][i].round1_start_time;
        resultData.round1_end_time = result[0][i].round1_end_time;
        resultData.practice_url = result[0][i].practice_url;
        resultData.round1_game_url = result[0][i].round1_game_url;
        resultData.TIME = result[0][i].TIME;
        resultData.title = result[0][i].title;
        resultData.zoom_url = result[0][i].zoom_url;
        result[0][i].slot = resultData;
      }
    }
    if (result) {
      res.status(200).json(result[0]);
    } else {
      res.status(404).json({ success: false });
    }
  } catch (error) {
    res.status(500);
    throw new Error();
  }
});
