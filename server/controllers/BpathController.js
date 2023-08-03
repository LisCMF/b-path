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
    console.log("addRate controler req.body ->", req.body);
    const {segment, scenaryRate, safetyRate, infrastructureRate, users} = req.body;

    const ratedPath = await Bikepath.updateOne(
        {
            segment: segment
        }, 
        {
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

BpathController.deleteRate = async (req, res, next) => {
    console.log("addRate controler req.body ->", req.body);
    const {segment, scenaryRate, safetyRate, infrastructureRate, users} = req.body;

    const ratedPath = await Bikepath.findOneAndDelete(
        {
            segment: segment
        }
    );

    await Bikepath.find({}).then((model) => console.log(model));
    res.locals.newPath = ratedPath;
    return next();
}

BpathController.sumary = async (req, res, next) => {
    console.log("sumary controler req.body ->", req.body);
    
    const allSegments = await Bikepath.find({});
    console.log('sumary controler allSegments ->', allSegments);

    const resultObj = {};
    
    resultObj.segmentsRated = allSegments.length;
    resultObj.overallScenaryRate = allSegments.reduce((acc, curr) => {
        acc += curr.scenaryRate;
        return acc;
    }, 0) / allSegments.length;

    resultObj.overallScenaryRate = Math.round(resultObj.overallScenaryRate * 100) / 100;

    resultObj.overallSafetyRate = allSegments.reduce((acc, curr) => {
        acc += curr.safetyRate;
        return acc;
    }, 0) / allSegments.length;

    resultObj.overallSafetyRate = Math.round(resultObj.overallSafetyRate * 100) / 100;

    resultObj.overallInfrastructureRate = allSegments.reduce((acc, curr) => {
        acc += curr.infrastructureRate;
        return acc;
    }, 0) / allSegments.length;

    resultObj.overallInfrastructureRate = Math.round(resultObj.overallInfrastructureRate * 100) / 100;


    /*
    The reducer will do this with the payload object
    {
          ...state,
          segmentsRated: action.payload.segmentsRated,
          overallScenaryRate : action.payload.overallScenaryRate,
          overallSafetyRate : action.payload.overallSafetyRate,
          overallInfrastructureRate : action.payload.overallInfrastructureRate,
    }
    */

    res.locals.sumObj = resultObj;
    return next();
}

module.exports = BpathController;


// [webpack-dev-server] [HPM] Error occurred while proxying request localhost:8080/api/addRate to http://localhost:3000/ [ECONNRESET] (https://nodejs.org/api/errors.html#errors_common_system_errors)