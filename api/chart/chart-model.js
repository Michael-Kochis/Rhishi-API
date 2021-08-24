const roller = require("../../dice/roller");

const chart = [
    [0, 1, 3, 7],
    [0, 2, 6, 9],
    [0, 3, 7, 12],
    [0, 4, 9, 19],
    [0, 6, 13, 25],
    [0, 7, 19, 35],
    [1, 11, 26, 50],
    [2, 13, 33, 67],
    [3, 20, 50, 98],
    [9, 37, 79, 99],
    [23, 55, 98, 99],
    [47, 95, 98, 99],
    [96, 97, 98, 99]
]

function chartRoll(refValue) {
    chartLine = findChartLine(refValue);
    roll = roller.rollDie(100);
    color = findColor(chartLine, roll)

    return {roll, color};
}

function environRoll(refValue) {
    neoRef = (refValue*2)
    return chartRoll(neoRef)
}

function findChartLine(refValue) {
    if (refValue <= -6)
        refValue = -6;
    if (refValue >= 6)
        refValue = 6;

    return chart[refValue+6];
}

function findColor(line, roll) {
    color = "GRAY";

    if (roll <= line[0]) {
        color = "RED"
    } else if (roll <= line[1]) {
        color = "ORANGE"
    } else if (roll <= line[2]) {
        color = "YELLOW"
    } else if (roll <= line[3]) {
        color = "GREEN"
    } 
 
    return color
}

module.exports = {
    chartRoll,
    environRoll
}
