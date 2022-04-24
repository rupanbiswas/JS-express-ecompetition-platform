const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define('jobs', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    queue: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    payload: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    attempts: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false
    },
    reserved_at: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true
    },
    available_at: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false
    },
    created_at: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jobs',
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
      {
        name: "jobs_queue_index",
        using: "BTREE",
        fields: [
          { name: "queue" },
        ]
      },
    ]
  });

