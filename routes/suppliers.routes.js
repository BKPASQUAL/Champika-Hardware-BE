const express = require("express");
const suplierController = require("../controller/suppliers.controller");

function getSuplierRoutes() {
  const router = express.Router();

  router.use(express.json());

  router.post("/", suplierController.addNewSupplier);
  router.get("/", suplierController.getAllSuppliers);


  return router;
}

module.exports = getSuplierRoutes();