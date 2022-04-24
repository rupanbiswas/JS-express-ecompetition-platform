const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define('discount_codes', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    coupon_type: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    coupon_amount: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    coupon_end_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    coupon_start_date: {
      type: Sequelize.DATEONLY,
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
    tableName: 'discount_codes',
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

