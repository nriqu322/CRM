const express = require('express');
const morgan = require('morgan');

const contactRoutes = require('./routes/contacts.routes');
const customerRoutes = require('./routes/customers.routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(contactRoutes);
app.use(customerRoutes);

app.listen(4000);
