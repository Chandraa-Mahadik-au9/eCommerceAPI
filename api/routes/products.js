const express = require('express');
const router = express.Router();
const productsList = require('../data/productsList.js');

router.get('/', (req, res, next) => {
    res.status(200).json({
        // message: 'Handling GET requests to products'
        data: productsList
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    if (id === 'special') {
        res.status(200).json({
            message: 'This is the special ID product.',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'An ID is passed.'
        });
    }
    
});


// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Handling POST requests to products'
//     });
// });

module.exports = router;