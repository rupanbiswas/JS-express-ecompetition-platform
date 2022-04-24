const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('pma__bookmark', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dbase: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    user: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    label: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    query: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pma__bookmark',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

