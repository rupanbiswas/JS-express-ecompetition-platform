const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'skills',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    skill_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    skill_short_code: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    skill_description: {
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
  },
  {
    sequelize,
    tableName: 'skills',
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
