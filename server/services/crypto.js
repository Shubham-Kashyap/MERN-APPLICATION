const { bcrypt } = require('../exports/library');
// const bcrypt = require('bcrypt');

class crypto {
    
    encrypt = async (password) => {
       
        const hash = bcrypt.hashSync(password, 10);
        return hash;
    }

    compare =  (pwd, hash) => {
        return bcrypt.compareSync(pwd, hash);
    }
}

const obj = new crypto();
exports.encryptHash = obj.encrypt;
exports.compareHash = obj.compare;