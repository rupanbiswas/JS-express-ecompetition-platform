const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'customers',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    f_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    l_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    phone: {
      type: Sequelize.BIGINT,
      allowNull: true,
    },
    role_id: {
      type: Sequelize.INTEGER,
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
    country: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    last_booked: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    last_logged_in: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    verified: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    firebase_id: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    password: {
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
    free_trial_used: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    customer_notification_flag: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    is_blocked: {
      type: Sequelize.BOOLEAN,
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
    empty_email_name_notification_flag: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'customers',
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
