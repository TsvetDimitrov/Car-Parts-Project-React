import { Link } from 'react-router-dom';

const PartCard = ({
    part
}) => {

    return (

        <Link to={`/product/${part._id}`} className="product-item" title={part.title}>
            <div className="product-img">
                <img src={part.imageUrl} alt={part.title} className="image" />
            </div>
            <div className="product-name-title">
                {part.title}
            </div>
            <div className="price-wrapper">
                <span className="product-price">{part.price} лв.</span>
            </div>
        </Link>
    )
}

export default PartCard;