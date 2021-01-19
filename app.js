const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const catagoryRoutes = require('./api/routes/catagories');

app.use('/products', productRoutes);
app.use('/catagories', catagoryRoutes);

module.exports = app;