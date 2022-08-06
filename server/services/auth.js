const { jwt } = require('../exports/library');


class auth {
    generateToken = async (id, expirationTime = null) => {
        if (expirationTime == null) {
            expirationTime = '1y';
        }

        const token = jwt.sign({ id: id }, process.env.JWT_AUTH_SECRET, { expiresIn: expirationTime });
        return token;
    }
    checkToken = async (token) => {

        const result = jwt.verify(token, process.env.JWT_AUTH_SECRET)
        return result;


    }
    destroyToken = async (token) => {

    }
}

const obj = new auth();
// module.exports = new auth();

exports.generateToken = obj.generateToken;
exports.checkToken = obj.checkToken;
exports.destroyToken = obj.destroyToken;