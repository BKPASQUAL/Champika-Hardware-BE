const express = require("express");
const suplierController = require("../controller/suppliers.controller");

function getSuplierRoutes() {
  const router = express.Router();

  router.use(express.json());

  router.post("/", suplierController.addNewSupplier);


  return router;
}

module.exports = getSuplierRoutes();