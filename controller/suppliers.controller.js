const supplierService = require("../service/suppliers.service");

async function addNewSupplier(req, res) {
  try {
    const newSupplier = req.body;

    const result = await supplierService.addNewSupplier(newSupplier);

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
    console.log("Error creating supplier controller: ", error);
    return res.status(500).json({
      error: true,
      payload: error.message || "Internal Server Error",
    });
  }
}

module.exports = {
    addNewSupplier
}