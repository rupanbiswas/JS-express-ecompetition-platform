const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__tracking',
  {
    db_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    table_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
    },
    version: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    date_created: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    date_updated: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    schema_snapshot: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    schema_sql: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    data_sql: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    tracking: {
      type: "SET('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW')",
      allowNull: true,
    },
    tracking_active: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    tableName: 'pma__tracking',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'db_name' },
          { name: 'table_name' },
          { name: 'version' },
        ],
      },
    ],
  }
);
