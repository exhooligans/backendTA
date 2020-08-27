'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('wisata', {
      id_wisata: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pengelola: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: "Pengelola_wisata",
          key: "id_pengelola"
        }
      },
      NamaWisata: {
        type: Sequelize.STRING(100)
      },
      FotoWisata: {
        type: Sequelize.STRING(255)
      },
      AlamatWisata: {
        type: Sequelize.STRING(100)
      },
      Photo360: {
        type: Sequelize.STRING(255)
      },


    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('wisata');
  }
};