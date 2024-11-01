const router = require('express').Router();
const userService = require('../services/userService');
const { createShipmentRequest } = require('../services/SpeedyAPI');
const { createLabel } = require('../services/EcontAPI');

router.post('/', async (req, res) => {
    try {
        await req.auth.getToken();
        const user = await userService.getUserByEmail(req.user.email);
        const userOrders = await req.storage.getUserOrders(user.orders);
        var test = req;
        console.log(test);
        var deliveryResponse;
        var totalProductsPrice;
        if (req.body.delivery === 'Econt' && userOrders.length) {
            deliveryResponse = await createLabel(userOrders);
            totalProductsPrice = userOrders.reduce((acc, current) => acc + current.price, 0);
        } else if (req.body.delivery === 'Speedy' && userOrders.length) {
            deliveryResponse = await createShipmentRequest(userOrders);
            totalProductsPrice = userOrders.reduce((acc, current) => acc + current.price, 0);
        }

        res.status(200).json({ deliveryResponse, totalProductsPrice});
    } catch (err) {
        res.status(400).json({ ok: false, message: err.message });
        console.log(err.message);
    }
});

module.exports = router;