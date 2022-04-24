const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'results',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    profile_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    nickname: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    challenge_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    result_type: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    slot_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    position: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    qualified: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    certificate_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    reward_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    amount: {
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
    class_group_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    is_matched: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
    points: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    coupon_code: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    game_score: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },

    accuracy: {
      type: Sequelize.DECIMAL(8, 2),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'results',
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
