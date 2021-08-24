function isEven(number) {
    return (number%2 == 0)
}

function lookup(sp) {
    let base = 10;
    if (sp < 0) 
        sp =0;
    multiples = sp /2;
    if (!isEven(sp))
        base = 15;
    
    return base * ( 2 ** multiples)
}

module.exports = {
    lookup
}