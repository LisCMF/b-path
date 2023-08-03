






const BpathController = {};

BpathController.addRate = (req, res, next) => {
    console.log(req.body);
    res.locals.test = "SENT BACK";
    return next();
}


module.exports = BpathController;