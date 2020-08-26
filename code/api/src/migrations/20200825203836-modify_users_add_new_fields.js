'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users', 'address',
        {
          type: Sequelize.TEXT,
          allowNull: true,
          defaultValue: null
        }
      ),
      queryInterface.addColumn(
        'users', 'image',
        {
          type: Sequelize.TEXT,
          allowNull: true,
          defaultValue: null
        }
      ),
      queryInterface.addColumn(
        'users', 'bio',
        {
          type: Sequelize.TEXT,
          allowNull: true,
          defaultValue: null
        }
      ),
      queryInterface.addColumn(
        'users', 'availabilityDate',
        {
          type: Sequelize.TEXT,
          allowNull: true,
          defaultValue: null
        }
      )]);
    },


  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users','address'),
      queryInterface.removeColumn('users','image'),
      queryInterface.removeColumn('users','bio'),
      queryInterface.removeColumn('users','availabilityDate')
    ]);
  }
};
