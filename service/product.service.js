const { Products } = require("../models");

async function addProduct(product) {
  try {
    await Products.create(product);
    return {
      error: false,
      status: 201,
      payload: "New Product Successfully Created!",
    };
  } catch (error) {
    console.error("Error creating Product service:", error);
    throw error;
  }
}

async function getAllProducts() {
  try {
    const data = await Products.findAll();

    if (!data || data.length === 0) {
      return {
        error: true,
        status: 204,
        payload: "No Products Available",
      };
    }

    return {
      error: false,
      status: 200,
      payload: data,
    };
  } catch (error) {
    console.error("Error getting Products service:", error);
    throw error;
  }
}

module.exports = {
  addProduct,
  getAllProducts,
};
