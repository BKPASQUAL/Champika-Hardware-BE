const productService = require("../service/product.service");

async function createProduct(req, res) {
  try {
    const createProduct = req.body;

    const result = await productService.addProduct(createProduct);

    if (result.error) {
      return res.status(result.status).json({
        error: true,
        payload: result.payload,
      });
    } else {
      return res.status(result.status).json({
        error: false,
        payload: result.payload,
      });
    }
  } catch (error) {
    console.log("Error creating product controller: ", error);
    return res.status(500).json({
      error: true,
      payload: error.message || "Internal Server Error",
    });
  }
}

async function getAllProducts(req, res) {
  try {
    const result = await productService.getAllProducts();

    return res.status(result.status).json({
      error: result.error,
      payload: result.payload,
    });
  } catch (error) {
    console.log("Error getting all Products: ", error);
    return res.status(500).json({
      error: true,
      payload: error.message || "Internal Server Error",
    });
  }
}

module.exports = {
  createProduct,
  getAllProducts,
};
