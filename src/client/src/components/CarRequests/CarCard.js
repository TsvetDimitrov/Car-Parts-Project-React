import { Link } from 'react-router-dom';

const CarCard = ({
    cars
}) => {
    console.log(cars);
    return (
        
        <Link to={`/car/${cars._id}`} className="car-item">
            <div className="car-img">
                <img src={cars.imageUrl} alt={cars.brand} className="image" />
            </div>
        </Link>
    )
}

export default CarCard;