const getAllContacts = async (req, res) => {
  res.send('get a contact list');
};

const getContact = async (req, res) => {
  res.send('get a contact by id');
};

const createContact = async (req, res) => {
  res.send('create a contact');
};

const updateContact = async (req, res) => {
  res.send('update a contact');
};

const deleteContact = async (req, res) => {
  res.send('delete a contact');
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
