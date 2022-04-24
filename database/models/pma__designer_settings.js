const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__designer_settings',
  {
    username: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    settings_data: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'pma__designer_settings',
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
