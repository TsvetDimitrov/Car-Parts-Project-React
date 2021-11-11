const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, COOKIE_NAME } = require('../config/constants');
const userService = require('../services/userService');

module.exports = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            async register(name, email, phoneNumber, password) {
                const { user, token } = await register(name, email, phoneNumber, password);
                res.cookie(COOKIE_NAME, token);
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
                res.cookie(COOKIE_NAME, token);
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
                        const userData = jwt.verify(token, TOKEN_SECRET);
                        req.user = userData;
                    }
                } catch (err) {
                    console.log(err.message);
                    res.status(401).json({ message: 'Invalid access token. No permission!' });
                }
            },
            logout() {
                res.clearCookie(COOKIE_NAME);
            }
        };
        next();
    }
};

async function register(name, email, phoneNumber, password) {
    const existing = await userService.getUserByEmail(email);

    if (existing) {
        throw new Error('This email is already registered!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(name, email, phoneNumber, hashedPassword);
    const token = generateToken(user);
    return { user, token };

}

async function login(email, password) {
    const user = await userService.getUserByEmail(email);
    if (!user) {
        const err = new Error('No such email!');
        err.type = 'credential';
        throw err;
    }

    const hasMatch = await bcrypt.compare(password, user.password);
    if (!hasMatch) {
        const err = new Error('Incorrect password!');
        err.type = 'credential';
        throw err;
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
    }, TOKEN_SECRET);
};

function parseToken(req, res) {
    const token = req.cookies[COOKIE_NAME];

    if (token) {
        try {
            const userData = jwt.verify(token, TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData;
        } catch (err) {
            console.log(err.message);
            res.clearCookie(COOKIE_NAME);
            return false;
        }
    }

    return true;
}