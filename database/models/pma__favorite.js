const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__favorite',
  {
    username: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    tables: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'pma__favorite',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'username' }],
      },
    ],
  }
);
