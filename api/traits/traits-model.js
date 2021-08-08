const db = require('../../data/dbConfig');

module.exports = {
    findTrait,
    findTraitByID,
    createTrait,
    removeTrait,
    updateTrait
}

// add
async function createTrait(neoTrait) {
    neoTrait.traitID = Date.now();

    return await db('traits')
        .insert(neoTrait, ['traitID','traitName'])
}

// findAll
async function findTrait() {
    return await db("traits");
}

// findByID
async function findTraitByID(key) { 
    key = parseInt(key);
    foundTrait = await db("traits")
        .where({personaID: key})
        .first()
        .leftJoin('stats', 'traits.statID', 'stats.statID')
        .select('traits.traitID', 'traits.traitName', 'stats.statName');
}

//removeTrait
async function removeTrait(key) {
    key = parseInt(key);
    return await db("traits")
        .where({traitID: key})
        .del();
}

//updatePersona
async function updateTrait(neoTrait) {
    let { traitID } = neoTrait;
    return await db("traits")
        .where(traitID)
        .update(neoTrait);
}