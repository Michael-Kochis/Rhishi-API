const express = require('express');

const chart = require('./chart-model');
const {verifyRV} = require('./chart-middleware');
const router = express.Router();

router.post('/', [verifyRV], (req, res, next) => {
    const { rv } = req.body;

    returnThis = chart.chartRoll(rv);
    res.status(200).json(returnThis)

    if (0 == 1) next();
})

router.post('/env', [verifyRV], (req, res, next) => {
    const { rv } = req.body;

    returnThis = chart.environRoll(rv);
    res.status(200).json(returnThis)

    if (0 == 1) next();
})

module.exports = router;