require('dotenv').config();


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userService = require('../services/userService');
const tokenService = require('../services/tokenService');


module.exports = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            async register(name, email, phoneNumber, password) {
                const { user, token } = await register(name, email, phoneNumber, password);
                res.cookie(process.env.COOKIE_NAME, token);
                return {
                    name: user.name,
                    _id: user._id,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    authToken: token,
                    isAdmin: user.isAdmin,
                };
            },
            async login(email, password) {
                const { user, token } = await login(email, password);
                res.cookie(process.env.COOKIE_NAME, token);
                return {
                    name: user.name,
                    _id: user._id,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    authToken: token,
                    isAdmin: user.isAdmin,
                };
            },

            async getToken() {
                const token = req.headers['x-authorization'];

                try {
                    if (token) {
                        const userData = jwt.verify(token, process.env.TOKEN_SECRET);
                        req.user = userData;
                    }
                } catch (err) {
                    console.log(err.message);
                    res.status(401).json({ message: 'Invalid access token. No permission!' });
                }
            },
            logout() {
                res.clearCookie(process.env.COOKIE_NAME);
            }
        };
        next();
    }
};

async function register(name, email, phoneNumber, password) {
    const existing = await userService.getUserByEmail(email);

    if (existing) {
        throw new Error('Вече има съществуващ акаунт с този email адрес!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(name, email, phoneNumber, hashedPassword);
    let tokenEmail = tokenService.createEmailToken(user._id, email, user.name);

    const token = generateToken(user);
    return { user, token };

}

async function login(email, password) {
    const user = await userService.getUserByEmail(email);
    if (!user) {
        const err = new Error('Невалиден мейл!');
        err.type = 'credential';
        throw err;
    }

    const hasMatch = await bcrypt.compare(password, user.password);
    if (!hasMatch) {
        const err = new Error('Грешна парола!');
        err.type = 'credential';
        throw err;
    }else if(!user.isVerified){
        const err = new Error('Вашият имейл адрес не е потвърден. Моля потвърдете го и пробвайте отново!');
        err.type = 'unverified email';
    }
    const token = generateToken(user);
    return { user, token };

}


function generateToken(userData) {
    return jwt.sign({
        _id: userData._id,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        name: userData.name
    }, process.env.TOKEN_SECRET);
};

function parseToken(req, res) {
    const token = req.cookies[process.env.COOKIE_NAME];

    if (token) {
        try {
            const userData = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData;
        } catch (err) {
            console.log(err.message);
            res.clearCookie(process.env.COOKIE_NAME);
            return false;
        }
    }

    return true;
}