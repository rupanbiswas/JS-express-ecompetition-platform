const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'schools',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    parent_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    school_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    short_code: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    state: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    primary_contact_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    primary_contact_phone: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    primary_contact_email: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    primary_contact_designation: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    secondary_contact_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    secondary_contact_phone: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    secondary_contact_email: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    secondary_contact_designation: {
      type: Sequelize.STRING(255),
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
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    tableName: 'schools',
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
