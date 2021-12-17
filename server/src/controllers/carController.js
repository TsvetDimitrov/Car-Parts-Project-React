const router = require('express').Router();


router.post('/', async (req, res) => {
    try {
        await req.auth.getToken();
        await req.storage.createCar(req.body, req.user.email);

        res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const cars = await req.storage.getCarRequests();
        res.status(200).json(cars);
    } catch (err) {
        res.status(400).json({ ok: false, message: err.message });
        console.log(err.message);
    }
});

module.exports = router;