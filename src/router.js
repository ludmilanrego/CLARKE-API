const express = require("express");
const { pool } = require("./connection")
const { listAllSuppliers, listSuppliersMinKwh } = require("./controllers/suppliers");
const validateBodyReq = require("./middleware/inputValidation");
const { energyConsumptionSchema } = require("./schemas/energyConsumption");
const router = express();

router.get("/suppliers", listAllSuppliers)
router.post("/suppliers/minkwh", validateBodyReq(energyConsumptionSchema), listSuppliersMinKwh)

module.exports = router;