'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return(queryInterface.bulkInsert("products", [{
      product_id: 1,
      product_name: "Red Hoodie New Design",
      description: "Nice and Warm",
      product_type: "Hoodie",
      price: 35
    }]))
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return(queryInterface.bulkDelete("products", null, {}))
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
