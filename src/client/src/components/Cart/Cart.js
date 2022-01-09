import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getUserCartProducts, removeProductFromCart } from '../../api/data.js';
import './Cart.css';

const Cart = ({ handleClickShowError }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        if (!sessionStorage.getItem('email')) {
            navigate('/login');
            handleClickShowError('Моля, влезте в профила си!');
            return null;
        }

        getUserCartProducts()
            .then(result => {
                setProducts(result.userOrders);
            })
    }, [handleClickShowError, navigate]);

    async function deleteProductFromCart(e) {

        e.preventDefault();
        const table = e.target.parentNode.parentNode;
        const id = table.querySelector('.product-title-text').href.split('/')[4];
        await removeProductFromCart(id);
        setProducts([...products].filter(product => product._id !== id));
        // table.remove();
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
            </div>
        </div>)
}


export default Cart;