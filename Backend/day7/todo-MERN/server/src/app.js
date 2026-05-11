const express = require('express');
const cors = require('cors');
const listRoutes = require('./routes/list.routes');
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173' 
}));
app.use('/api/v1',listRoutes)
module.exports = app;