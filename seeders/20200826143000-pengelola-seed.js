'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admin', [{
      nama_admin: 'Vidia',
      email:'vidia@gmail.com',
      password: 'admin'
  

    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admin', null, {})
  }
};
