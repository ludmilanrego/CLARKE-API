const { pool } = require("../connection");

const listAllSuppliers = async (req, res) => {

    try {
        const query = 'SELECT * FROM suppliers'
        const { rows } = await pool.query(query);

        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const listSuppliersMinKwh = async (req, res) => {
    const { energyConsumption } = req.body

    const query =
        "SELECT * FROM suppliers as s WHERE s.min_kwh <= $1;"

    const { rowCount, rows } = await pool.query(query, [energyConsumption]);

    if (rowCount <= 0) {
        return res.status(400).json("Não existe fornecedor disponível para esse valor consumo");
    }

    return res.status(200).json(rows);
}

module.exports = {
    listAllSuppliers,
    listSuppliersMinKwh
}