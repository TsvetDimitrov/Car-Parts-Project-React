const router = require('express').Router();
const userService = require('../services/userService');

router.get('/', async(req, res) => {
    try {
        await req.auth.getToken();
        if (!req.user) {
            res.status(401).json({ ok: false, message: 'Not authorized!' });
        }
        const user = await userService.getUserByEmail(req.user.email);
        if (user.isAdmin == 0) {
            res.status(401).json({ ok: false, message: 'Not authorized!' });
            throw new Error('Not authorized!');
        }

        res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
    }

});
module.exports = router;