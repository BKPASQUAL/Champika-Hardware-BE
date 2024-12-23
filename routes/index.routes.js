const express = require("express");

const supplierRoute = require("./suppliers.routes");
const getProductRoutes = require ("./product.routes")

function routes() {
  const router = express.Router();

  router.use("/supplier", supplierRoute);
  router.use("/product", getProductRoutes);

  return router;
}

module.exports = routes();
