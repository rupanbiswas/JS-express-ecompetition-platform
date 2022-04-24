const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'profile_skill_status',
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
    level_id: {
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
    level_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'profile_skill_status',
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
