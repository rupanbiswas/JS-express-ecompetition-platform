const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__table_coords',
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
    pdf_page_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
    },
    x: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    y: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'pma__table_coords',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'db_name' },
          { name: 'table_name' },
          { name: 'pdf_page_number' },
        ],
      },
    ],
  }
);
