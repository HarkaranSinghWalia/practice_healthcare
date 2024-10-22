const{constants}=require("../constrants");
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode: 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR: res.json({
            title: "Validation Failed",
            message: err.message,
            stackTrace:err.stack,
        });
        break;
        case constants.NOT_FOUND: res.json({
            title: "Not Found",
            message: err.message,
            stackTrace: err.stack,
        });
        case constants.UNAUTHORIZED: res.json({
            title: "unauthorized",
            message: err.message,
            stackTrace: err.stack,
        });
        case constrants.SERVER: res.json({
            title: "Server",
            message: err.nessage,
            stackTree: err.stack,
        });

        case constrants.FORBIDDEN: res.json({
            title: "Forbidden",
            message: err.nessage,
            stackTree: err.stack,
        });

        default:
            console.log("No error, All Good!!");
            break;
    }
};

module.exports = errorHandler;