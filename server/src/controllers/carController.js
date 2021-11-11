const router = require('express').Router();


router.post('/', async(req, res) => {
    try {
        await req.auth.getToken();
        await req.storage.createCar(req.body, req.user.email);

        res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;