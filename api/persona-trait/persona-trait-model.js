const db = require('../../data/dbConfig');

module.exports = {
    findPersonaTrait,
    findPersonaTraitByID,
    findPersonaTraitByPersonaID,
    findPersonaTraitByTraitID,
    createPersonaTrait,
    makePersonaRepairMerchant,
    removePersonaTrait,
    updatePersonaTrait
}

async function createPersonaTrait(neoPersonaTrait) {
    return db('persona_traits')
        .insert(neoPersonaTrait, ['personaTraitID', 'personaID', 'traitID', 'bonus', 'max']);
}

async function findPersonaTrait() {
    return await db("persona_traits");
}

async function findPersonaTraitByID(key) { 
    key = parseInt(key);
    return db("persona_traits")
        .where({personaTraitID: key})
        .first();
}

async function findPersonaTraitByPersonaID(key) { 
    return db("persona_traits")
        .where({personaID: key});
}

async function findPersonaTraitByTraitID(key) { 
    return db("persona_traits")
        .where({traitID: key});
}

async function removePersonaTrait(key) {
    key = parseInt(key);
    return db("persona_traits")
        .where({personaTraitID: key})
        .del();
}

async function makePersonaRepairMerchant(key) { 
    for (i=2; i<=20; i++) {
        time = Date.now();
        nextTrait = {
            personaTraitID: time,
            personaID: key,
            traitID: i,
            bonus: 1,
            max: 3
        }
        await createPersonaTrait(nextTrait);
    }
    return db("persona_traits")
        .where({personaID: key});
}



//updatePersona
async function updatePersonaTrait(neoPersonaTrait) {
    let { personaTraitID } = neoPersonaTrait;
    return db("persona_traits")
        .where(personaTraitID)
        .update(neoPersonaTrait);
}