import { useEffect } from 'react';
import { getClientSecret } from '../../api/data.js';
import './Checkout.css';

const Checkout = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/';

        script.onload = () => {
            console.log('Script has loaded!');
            if (window.Stripe) {
                initialize();
            }
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    async function initialize() {
        const stripe = window.Stripe("pk_test_51QJtidFgzGOyHYvHW6qL4YxrWIvBNU3sCIZPIamuq0O1fVsrVgFmEtU1kh5UyO8HkjZI5AgZoCGvlK4AU5zDFx2100YeH6Fqb3");

        const fetchClientSecret = async () => {
            const response = await getClientSecret();
            const { clientSecret } = response;
            return clientSecret;
        }

        const checkout = await stripe.initEmbeddedCheckout({
            fetchClientSecret,
        });

        // Mount Checkout
        checkout.mount('#checkout');
    }

    return (<div>

        <script src="https://js.stripe.com/v3/" defer></script>

        <div id="checkout">
        </div>
    </div>
    )
}

export default Checkout;