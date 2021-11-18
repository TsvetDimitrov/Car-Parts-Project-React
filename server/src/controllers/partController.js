const router = require('express').Router();
const userService = require('../services/userService');
const { getPartTypeMapping } = require('../utils/utils');

router.post('/create', async (req, res) => {
    try {
        await req.storage.createPart(req.body);

        res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
});

router.get('/navigationSystems', async (req, res) => {
    try {
        let products = await req.storage.getNavigationSystems();

        res.status(200).json(products);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ ok: false, message: err.message });
    }
});

router.get('/getPartsByType/:type', async (req, res) => {
    try {
        const partType = getPartTypeMapping(req.params.type);
        if (!partType) {
            throw new Error('Invalid search result.');
        }
        let parts = await req.storage.getPartsByType(partType);

        res.status(200).json([parts, partType]);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ ok: false, message: err.message });
    }
});

router.get('/getPartsByBrand/:brand', async (req, res) => {
    try {
        const brandNameTitle = req.params.brand;

        let parts = await req.storage.getPartsByBrand(brandNameTitle);

        res.status(200).json({ parts, brandNameTitle });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ ok: false, message: err.message });
    }
});

router.get('/cart', async (req, res) => {
    try {
        await req.auth.getToken();
        const user = await userService.getUserByEmail(req.user.email);
        const userOrders = await req.storage.getUserOrders(user.orders);
        console.log('усерОрдерс >>>>>',
            userOrders);
        res.status(200).json({ ok: true, userOrders });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ ok: false, message: err.message });

    }
});



router.get('/:id', async (req, res) => {
    try {
        const product = await req.storage.getPartById(req.params.id);
        console.log(product);
        res.status(200).json(product);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ ok: false });
    }

});

router.get('/', async (req, res) => {
    try {
        const products = await req.storage.getAllParts();

        res.status(200).json(products);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ ok: false });
    }
});

router.post('/add/:id', async (req, res) => {
    try {
        await req.auth.getToken();
        const user = await userService.getUserByEmail(req.user.email);
        if (!user.email) {
            res.status(401).json({ message: 'You need to be logged in, in order to buy items!' });
            throw new Error('You need to be logged in, in order to buy items!');
        }

        await req.storage.addPartToCart(req.params.id, user.email);
        res.status(200).json({ ok: true, message: 'Successfully added to the shopping-cart!' });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ ok: false });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        await req.auth.getToken();
        const user = await userService.getUserByEmail(req.user.email);
        if (user.isAdmin == 0) {
            res.status(401).json({ message: 'Not authorized!' });
            throw new Error('Not authorized!');
        }
        await req.storage.deletePartById(req.params.id);
        res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ ok: false, message: err.message });
    }
});

router.put('/edit/:id', async (req, res) => {
    try {
        const partId = req.params.id;
        const partData = req.body;
        await req.storage.editPartById(partId, partData);
        res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ ok: false, message: err.message });
    }
});

router.post('/cart/delete/:id', async (req, res) => {
    try {
        let productId = req.params.id;
        await req.auth.getToken();
        const user = await userService.getUserByEmail(req.user.email);
        console.log(productId);
        await req.storage.removeProductFromCart(user, productId);
        res.status(200).json({ ok: true });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ ok: false, message: err.message });
    }
});




module.exports = router;