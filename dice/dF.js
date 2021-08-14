const { rollDie } = require('./roller')

const dF = (number) => {
    total = 0;
    for (i=0; i<number; i++) {
        total += (rollDie(3) -2)
    }
    return total;
}

module.exports = {
    dF
}