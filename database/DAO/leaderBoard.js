/* eslint-disable no-undef */
const { Op } = require('sequelize');
const sequelize = require('../../commons/dbconnection');
// const leaderBoardPoints = require('../models/leaderboard_points');
const userSkillsHistory = require('../models/user_skill_history');
const rounds = require('../models/rounds');

module.exports.leaderBoardDAO = {
  studentMonth: async (month, year, offset) => {
    const result = await leaderBoardPoints.findAll({
      where: [{ month }, { year }],
      order: [['current_points', 'desc']],
      offset: Number(offset),
      limit: Number(process.env.PAGE_LIMIT),
    });
    return result;
  },
  studentAll: async (offset) => {
    const result = await leaderBoardPoints.findAll({
      order: [['current_points', 'desc']],
      limit: Number(process.env.PAGE_LIMIT),
      offset: Number(offset),
    });
    return result;
  },
  schoolMonth: async (month, year, offset) => {
    const result =
      await sequelize.query(`select school_name,SUM(current_points) AS total_points from leaderboard_points
        WHERE month = ${month} and year = ${year}
        GROUP BY school_name
        ORDER BY total_points DESC
        LIMIT ${process.env.PAGE_LIMIT}
        OFFSET ${offset}`);
    return result;
  },
  schoolAll: async (offset) => {
    const result =
      await sequelize.query(`select school_name,SUM(current_points) AS total_points from leaderboard_points
            GROUP BY school_name
            ORDER BY total_points DESC
            LIMIT ${process.env.PAGE_LIMIT}
            OFFSET ${offset}`);
    return result;
  },
  round: async (newdate) => {
    const result = await rounds.findAll({
      where: { slot_date: { [Op.between]: [newdate, new Date()] } },
    });
    return result;
  },
  userSkills: async (id) => {
    const result = await userSkillsHistory.findAll({
      where: { round_id: id },
      order: [['points', 'desc']],
      limit: 3,
    });
    return result;
  },
};
