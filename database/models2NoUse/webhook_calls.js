const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'webhook_calls',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    payload: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    exception: {
      type: Sequelize.TEXT,
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
    tableName: 'webhook_calls',
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
