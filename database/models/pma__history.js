const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__history',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: '',
    },
    db: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: '',
    },
    table: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: '',
    },
    timevalue: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
    },
    sqlquery: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'pma__history',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
      {
        name: 'username',
        using: 'BTREE',
        fields: [
          { name: 'username' },
          { name: 'db' },
          { name: 'table' },
          { name: 'timevalue' },
        ],
      },
    ],
  }
);
