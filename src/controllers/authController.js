const router = require('express').Router();
const passport = require('passport');


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
        res.status(400).json({
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