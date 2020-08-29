
// Add up migration for new attributes
// [image_link(string), description(string), shipping_address(string),
// (something to track availability date(s?) for receiving orders)]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // Add down migration for newly added attributes
  // [image_link(string), description(string), shipping_address(string),
  // (something to track availability date(s?) for receiving orders)]
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
