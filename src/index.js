const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

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

app.listen(4000);
