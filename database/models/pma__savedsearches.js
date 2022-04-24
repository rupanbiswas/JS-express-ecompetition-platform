const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__savedsearches',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: '',
    },
    db_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: '',
    },
    search_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: '',
    },
    search_data: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'pma__savedsearches',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
      {
        name: 'u_savedsearches_username_dbname',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'username' },
          { name: 'db_name' },
          { name: 'search_name' },
        ],
      },
    ],
  }
);
