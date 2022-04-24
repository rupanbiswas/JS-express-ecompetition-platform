const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('customer_segments', {
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
    segment_id: {
      type: Sequelize.INTEGER,
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
    }
  }, {
    sequelize,
    tableName: 'customer_segments',
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

