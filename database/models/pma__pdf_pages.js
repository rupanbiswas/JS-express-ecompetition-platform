const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('pma__pdf_pages', {
    db_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    page_nr: {
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    page_descr: {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pma__pdf_pages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_nr" },
        ]
      },
      {
        name: "db_name",
        using: "BTREE",
        fields: [
          { name: "db_name" },
        ]
      },
    ]
  });

