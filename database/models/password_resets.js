const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('password_resets', {
    email: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    token: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'password_resets',
    timestamps: false,
    indexes: [
      {
        name: "password_resets_email_index",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });

