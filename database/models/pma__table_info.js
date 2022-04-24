const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__table_info',
  {
    db_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
    },
    table_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
    },
    display_field: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: '',
    },
  },
  {
    sequelize,
    tableName: 'pma__table_info',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'db_name' }, { name: 'table_name' }],
      },
    ],
  }
);
