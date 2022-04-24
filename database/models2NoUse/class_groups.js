const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'class_groups',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    class_group_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    min_class: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    max_class: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    min_age: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    max_age: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    created_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    updated_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'class_groups',
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
