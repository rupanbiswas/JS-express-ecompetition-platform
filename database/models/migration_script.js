const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'migration_script',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    challenge: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    old_class_group: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    slot: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    old_slot_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    class: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    new_slot_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    updated: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'migration_script',
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
