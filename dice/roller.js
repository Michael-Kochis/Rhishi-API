const dice = (sides, number) => {
    let rolls = [];
    for (i=0; i<number; i++) {
        rolls.push(rollDie(sides))
    }
    rolls.sort();

    return rolls;
}

const diceTotal = (sides, number) => {
    rawRolls = dice(sides, number);
    total = 0;
    rawRolls.forEach((die) => total += die);

    return total;
}

const rollDie = (sides) => {
    return Math.floor(Math.random() * sides) + 1
}

const d4 = rollDie(4);
const d6 = rollDie(6);
const d8 = rollDie(8);
const d10 = rollDie(10);
const d12 = rollDie(12);
const d20 = rollDie(20);
const d100 = rollDie(100);

module.exports = {
    dice, 
    rollDie
}