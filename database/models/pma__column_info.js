const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define('pma__column_info', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    db_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    table_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    column_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    comment: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    mimetype: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    transformation: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    transformation_options: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    input_transformation: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    input_transformation_options: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pma__column_info',
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
      {
        name: "db_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "db_name" },
          { name: "table_name" },
          { name: "column_name" },
        ]
      },
    ]
  });

