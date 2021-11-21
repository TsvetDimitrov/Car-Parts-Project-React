import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getUserCartProducts, removeProductFromCart } from '../../api/data.js';


const Cart = () => {
    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        getUserCartProducts()
            .then(result => {
                setProducts(result.userOrders);
            })
    }, []);

    console.log(products);
    const navigate = useNavigate();

    async function deleteProductFromCart(e) {
        e.preventDefault();
        const table = e.target.parentNode.parentNode;
        console.log(table);
        const id = table.querySelector('.product-title-text').href.split('/')[4];
        await removeProductFromCart(id);
        //TODO DON'T RELOAD THE WHOLE PAGE AFTER THE DELETE. 
        
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
                                    {products.length == 0 ? null :
                                        products.map((product) =>
                                            <tr className="row" scope="row" key={product._id}>
                                                <th scope="row" className="product-image-title">
                                                    <div className="product-div">
                                                        <img src={product.imageUrl} className="cart-product-image" width="90" height="90" />
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