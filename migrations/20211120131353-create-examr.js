'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('examrs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sid: {
        type: Sequelize.STRING
      },
      sname: {
        type: Sequelize.STRING
      },
      ename: {
        type: Sequelize.STRING
      },
      edate: {
        type: Sequelize.STRING
      },
      results: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('examrs');
  }
};