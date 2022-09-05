const Contacts = require('../models/Contacts');

const getAllContacts = async (req, res, next) => {
  try {
    const allContacts = await Contacts.findAll();
    res.json(allContacts);
  } catch (error) {
    next(error);
  }
};

const getContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contacts.findOne({
      where: {
        id,
      },
    });

    if (contact === null) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }
    return res.json(contact);
  } catch (error) {
    next(error);
  }
};

const createContact = async (req, res, next) => {
  try {
    const {
      fullname,
      email,
      phone,
      job,
      customerId,
    } = req.body;
    const newContact = await Contacts.create({
      fullname,
      email,
      phone,
      job,
      customerId,
    });
    res.send(newContact);
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contacts.findOne({
      where: {
        id,
      },
    });
    contact.set(req.body);
    await contact.save();

    if (contact === null) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contacts.destroy({
      where: {
        id,
      },
    });

    if (contact === null) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
