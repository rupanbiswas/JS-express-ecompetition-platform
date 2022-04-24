const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define('profiles', {
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
    f_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    l_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    full_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    class_group_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    class: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    school_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    melio_id: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    date_of_birth: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    gender: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    profile_pic: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    school_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    school_city: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    school_country: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    school_id_pic: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    missing_fields_error_notes: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    nickname: {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: "profiles_nickname_unique"
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
    tableName: 'profiles',
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
        name: "profiles_nickname_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nickname" },
        ]
      },
    ]
  });

