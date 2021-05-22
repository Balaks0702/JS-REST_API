const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const usersRoutes = require('./routes/users');
app.use('/', usersRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
