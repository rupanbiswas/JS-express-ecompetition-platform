const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('bookings', {
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
    booking_status: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    order_number: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    booking_amount: {
      type: Sequelize.DECIMAL(8,2),
      allowNull: true
    },
    payment_status: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    payment_info: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    booking_date_time: {
      type: Sequelize.DATE,
      allowNull: true
    },
    status: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    notes: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    order_id: {
      type: Sequelize.STRING(255),
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
    created_by: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bookings',
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

