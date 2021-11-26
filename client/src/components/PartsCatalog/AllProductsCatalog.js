import { useState, useEffect } from 'react';
import { getAllProducts } from '../../api/data.js';
import PartCard from './PartCard';
import './Products.css';


const AllProductsCatalog = () => {

    const [parts, setParts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then(result => {
                setParts(result);
            })
    }, []);


    return (
        <div className="content-products">
            <div className="heading">
                <h1 className="title heading">
                    Всички продукти </h1>
            </div>
            <div className="products-list">
                {parts.length === 0 ? <p className="no-items">No items listed</p> : parts.map(x => <PartCard key={x._id} part={x} />)}
            </div>
        </div>

    )
}

export default AllProductsCatalog;