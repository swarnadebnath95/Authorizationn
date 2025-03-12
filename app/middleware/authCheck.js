const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const HashPassword = async (password) => {

    try {
        return await bcrypt.hash(password, 10)
    } catch (error) {
        console.log(error);
    }
}

const ComparePassword = async (password, saltpassword) => {

    try {
        return await bcrypt.compare(password, saltpassword)
    } catch (error) {
        console.log(error);
    }
}


const authCheck = async (req, res, next) => {

    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            status: "false",
            message: "a token is required ",
        });
    }

    try {

        const decoded = jwt.verify(token, process.env.SECRETE_KEY);
        req.user = decoded;
        return next();

    } catch (error) {
        return res.status(401).send({
            status: false,
            message: "invalid token",
        });
    }
    

}


module.exports = {
    HashPassword,
    ComparePassword,
    authCheck
}