const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'pma__export_templates',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(64),
      allowNull: false,
    },
    export_type: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    template_name: {
      type: Sequelize.STRING(64),
      allowNull: false,
    },
    template_data: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'pma__export_templates',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
      {
        name: 'u_user_type_template',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'username' },
          { name: 'export_type' },
          { name: 'template_name' },
        ],
      },
    ],
  }
);
