const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'user_skill_history',
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
    skill_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    points: {
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
    round_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    profile_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    profile_school: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    profile_skill_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    profile_class_group: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    profile_pic: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'user_skill_history',
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
