function verifyRV(req, res, next) {
    const {RV} = req.body;

    if (!RV) {
        res.status(403).json({
            message:  "Missing or illegal RV"
        })
    }
}

module.exports = {
    verifyRV
}