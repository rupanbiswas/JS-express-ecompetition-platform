const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'booking_line_items',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    booking_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    challenge_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    profile_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    slot_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    item_status: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    line_amount: {
      type: Sequelize.DECIMAL(8, 2),
      allowNull: true,
    },
    skill_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    class_group_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    profile_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    challenge_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    slot_date_time: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    error_notes: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    slot_end_time: {
      type: Sequelize.TIME,
      allowNull: true,
    },
    parent_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    request_json: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    provider: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    coupon_code: {
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
    notification_status: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    nick_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'booking_line_items',
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
