'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('wisatawan', {
      id_wisatawan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING(100)
      },
      notelp: {
        type: Sequelize.STRING(20)
      },
      email: {
        type: Sequelize.STRING(20)
      },
      password: {
        type: Sequelize.STRING(12)
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('wisatawan');
  }
};
