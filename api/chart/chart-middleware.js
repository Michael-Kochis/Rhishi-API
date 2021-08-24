function verifyRV(req, res, next) {
    const {RV} = req.body;

    if (RV == undefined || RV == null) {
        res.status(403).json({
            message:  "Missing or illegal RV"
        })
    } else {
        next();
    }
}

module.exports = {
    verifyRV
}