const { Router } = require('express');
const {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contacts.controller');

const router = Router();

router.get('/contacts', getAllContacts);

router.get('/contacts/:id', getContact);

router.post('/contacts', createContact);

router.put('/contacts/:id', updateContact);

router.delete('/contacts/:id', deleteContact);

module.exports = router;
