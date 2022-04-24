/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const asyncHandler = require('express-async-handler');
const {
  challenges,
  challenge,
  challengesAll,
  challengeTheme,
  recomendedChallenges,
  newSlots,
} = require('../database/DAO/challenges');

//method GET
//to get a particular challenge and slot detail with slug
//route = /challenges/detail?filter=1&type=id&profileId=160
module.exports.challengeOne = asyncHandler(async (req, res) => {
  try {
    const challengeOne = await challenge.challengeID(req);

    const allSlots = await newSlots.slot(challengeOne[0].dataValues.id);

    if (allSlots[0][0]) {
      const slot = {};
      slot.session_mode = allSlots[0][0].session_mode;
      slot.top_winners = allSlots[0][0].top_winners;
      slot.practice_url = allSlots[0][0].practice_url;
      slot.round1_duration = allSlots[0][0].round1_duration;
      slot.title = allSlots[0][0].title;
      slot.time = allSlots[0][0].TIME;
      slot.round1_start_date = allSlots[0][0].round1_start_date;
      slot.round1_start_time = allSlots[0][0].round1_start_time;
      slot.round1_end_time = allSlots[0][0].round1_end_time;
      if (allSlots[0][0].slot_custom_field_1) {
        let tempTopic =
          'Topic : ' +
          allSlots[0][0].slot_custom_field_1 +
          '\r\n\r\n' +
          challengeOne[0].dataValues.description;
        challengeOne[0].dataValues.description = tempTopic;
      }
      challengeOne[0].dataValues.slotInfo = slot;
    }

    if (challengeOne) {
      res.status(200).json(challengeOne[0].dataValues);
    } else {
      res.status(400).send('no result found');
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});

//method GEt
//route = /challenges/theme/1
//to get the theme of particular challenge by id
module.exports.theme = asyncHandler(async (req, res) => {
  try {
    const id = req.params.themeid;
    const theme = await challengeTheme.themes(id);
    if (theme) {
      res.status(200).json(theme);
    } else {
      res.status(404).send('no data found');
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//method get
//route = /challenge//prepdoc/:id
//to get a particular prep doc of a challenge
module.exports.prepdoc = asyncHandler(async (req, res) => {
  try {
    const doc = await challengesAll.prepdoc(req);
    res.status(200).json({ doc });
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});

//method GET
//route = /discover/all?class_group_id=1
//to get the challenges of particular id
module.exports.challengesAll = asyncHandler(async (req, res) => {
  try {
    let challengesController = await challenges.challenge(req);
    for (let i = 0; i < challengesController.length; i++) {
      const allSlots = await newSlots.slot(challengesController[i].id);
      if (allSlots[0][0]) {
        challengesController[i].dataValues.slot = allSlots[0][0];
        if (allSlots[0][0].slot_custom_field_1) {
          let tempTopic =
            'Topic : ' +
            allSlots[0][0].slot_custom_field_1 +
            '\r\n\r\n' +
            challengesController[i].dataValues.description;
          challengesController[i].dataValues.description = tempTopic;
        }
      }
    }
    const challengeWithSlot = [];
    const challengeWithoutSlot = [];
    challengesController.map((value) => {
      if (value.dataValues.slot) {
        challengeWithSlot.push(value);
      }
    });
    challengesController.map((value) => {
      if (!value.dataValues.slot) {
        challengeWithoutSlot.push(value);
      }
    });
    const updatedChallengeWithSlot = challengeWithSlot.sort(function (a, b) {
      if (
        a.dataValues.slot.round1_start_date <
        b.dataValues.slot.round1_start_date
      ) {
        return -1;
      }
      if (
        a.dataValues.slot.round1_start_date >
        b.dataValues.slot.round1_start_date
      ) {
        return 1;
      }
      return 0;
    });

    if (challengesController) {
      res
        .status(200)
        .json(updatedChallengeWithSlot.concat(challengeWithoutSlot));
    } else {
      res.status(404).send('sorry no data found');
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//method GET
//to get recomended challenges by getting cat items
//route = /recomemded?class_group_id=2
module.exports.recomendedChallenges = asyncHandler(async (req, res) => {
  try {
    const challengerecomended = await recomendedChallenges.recomended(req);
    res.status(200).json(challengerecomended);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//method GET
//to get slots of any particular challenge by and by filtering profile id
//route =/challenges/slots?challengeId=6&profileId=160
module.exports.challengeSlots = asyncHandler(async (req, res) => {
  try {
    const allSlots = await newSlots.slot(req.query.challengeId);
    if (allSlots[0][0]) {
      const bookingCheckIfDone = await newSlots.bookingCheck(
        allSlots[0][0].id,
        req.query.profileId
      );
      if (bookingCheckIfDone) {
        allSlots[0][0].is_booked = true;
        res.status(200).json(allSlots[0]);
      } else {
        allSlots[0][0].is_booked = false;
        res.status(200).json(allSlots[0]);
      }
    } else {
      res.status(404).json({ present: false });
    }
  } catch (error) {
    res.status(500);
    throw new Error();
  }
});
