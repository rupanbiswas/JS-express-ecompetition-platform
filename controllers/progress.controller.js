/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const asyncHandler = require('express-async-handler');
const { progress } = require('../database/DAO/progress');

//to get profile result info
//route = /profile/result/:2
//method GET
module.exports.result = asyncHandler(async (req, res) => {
  try {
    let resultsObject = {};
    resultsObject.average = {};
    var sum = 0;
    var questions = 0;
    resultsObject.average.point = 0;
    const result = await progress.result(req);
    for (let i = 0; i < result[0].length; i++) {
      sum = sum + Number(result[0][i].accuracy);
      questions = questions + result[0][i].total_questions;
    }
    resultsObject.results = result[0];
    if (!sum < 0 || sum == 0) {
      resultsObject.average.point = 0;
    } else {
      resultsObject.average.point = ((sum / result[0].length) * 10).toFixed(2);
    }

    resultsObject.average.count = result[0].length;
    if (result) {
      res.status(200).json(resultsObject);
    } else {
      res.status(404).send('no result found');
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

//to get profile result info
//route = /profile/reward?rewardId=65&profileId=55
//method GET
module.exports.reward = asyncHandler(async (req, res) => {
  try {
    const result = await progress.reward(req);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'no reward found' });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
