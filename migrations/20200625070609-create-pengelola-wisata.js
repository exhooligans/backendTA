'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pengelola_wisata', {
      id_pengelola: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NamaPengelola: {
        type: Sequelize.STRING(100)
      },
      email: {
        type: Sequelize.STRING(20)
      },
      password: {
        type: Sequelize.STRING(20)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pengelola_wisata');
  }
};