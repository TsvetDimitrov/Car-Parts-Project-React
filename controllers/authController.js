const router = require('express').Router();
const passport = require('passport');
const tokenService = require('../services/tokenService');
const userService = require('../services/userService');

router.post('/register', async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
    try {
        let userData = await req.auth.register(name, email, phoneNumber, password);
        res.json({
            name: userData.name,
            _id: userData._id,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            authToken: userData.authToken,
            isAdmin: userData.isAdmin,
        });
    } catch (err) {
        console.log(err.message);
        res.json({
            type: 'error',
            message: err.message,
        });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let userData = await req.auth.login(email, password);

        // Commented out because third party for the verification is not working anymore.
        // if(!userData.isEmailVerified){
        //     throw new Error('Not verified account. Please check your mail and confirm your account.');
        // }

        res.json({
            name: userData.name,
            _id: userData._id,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            authToken: userData.authToken,
            isAdmin: userData.isAdmin
        });
    } catch (err) {
        console.log(err.message);
        res.status(401).json({
            type: 'error',
            ok: false,
            message: err.message,
        });
    }
});

router.get('/logout', async (req, res) => {
    console.log('Logging out...');
    req.auth.logout();
    res.json({ ok: true });
});

router.get('/confirmation/:email/:token', async (req, res) => {
    const token = await tokenService.findAndVerifyToken(req.params.token);
    userService.verifyUserEmailToken(res, token._userId, req.params.email);
});

//FACEBOOK LOGIN: 
router.get('/facebook',
    passport.authenticate('facebook'),
    function (req, res) {
        console.log('here');
        passport.authenticate('facebook');
        res.json({ ok: true });
    });

router.get('/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }),
    function (req, res) {
        console.log(req.user);
        console.log('here2');
        res.json({ ok: true });
    }
)

module.exports = router;