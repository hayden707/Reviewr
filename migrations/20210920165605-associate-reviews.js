'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('reviews', 'album_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'albums',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('reviews', 'album_id', {
      type: Sequelize.INTEGER
    })
  }
}
