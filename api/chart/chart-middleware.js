function verifyRV(req, res, next) {
    const { rv } = req.body;

    if (rv == undefined || rv == null) {
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