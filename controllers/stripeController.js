const router = require('express').Router();
const stripe = require('stripe')('sk_test_51QJtidFgzGOyHYvHqws1UHtFgIoV0CC18K2WjKcpfAE3wrJyYUcfBAx8lJPWycrRtBLTOq7spHUF5qfkKrx41eh300YK6isRzt');

router.post('/', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        ui_mode: 'embedded',
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1QK0eqFgzGOyHYvHO1WxSTAt',
                quantity: 1,
            },
        ],
        mode: 'payment',
        return_url: `http://localhost:3000/return.html?session_id={CHECKOUT_SESSION_ID}`,
    });

    res.send({ clientSecret: session.client_secret });
});

module.exports = router;