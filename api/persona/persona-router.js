const express = require('express');

const persona = require("./persona-model");
const router = express.Router()

router.get('/', (req, res, next) => {
    let { id } = req.decoded;
    persona.findPersonaByOwnerID(id)
        .then(resp => {
            res.status(200).json(resp);
        }).catch(next);
})

router.get('/name/:personaName', (req, res, next) => {
    const {personaName} = req.params;

    persona.findPersonaByName(personaName)
        .then(resp => {
            res.status(200).json(resp);
        }).catch(next);
})

router.post('/', (req, res, next) => {
    const neoPersona = req.body;
    persona.createPersona(neoPersona)
        .then(resp => {
          res.status(200).json(resp);
        }).catch(next)
})

module.exports = router;