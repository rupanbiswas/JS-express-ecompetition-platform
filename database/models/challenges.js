const Sequelize = require('sequelize');
const sequelize = require('../../commons/dbconnection');

module.exports =sequelize.define('challenges', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    competition_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    theme_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    class_group_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    skill_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    booking_fee: {
      type: Sequelize.DECIMAL(8,2),
      allowNull: true,
      defaultValue: 0.00
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1=>Active,0=>Inactive"
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    guidelines: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    how_it_works: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    featured_image: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    featured_video: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    gallery_images: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    qualifier_certificate_url: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    final_certificate_url: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    prep_document_url: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    visibility: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1=>Visible,0=>Invisible"
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
    },
    previous_episode_url: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    background_color: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    slug: {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: "challenges_slug_unique"
    },
    prize_image: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    day_of_challenge_text: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'challenges',
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
        name: "challenges_slug_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "slug" },
        ]
      },
    ]
  });

