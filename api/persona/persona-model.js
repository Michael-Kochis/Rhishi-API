const db = require('../../data/dbConfig');

module.exports = {
    findPersona,
    findPersonaByID,
    findPersonaByName,
    findPersonaByOwnerID,
    createPersona,
    removePersona,
    updatePersona
}

// add
async function createPersona(neoPersona) {
    neoPersona.personaID = Date.now();

    return db('persona')
        .insert(neoPersona, ['personaID', 'ownerID', 'personaName']);
}

// findAll
async function findPersona() {
    return await db("persona");
}

// findByID
async function findPersonaByID(key) { 
    key = parseInt(key);
    return db("persona")
        .where({personaID: key})
        .first();
}

// findByOwnerID
async function findPersonaByOwnerID(key) { 
    return db("persona")
        .where({ownerID: key});
}

async function findPersonaByName(key) {
    return db("persona")
        .where({personaName: key});
}

//removePersona
async function removePersona(key) {
    key = parseInt(key);
    return db("persona")
        .where({personaID: key})
        .del();
}

//updatePersona
async function updatePersona(neoPersona) {
    let { personaID } = neoPersona;
    return db("persona")
        .where(personaID)
        .update(neoPersona);
}