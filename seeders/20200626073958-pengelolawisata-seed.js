'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pengelola_wisata', [{
      NamaPengelola: 'Nanoha',
      email: 'nanoha@gmail.com',
      password: 'nanoha' 
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pengelola_wisata', null, {})
  }
};
