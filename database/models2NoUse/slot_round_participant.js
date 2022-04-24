const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'slot_round_participant',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    slot_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    profile_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    round_number: {
      type: Sequelize.INTEGER,
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
    result_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    report_sent_flag: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    notification_flag: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    is_matched: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    tableName: 'slot_round_participant',
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
