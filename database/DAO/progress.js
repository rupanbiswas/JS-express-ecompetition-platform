const sequelize = require('../../commons/dbconnection');
const rewards = require('../models/rewards');
module.exports.progress = {
  //returns the result of a particular profile
  result: async (req) => {
    const result =
      await sequelize.query(`select results.*,challenges.title as challenge_name,challenges.slug,challenges.featured_image,class_groups.class_group_name,slots.*,slot_round_participant.report_sent_flag
              from results 
              left join slots
              on results.slot_id = slots.id
              left join profiles
              on results.profile_id = profiles.id
              left join class_groups
              on profiles.class_group_id = class_groups.id
              left join challenges
              on results.challenge_id = challenges.id
              left join slot_round_participant
              on results.slot_id = slot_round_participant.slot_id AND results.profile_id = slot_round_participant.profile_id
              where results.profile_id=${req.params.profileId} AND results.certificate_url IS NOT NULL AND results.points IS NOT NULL AND results.game_score IS NOT NULL AND results.accuracy IS NOT NULL AND results.created_at >= '2022-02-23' AND results.accuracy > 0.0
              ORDER BY slots.round1_start_date desc;`);
    return result;
  },
  //to get rewards
  reward: async (req) => {
    const result = await rewards.findOne({
      where: [{ id: req.query.rewardId }, { awarded_to: req.query.profileId }],
    });
    return result;
  },
};
