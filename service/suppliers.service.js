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
    console.error("Error creating Brand service:", error);
    throw error;
  }
}

module.exports = {
  addNewSupplier,
};
