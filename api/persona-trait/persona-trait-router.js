const express = require('express');

const persona = require("./persona-trait-model");
const router = express.Router()

router.get('/', (req, res, next) => {
    let { id } = req.decoded;
    persona.findPersonaTraitByID(id)
        .then(resp => {
            res.status(200).json(resp);
        }).catch(next);
})

router.get('/persona/:personaID', (req, res, next) => {
    const {personaID} = req.params;

    persona.findPersonaTraitByPersonaID(personaID)
        .then(resp => {
            res.status(200).json(resp);
        }).catch(next);
})

router.post('/', (req, res, next) => {
    const neoPersonaTrait = req.body;
    neoPersonaTrait.personaTraitID = Date.now();
    
    persona.createPersonaTrait(neoPersonaTrait)
        .then(resp => {
          res.status(200).json(resp);
        }).catch(next)
})

router.post('/repairMerchant/:personaID', (req, res, next) => {
    const {personaID} = req.params;

    persona.makePersonaRepairMerchant(personaID)
        .then(resp => {
            res.status(201).json(resp)
        }).catch(next);
})

module.exports = router;