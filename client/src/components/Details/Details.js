import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById, addProductToCart, isUserAdmin, deletePartById } from '../../api/data.js';
import './Details.css';
import Benefits from '../Benefits/Benefits.js';

const Details = ({ handleClickShowError }) => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const { productId } = useParams();
    useEffect(() => {
        async function getProduct() {
            let result = await getProductById(productId);
            setProduct(result);
        }
        getProduct();
    }, [productId]);
    console.log(product);
    const isAdmin = sessionStorage.getItem('isAdmin');

    async function addCartProduct() {
        try {
            if (!sessionStorage.getItem('email')) {
                throw new Error('Моля, влезте в профила си!');
            }
            await addProductToCart(productId);
            handleClickShowError('Продукта е добавен в количката успешно!');
        } catch (err) {
            handleClickShowError(err.message);
            navigate('/login');
        }
    }

    async function editProduct() {
        console.log('editProduct');
        navigate('/product/edit/' + productId);
    }

    async function deleteProduct() {
        try {
            await isUserAdmin();
            await deletePartById(productId);

            navigate('/');
            return handleClickShowError('Продукта е успешно изтрит!');

        } catch (err) {
            navigate(`/product/${productId}`)
            handleClickShowError(err.message);
        }
    }


    return (
        <div>
            <div className="product-details-wrapper">
                <div className="container">
                    <div className="product-image">
                        <img src={product.imageUrl} alt={product.title} />
                    </div>
                    <div className="product-details">
                        <h2 className="product-title">{product.title}</h2>
                        <div className="description">
                            <div className="attributes">
                                <div className="attribute">
                                    <div className="attribute-text">Марка</div>
                                    <div className="attribute-info">
                                        <span>{product.brand}</span>
                                    </div>
                                </div>
                                <div className="attribute">
                                    <div className="attribute-text">Модел</div>
                                    <div className="attribute-info">
                                        <span>{product.model}</span>
                                    </div>
                                </div>
                                <div className="attribute">
                                    <div className="attribute-text">Състояние</div>
                                    <div className="attribute-info">
                                        <span>{product.condition}</span>
                                    </div>
                                </div>

                                {product.engineType ?
                                    <div className="attribute">
                                        <div className="attribute-text">Двигател</div>
                                        <div className="attribute-info">
                                            <span>{product.engineType}</span>
                                        </div>
                                    </div> : ''}

                                {product.partColor ?
                                    <div className="attribute">
                                        <div className="attribute-text">Цвят</div>
                                        <div className="attribute-info">
                                            <span>{product.partColor}</span>
                                        </div>
                                    </div> : ''}

                                {product.yearFrom ?
                                    <div className="attribute">
                                        <div className="attribute-text">Година на производство</div>
                                        <div className="attribute-info">
                                            <span>{product.yearFrom} - {product.yearTo}</span>
                                        </div>
                                    </div> : ''}
                            </div>
                        </div>
                        <div className="product-purchase">
                            <div className="purchase">
                                <div className="price">
                                    <span className="item-price">{product.price} лв.</span>
                                </div>
                                <div className="add-to-cart">
                                    <button onClick={addCartProduct} className="add-to-cart-button">
                                        <span className="icon"></span>
                                        <span className="text">Добави в количката</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {Number(isAdmin) ? <div className="admin-options">
                            <div onClick={editProduct} className="edit-product">
                                <button className="edit-button">
                                    <span className="icon"></span>
                                    <span className="text">Редактирай</span>
                                </button>
                            </div>
                            <div className="delete-product">
                                <button onClick={deleteProduct} className="delete-button">
                                    <span className="icon"></span>
                                    <span className="text">Изтрий</span>
                                </button>
                            </div>
                        </div> : ''}

                    </div>
                </div>
            </div>
            {<Benefits />}
        </div >
    )
}

export default Details;