
function validDice(req, res, next) {
    const {sides, number} = req.body;

    if ((!sides) || (sides <= 0)) {
        res.status(403).json({
            message: "Illegal or missing number of sides"
        })
    } else if ((!number) || (number <= 0)) {
        res.status(403).json({
            message: "Illegal or missing number of dice"
        })
    } else { 
        next();
    }
    next();
}

module.exports = {
    validDice
}