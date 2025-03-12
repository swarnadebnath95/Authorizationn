const User = require('../model/user');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { HashPassword } = require('../../middleware/authCheck')


class AuthController {


    // Register a new user with a role


    async registerUser(req, res) {

        try {

            const { username, password, role } = req.body;
            const hashedPassword = await HashPassword(password);

            const user = new User({
                username,
                password: hashedPassword,
                role,
            });

            const token = jwt.sign({
                userId: user._id,
                username: user.username,
                role: user.role
            }, process.env.SECRETE_KEY,
                { expiresIn: "1h" }
            );

            req.user = token;
            await user.save();

            return res.status(200).json({
                message: "User registration successfull",
                token
            });

        } catch (error) {
            return res.status(500).json({
                error: error, "message": "User registration error"
            });
        }
    }

}


const authController = new AuthController()
module.exports = authController