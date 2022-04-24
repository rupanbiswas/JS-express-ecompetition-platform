const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('pma__recent', {
    username: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    tables: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pma__recent',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });

