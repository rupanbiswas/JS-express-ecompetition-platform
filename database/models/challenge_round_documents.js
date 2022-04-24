const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports = sequelize.define(
  'challenge_round_documents',
  {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    challenge_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    round_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    report_card_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    certificate_achievement_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    certificate_participation_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    scoring_sheet_url: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    prep_document_url: {
      type: Sequelize.STRING(255),
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
    tableName: 'challenge_round_documents',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
    ],
  }
);
