const express = require('express');

const spLookup = require('./sp-model');
const router = express.Router();

router.post('/', (req, res, next) => {
    const { sp } = req.body;
    const returnThis = spLookup.lookup(sp);

    res.status(200).json(returnThis);

    if ( 0 == 1) next();
})

module.exports = router;