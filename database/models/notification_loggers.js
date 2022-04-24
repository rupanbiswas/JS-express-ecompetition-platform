const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('notification_loggers', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    profile_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    challenge_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    slot_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    booking_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    phone_number: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    notification_slug: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    channel: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    subject: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    response: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
    srp_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'notification_loggers',
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
    ]
  });
