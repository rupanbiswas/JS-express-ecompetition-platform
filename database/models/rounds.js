const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'rounds',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    round_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    round_number: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    needs_webinar: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    created_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    updated_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    youtube_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    round_display_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    reward_participation_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reward_1st_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reward_2nd_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reward_3rd_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reward_4th_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reward_5th_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reward_6th_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reward_7th_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reward_8th_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reward_9th_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    reward_10th_amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'rounds',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
    ],
  }
);
