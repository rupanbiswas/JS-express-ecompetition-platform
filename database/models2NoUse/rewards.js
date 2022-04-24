const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'rewards',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    booking_line_item_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    tnc_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    provider: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    code: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    issued_by: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    expiry_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    awarded_to: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    date_created: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    date_used: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    slot_id: {
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
  },
  {
    sequelize,
    tableName: 'rewards',
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
