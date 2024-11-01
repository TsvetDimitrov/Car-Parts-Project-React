const router = require('express').Router();
const userService = require('../services/userService');

router.get('/', async(req, res) => {
    try {
        await req.auth.getToken();
        if (!req.user) {
            return res.status(401).json({ ok: false, message: 'Недостатъчно права!' });
        }
        const user = await userService.getUserByEmail(req.user.email);
        if (user.isAdmin == 0) {
            return res.status(401).json({ ok: false, message: 'Недостатъчно права!' });
        }

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
    }

});
module.exports = router;