const bpathModel = require("../models/bpathModel.js");

const BpathController = {};

BpathController.addRate = (req, res, next) => {
    console.log("in addRate controller")
    console.log(req.body);
    res.locals.test = "SENT BACK";
    return next();
}

module.exports = BpathController;