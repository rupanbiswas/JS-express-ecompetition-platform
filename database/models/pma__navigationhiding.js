const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__navigationhiding',
  {
    username: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    item_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    item_type: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    db_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    table_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: 'pma__navigationhiding',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'username' },
          { name: 'item_name' },
          { name: 'item_type' },
          { name: 'db_name' },
          { name: 'table_name' },
        ],
      },
    ],
  }
);
