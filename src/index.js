const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./db');

const contactRoutes = require('./routes/contacts.routes');
const customerRoutes = require('./routes/customers.routes');
const meetingRoutes = require('./routes/meetings.routes');
const projectRoutes = require('./routes/projects.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(contactRoutes);
app.use(customerRoutes);
app.use(meetingRoutes);
app.use(projectRoutes);

app.use((err, req, res, next) => res.json({
  message: err.message,
}));

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(4000);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
