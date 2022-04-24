const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'tokens',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    jwt_token: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    otp: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    otp_expiry: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    refresh_jwt_token: {
      type: Sequelize.STRING(255),
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
    tableName: 'tokens',
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
