const pool = require('../db');

const getAllCustomers = async (req, res, next) => {
  try {
    const allCustomers = await pool.query('SELECT * FROM customers');
    res.json(allCustomers.rows);
  } catch (error) {
    next(error);
  }
};

const getCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM customers WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Customer not found',
      });
    }
    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createCustomer = async (req, res, next) => {
  const customerName = req.body.customer_name;

  try {
    const result = await pool.query('INSERT INTO customers (customer_name) VALUES ($1) RETURNING *', [customerName]);
    res.send(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customerName = req.body.customer_name;
    const result = await pool.query('UPDATE customers SET customer_name = $1 WHERE id = $2 RETURNING *', [customerName, id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Customer not found',
      });
    }
    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }


};

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM customers WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'Customer not found',
      });
    }
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
