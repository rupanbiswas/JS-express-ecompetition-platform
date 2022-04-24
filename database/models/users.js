const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'users',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    f_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    l_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: 'users_email_unique',
    },
    phone: {
      type: Sequelize.BIGINT,
      allowNull: true,
    },
    email_verified_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    remember_token: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    created_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    updated_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
      {
        name: 'users_email_unique',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'email' }],
      },
    ],
  }
);
