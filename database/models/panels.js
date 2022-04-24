const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'panels',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    panel_id: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    challenge_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    slot_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    round_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    no_of_students: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    booking_line_items_ids: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    participant_ids: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: '(DC2Type:json)',
    },
    moderator_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    judge_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    zoom_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    zoom_meeting_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    zoom_meeting_id: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    zoom_meeting_password: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    results_spreadsheet_id: {
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
    panel_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'panels',
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
