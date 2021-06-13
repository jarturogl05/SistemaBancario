const jwt = require('jwt-simple');


function createToken (user, role){
    const payload = {
        user,
        role
    }
    return jwt.encode(payload, process.env.SECRETKEY);
}


module.exports = {createToken}