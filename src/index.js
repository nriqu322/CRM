const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./db');
require('./models/Customers');
require('./models/Contacts');
require('./models/Projects');
require('./models/Meetings');

const contactRoutes = require('./routes/contacts.routes');
const customerRoutes = require('./routes/customers.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(contactRoutes);
app.use(customerRoutes);

app.use((err, req, res, next) => res.json({
  message: err.message,
}));

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(4000);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
