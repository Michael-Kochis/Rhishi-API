function isEven(number) {
    return (number%2 == 0)
}

function lookup(sp) {
    let base = 10;
    if (sp < 0) 
        sp =0;
    let multiples = Math.floor(sp /2);
    if (!isEven(sp))
        base = 15;
    
    let answer = base * ( 2 ** multiples)
    return {
        high: answer,
        low: answer/5
    }
}

module.exports = {
    lookup
}