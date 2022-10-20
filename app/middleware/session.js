const verifyToken = require('../generateToken/verifyToken')

const checkJwt = (req, res, next) => {

    try {
        
        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split(' ').pop() // -> Bearer sdfsdgfgdfgdfgdf
        const verify = verifyToken(`${jwt}`)
        if(!verify) {
            res.status(401)
            res.send('NO_HAVE_IN_JWT_VALIDATE')
        }
        req.user = verify
        console.log( { jwtByUser } )
        next();

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    checkJwt
}