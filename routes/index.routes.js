const express = require("express");

const supplierRoute = require("./suppliers.routes");

function routes() {
  const router = express.Router();

  router.use("/supplier", supplierRoute);

  return router;
}

module.exports = routes();
