const express = require("express");
const productController = require("../controller/product.controller");

function getProductRoutes() {
  const router = express.Router();

  router.use(express.json());

  router.post("/", productController.createProduct);
  router.get("/", productController.getAllProducts);


  return router;
}

module.exports = getProductRoutes();