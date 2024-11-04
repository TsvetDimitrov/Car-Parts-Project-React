import { useState, useEffect } from 'react';
import CarCard from "./CarCard";
import { getCarRequests } from '../../api/data.js';
import "./CarRequests.css";


const CarRequests = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCarRequests()
            .then(result => {
                setCars(result);
            })
    }, []);

    return (
        <div className="content-cars">
            <div className="cars-list">


                {cars.length === 0 ?
                    <div className="no-items">
                        <p className="text">Все още няма заявки за изкупуване.</p>
                        <span className="icon"></span>
                    </div>
                    :
                    cars.map(x => <CarCard key={x._id} cars={x} />)}
            </div>
        </div>
    )
}

export default CarRequests;