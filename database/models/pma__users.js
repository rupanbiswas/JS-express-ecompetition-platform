const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define('pma__users', {
    username: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    usergroup: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'pma__users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
          { name: "usergroup" },
        ]
      },
    ]
  });

