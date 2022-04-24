const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'slots',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    challenge_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    round1_start_date: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    round1_start_time: {
      type: Sequelize.TIME,
      allowNull: true,
    },
    round1_duration: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    round1_end_time: {
      type: Sequelize.TIME,
      allowNull: true,
    },
    round2_start_date: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    round2_start_time: {
      type: Sequelize.TIME,
      allowNull: true,
    },
    round2_duration: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    round2_end_time: {
      type: Sequelize.TIME,
      allowNull: true,
    },
    registration_end_date_time: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    max_participants: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    round1_episode_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    round1_participants_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    round1_game_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    round1_game_pin: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    round2_episode_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    round2_participants_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    round2_game_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    round2_game_pin: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    round1_qualified: {
      type: Sequelize.STRING(255),
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
    practice_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    session_mode: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    top_winners: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    zoom_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    total_participants_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    freeze_results: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    slot_custom_field_1: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    slot_custom_field_2: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    notifications_sent: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'slots',
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
