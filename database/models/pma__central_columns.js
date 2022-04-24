const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('pma__central_columns', {
    db_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    col_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    col_type: {
      type: Sequelize.STRING(64),
      allowNull: false
    },
    col_length: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    col_collation: {
      type: Sequelize.STRING(64),
      allowNull: false
    },
    col_isNull: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    col_extra: {
      type: Sequelize.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    col_default: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pma__central_columns',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "db_name" },
          { name: "col_name" },
        ]
      },
    ]
  });

