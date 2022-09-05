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

router.get('/contacts/1', getContact);

router.post('/contacts', createContact);

router.put('/contacts', updateContact);

router.delete('/contacts', deleteContact);

module.exports = router;
