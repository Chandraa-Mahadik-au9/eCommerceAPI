const express = require('express');
const router = express.Router();
const catagoriesList = require('../data/catagoriesList');

router.get('/', (req, res, next) => {
    res.status(200).json({
        // message: 'Handling GET requests to products'
        data: catagoriesList
    });
});


module.exports = router;