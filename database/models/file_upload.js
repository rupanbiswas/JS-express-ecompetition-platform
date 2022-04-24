const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('file_upload', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    path: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    storage_service: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'file_upload',
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

