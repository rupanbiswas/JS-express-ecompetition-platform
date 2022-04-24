const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('pma__relation', {
    master_db: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    master_table: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    master_field: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    foreign_db: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    foreign_table: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    foreign_field: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pma__relation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "master_db" },
          { name: "master_table" },
          { name: "master_field" },
        ]
      },
      {
        name: "foreign_field",
        using: "BTREE",
        fields: [
          { name: "foreign_db" },
          { name: "foreign_table" },
        ]
      },
    ]
  });

