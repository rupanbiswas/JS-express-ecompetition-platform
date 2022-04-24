const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'country_codes',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    iso: {
      type: Sequelize.CHAR(2),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    nicename: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    iso3: {
      type: Sequelize.CHAR(3),
      allowNull: true,
    },
    numcode: {
      type: Sequelize.SMALLINT,
      allowNull: true,
    },
    phonecode: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'country_codes',
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
