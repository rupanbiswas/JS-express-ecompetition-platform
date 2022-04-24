const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'cities',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    city_name: {
      type: Sequelize.STRING(47),
      allowNull: true,
    },
    state_name: {
      type: Sequelize.STRING(27),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'cities',
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
