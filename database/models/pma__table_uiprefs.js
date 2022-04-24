const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__table_uiprefs',
  {
    username: {
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
    prefs: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    last_update: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
    },
  },
  {
    sequelize,
    tableName: 'pma__table_uiprefs',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'username' },
          { name: 'db_name' },
          { name: 'table_name' },
        ],
      },
    ],
  }
);
