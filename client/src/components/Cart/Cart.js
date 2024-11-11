import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getUserCartProducts, removeProductFromCart, getCartDeliveryMethod, getClientSecret } from '../../api/data.js';
import './Cart.css';

const Cart = ({ handleClickShowError }) => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(1);
    const [shippingPrice, setShippingPrice] = useState(1);
    const navigate = useNavigate();
    const spinner = document.querySelector('.spinner-container');

    useEffect(() => {
        if (!sessionStorage.getItem('email')) {
            navigate('/login');
            handleClickShowError('Моля, влезте в профила си!');
            return null;
        }

        getUserCartProducts()
            .then(result => {
                setProducts(result.userOrders);
            });
    }, [handleClickShowError, navigate]);

    async function deleteProductFromCart(e) {
        e.preventDefault();
        const table = e.target.parentNode.parentNode;
        const id = table.querySelector('.product-title-text').href.split('/')[4];
        await removeProductFromCart(id);
        setProducts([...products].filter(product => product._id !== id));
        // table.remove();
    }

    async function setDelivery(e) {
        if (!products.length) {
            return;
        }
        spinner.style.display = 'block';
        await getCartDeliveryMethod(e.target.value)
            .then(result => {
                if (e.target.value === 'Speedy' && result) {
                    setShippingPrice(result.deliveryResponse.price.total);
                    setTotalPrice(result.deliveryResponse.price.total + result.totalProductsPrice);
                } else if (e.target.value === 'Econt' && result) {
                    if (products.length > 1) {
                        let totalProductsShippingPrice = result.deliveryResponse.results.reduce((accumulator, currentValue) => accumulator + currentValue.label.totalPrice, 0);
                        setShippingPrice(totalProductsShippingPrice.toFixed(2));
                        setTotalPrice(totalProductsShippingPrice + result.totalProductsPrice);
                    } else {
                        setShippingPrice(result.deliveryResponse.label.totalPrice);
                        setTotalPrice(result.deliveryResponse.label.totalPrice + result.totalProductsPrice);
                    }
                }
                document.querySelector('.shipping-price').style.display = 'flex';
                document.querySelector('.total-price').style.display = 'flex';
                document.querySelector('.continue-to-checkout-btn').style.display = 'flex';

            });
        spinner.style.display = 'none';
    }

    return (
        <div className="cart-wrapper">
            <div className="container-cart">
                <div className="header-cart">
                    <h1 className="text-cart-header">Количка</h1>
                </div>
                <div className="products-wrapper">
                    <div className="table">
                        <div className="products-table">
                            <table className="table-table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="th-col">
                                            <div className="text-col">Продукт</div>
                                        </th>
                                        <th scope="col" className="th-col">
                                            <div className="text-col">Цена</div>
                                        </th>
                                        <th scope="col" className="th-col">
                                            <div className="text-col">Премахни</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.length === 0 ?
                                        <tr>
                                            <td>Няма добавени продукти в количката.</td>
                                        </tr> :
                                        products.map((product) =>
                                            <tr className="row" key={product._id}>
                                                <th scope="row" className="product-image-title">
                                                    <div className="product-div">
                                                        <img src={product.imageUrl} className="cart-product-image" width="90" height="90" alt="" />
                                                        <div className="product-title">
                                                            <h4><Link to={`/product/${product._id}`} className="product-title-text">{product.title}</Link></h4>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td className="item-price">
                                                    <strong>{product.price} лв.</strong>
                                                </td>
                                                <td className="remove-from-cart">
                                                    <span onClick={deleteProductFromCart} className="icon"></span>
                                                </td>
                                            </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="shipping-wrapper">
                    <div className="options" onChange={setDelivery}>
                        <h3>Избери метод за доставка</h3>
                        <div className="deliveryOption">
                            <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="Econt image"
                                width="80" height="80" data-loaded="true">
                                <source type="image/webp" srcSet="/images/speedy.png" />
                                <img alt="Econt image" />
                            </picture>
                            <input type="radio" value="Speedy" name="gender" id="speedy" />
                            <label htmlFor="speedy">Speedy</label>
                        </div>
                        <div className="deliveryOption">
                            <picture className="lozad m-auto" style={{ display: 'block', minHeight: '1rem' }} data-alt="Econt image"
                                width="80" height="80" data-loaded="true">
                                <source type="image/webp" srcSet="/images/econt_icon.webp" />
                                <img alt="Econt image" />
                            </picture>
                            <input type="radio" value="Econt" name="gender" id="econt" />
                            <label htmlFor="econt">Econt</label>
                        </div>
                    </div>
                    <div className="shipping-price">
                        <span>Доставка: <strong>{shippingPrice}лв.</strong></span>
                    </div>
                    <div className="total-price">
                        <span>Общо цена с доставка: <strong>{totalPrice}лв.</strong></span>
                    </div>
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                </div>

                <div className="continue-to-checkout-btn">
                    <Link to="/checkout" className="checkout">
                        <span>Продължи към плащане</span>
                    </Link>
                </div>
            </div>
        </div>)
}

export default Cart;