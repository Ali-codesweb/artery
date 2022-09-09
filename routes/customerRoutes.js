const { Router } = require("express");
const { createCustomerController, getCustomerController,updateCustomerController } = require("../controllers/customerControllers");
const customerRoutes = Router()
customerRoutes.post("/create",createCustomerController);
customerRoutes.get("/get",getCustomerController);
customerRoutes.put("/update",updateCustomerController);


module.exports = {customerRoutes}