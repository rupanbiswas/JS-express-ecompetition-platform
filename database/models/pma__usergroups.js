const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__usergroups',
  {
    usergroup: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    tab: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    allowed: {
      type: Sequelize.ENUM('Y', 'N'),
      allowNull: false,
      defaultValue: 'N',
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: 'pma__usergroups',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'usergroup' }, { name: 'tab' }, { name: 'allowed' }],
      },
    ],
  }
);
