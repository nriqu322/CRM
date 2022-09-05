const { Router } = require('express');
const {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customers.controller');

const router = Router();

router.get('/customers', getAllCustomers);

router.get('/customers/:id', getCustomer);

router.post('/customers', createCustomer);

router.put('/customers/:id', updateCustomer);

router.delete('/customers/:id', deleteCustomer);

module.exports = router;
