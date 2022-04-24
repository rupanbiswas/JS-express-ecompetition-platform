const asyncHandler = require('express-async-handler');
const sequelize = require('../commons/dbconnection');
const { leaderBoardDAO } = require('../database/DAO/leaderBoard');

module.exports.studentMonth = asyncHandler(async (req, res) => {
  const { month } = req.query;
  const { year } = req.query;
  const offset = req.query.offset ? req.query.offset : 0;
  try {
    const result = await leaderBoardDAO.studentMonth(month, year, offset);
    if (result) {
      res.status(200).json(result);
    }
  } catch (e) {
    res.status(404);
    throw new Error(e);
  }
});
module.exports.studentAll = asyncHandler(async (req, res) => {
  const offset = req.query.offset ? req.query.offset : 0;
  try {
    const result = await leaderBoardDAO.studentAll(offset);
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});
module.exports.schoolAll = asyncHandler(async (req, res) => {
  // const offset = req.query.offset ? req.query.offset : 0;
  try {
    const result = await sequelize.query(`
    select * from booking_line_items where id = 237`);
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});
module.exports.schoolMonth = asyncHandler(async (req, res) => {
  const { month } = req.query;
  const { year } = req.query;
  const offset = req.query.offset ? req.query.offset : 0;
  try {
    const result = await leaderBoardDAO.schoolMonth(month, year, offset);
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});

module.exports.result = asyncHandler(async (req, res) => {
  try {
    const arr = [];
    const date = new Date();
    const newdate = date.setMonth(date.getMonth() - 2);
    const rounds = await leaderBoardDAO.round(newdate);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rounds.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      const userSkill = await leaderBoardDAO.userSkills(rounds[i].id);
      userSkill.push({ round: rounds[i] });

      arr.push(userSkill);
    }
    res.status(200).json(arr);
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});
