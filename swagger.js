const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce API",
      version: "1.0.0",
      description: "Simple REST API for products and orders"
    }
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec
};