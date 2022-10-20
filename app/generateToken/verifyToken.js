const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET

module.exports = (verify) => {
    const isOk = jwt.verify( verify, SECRET )
    return isOk
}