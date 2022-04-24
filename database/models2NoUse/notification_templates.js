const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'notification_templates',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    notification_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    notification_slug: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    email_template: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    sms_template: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    watsapp_template: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    push_notification_template: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    email_mode: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    sms_mode: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    watsapp_mode: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    push_notification_mode: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    customer_receipant: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    admin_receipant: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    organiser_receipant: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    whatsapp_tags: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    email_subject: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    push_notification_image_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    push_notification_title: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'notification_templates',
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
