const { ErrorResponse } = require('../utils/Response')
const { user } = require('../exports/library');
const { checkToken } = require('../services/auth');
const jwt = require('jsonwebtoken');

class auth {
    authenticateToken = async (req, res, next) => {
        try {
            const token = req.headers["authorization"];
            // console.log(req.headers.authorization);
            // console.log(token.split(' ').pop())
            switch (token) {
                case undefined: {
                    return ErrorResponse(res, "Unauthorized access !");
                }
                default: {
                    var decoded = await checkToken(token.split(' ').pop());
                    // req.user = await user.findOne({ _id: decoded.id });
                    req.user = await user.findOne({ _id: decoded.id});
                    
                }
            }
            next();
        }
        catch (error) {
            ErrorResponse(res, error);
        }

    }
}


object = new auth();

exports.authenticateToken = object.authenticateToken;

