const express = require('express');

const traits = require("./traits-model");
const router = express.Router()

router.get('/', (req, res, next) => {
    traits.findTraits()
    .then(resp => {
        res.status(200).json(resp);
    }).catch(next);
})

router.post('/', (req, res, next) => {
    let neoTrait = req.body;
    neoTrait.traitID = Date.now();
    
    traits.createTrait(neoTrait)
        .then(resp => {
            res.status(201).json(resp);
        }).catch(next);
})

module.exports = router;