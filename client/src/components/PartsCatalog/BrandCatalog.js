import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PartCard from './PartCard';
import { getProductsByBrand } from '../../api/data.js';
import "./Products.css";



const BrandCatalog = () => {
    const [parts, setParts] = useState([]);
    const [brand, setBrand] = useState('');

    const { brandName } = useParams();

    useEffect(() => {
        getProductsByBrand(brandName.toUpperCase())
            .then(result => {
                setParts(result[0]);
                setBrand(result[1]);
            })
    }, [brandName]);

    return (<div className="content-products">
        <div className="heading">
            <h1 className="title heading">
                {brand} </h1>
        </div>
        <div className="products-list">

            {parts.length === 0 ? <div className="no-items">
                <p className="text">Все още няма налични части, отговарящи на тази категория.</p>
                <span className="icon"></span>
            </div> : parts.map(x => <PartCard key={x._id} part={x} />)}
        </div>
    </div>)
}

export default BrandCatalog;