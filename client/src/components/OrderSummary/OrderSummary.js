import './OrderSummary.css';
import { Link } from "react-router-dom";

const OrderSummary = () => {


    return (
        <div className="order-summary">
            <div className="header">
                <h1>Поръчката е успешна!</h1>
                <img
                    src="/images/correct.png"
                    alt="Success icon"
                    style={{ width: "80px", height: "auto" }}
                />
            </div>
            <div className="back-container">
                <Link to="/">
                    <span className="text">&lt; Назад към сайта</span>
                </Link>
            </div>
        </div>)
}

export default OrderSummary;