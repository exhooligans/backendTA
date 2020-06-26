'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('feedback', {
      id_feedback: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_wisata: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: "wisata",
          key: "id_wisata"
        }
      },
     
      id_wisatawan: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: "wisatawan",
          key: "id_wisatawan"
        }
      },
      tgl_isi: {
        type: Sequelize.DATE
      }, 
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('feedbacks');
  }
};