const express = require('express');

const roller = require("../../dice/roller");
const router = express.Router();

const {validDice} = require('./roller-middleware');

router.post("/", [validDice], (req, res, next) => {
    const {sides, number} = req.body;

    const result = dice(sides, number);
    res.status(200).json({sides, number, result})
})

module.exports = {
    router
}
