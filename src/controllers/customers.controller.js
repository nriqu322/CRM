const Customers = require('../models/Customers');
const Projects = require('../models/Projects');

const getAllCustomers = async (req, res, next) => {
  try {
    const allCustomers = await Customers.findAll();
    res.json(allCustomers);
  } catch (error) {
    next(error);
  }
};

const getCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await Customers.findOne({
      where: {
        id,
      },
    });

    if (customer === null) {
      return res.status(404).json({
        message: 'Customer not found',
      });
    }
    return res.json(customer);
  } catch (error) {
    next(error);
  }
};

const createCustomer = async (req, res, next) => {
  const { name } = req.body;

  try {
    const newCustomer = await Customers.create(name);
    res.send(newCustomer);
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const customer = await Customers.findOne({
      where: {
        id,
      },
    });
    customer.name = name;
    await customer.save();

    if (customer === null) {
      return res.status(404).json({
        message: 'Customer not found',
      });
    }
    res.json(customer);
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await Customers.destroy({
      where: {
        id,
      },
    });

    if (customer === null) {
      return res.status(404).json({
        message: 'Customer not found',
      });
    }
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const getCustomerProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const projects = await Projects.findAll({
      where: { customerId: id },
    });

    if (projects === null) {
      return res.status(404).json({
        message: 'Projects not found for this customer',
      });
    }
    return res.json(projects);
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
  getCustomerProjects,
};
