const { Suppliers } = require("../models");

async function addNewSupplier(supplier) {
  try {
    await Suppliers.create(supplier);

    return {
      error: false,
      status: 201,
      payload: "New Supplier Successfully Created!",
    };
  } catch (error) {
    console.error("Error creating Supplier service:", error);
    throw error;
  }
}

async function getAllSuppliers() {
  try {
    const data = await Suppliers.findAll();

    if (!data || data.length === 0) {
      return {
        error: true,
        status: 204,
        payload: "No Supplier Available",
      };
    }

    return {
      error: false,
      status: 200,
      payload: data,
    };
  } catch (error) {
    console.error("Error getting Supplier service:", error);
    throw error;
  }
}

module.exports = {
  addNewSupplier,
  getAllSuppliers,
};
