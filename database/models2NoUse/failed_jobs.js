const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'failed_jobs',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    connection: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    queue: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    payload: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    exception: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    failed_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
    },
  },
  {
    sequelize,
    tableName: 'failed_jobs',
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
