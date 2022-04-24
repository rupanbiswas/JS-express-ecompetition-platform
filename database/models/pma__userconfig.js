const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('pma__userconfig', {
    username: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    timevalue: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    config_data: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pma__userconfig',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });

