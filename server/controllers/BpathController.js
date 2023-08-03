const Bikepath = require("../models/bpathModel.js");

const BpathController = {};

BpathController.addRate = async (req, res, next) => {
    console.log("addRate controler req.body ->", req.body);
    const {segment, scenaryRate, safetyRate, infrastructureRate, users} = req.body;

    const ratedPath = await Bikepath.create(
        {
            segment: segment,
            scenaryRate : scenaryRate,
            safetyRate : safetyRate,
            infrastructureRate : infrastructureRate,
            numberOfrates: 1,
            arrOfUsers: [users]  
        }
    );

    await Bikepath.find({}).then((model) => console.log(model));
    res.locals.newPath = ratedPath;
    return next();
}


BpathController.updateRate = async (req, res, next) => {
    // console.log("addRate controler req.body ->", req.body);
    // const {segment, scenaryRate, safetyRate, infrastructureRate, users} = req.body;

    // const ratedPath = await Bikepath.create(
    //     {
    //         segment: segment,
    //         scenaryRate : scenaryRate,
    //         safetyRate : safetyRate,
    //         infrastructureRate : infrastructureRate,
    //         numberOfrates: 1,
    //         arrOfUsers: [users]  
    //     }
    // );

    // await Bikepath.find({}).then((model) => console.log(model));
    // res.locals.newPath = ratedPath;
    // return next();
}

BpathController.deleteRate = async (req, res, next) => {
    // console.log("addRate controler req.body ->", req.body);
    // const {segment, scenaryRate, safetyRate, infrastructureRate, users} = req.body;

    // const ratedPath = await Bikepath.create(
    //     {
    //         segment: segment,
    //         scenaryRate : scenaryRate,
    //         safetyRate : safetyRate,
    //         infrastructureRate : infrastructureRate,
    //         numberOfrates: 1,
    //         arrOfUsers: [users]  
    //     }
    // );

    // await Bikepath.find({}).then((model) => console.log(model));
    // res.locals.newPath = ratedPath;
    // return next();
}


module.exports = BpathController;


// [webpack-dev-server] [HPM] Error occurred while proxying request localhost:8080/api/addRate to http://localhost:3000/ [ECONNRESET] (https://nodejs.org/api/errors.html#errors_common_system_errors)