import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPartsByType } from '../../api/data.js';
import PartCard from './PartCard';
import "./Products.css";


const PartsCatalog = () => {
    const [parts, setParts] = useState([]);
    const [partType, setpartType] = useState('');

    const { productCategory } = useParams();

    useEffect(() => {
        getPartsByType(productCategory)
            .then(result => {
                setParts(result[0]);
                setpartType(result[1]);
            })
    }, [productCategory]);

    return (
        <div className="content-products">
            <div className="heading">
                <h1 className="title heading">
                    {partType}
                </h1>
            </div>
            <div className="products-list">


                {parts.length === 0 ?
                    <div className="no-items">
                        <p className="text">Все още няма налични части, отговарящи на тази категория.</p>
                        <span className="icon"></span>
                    </div>
                    :
                    parts.map(x => <PartCard key={x._id} part={x} />)}
            </div>
        </div>
    )
}

export default PartsCatalog;