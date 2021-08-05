const express = require('express');

const persona = require("./persona-model");
const router = express.Router()

router.get('/', (req, res, next) => {
    let {ownerID} = req.decoded;
    persona.findPersonaByOwnerID(ownerID)
    .then(resp => {
        res.status(200).json(resp);
    }).catch(next);
})

module.exports = router;