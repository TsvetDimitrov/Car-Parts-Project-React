import { Link } from "react-router-dom";
import './Page404.css';

function Page404() {
    return (
        <div className="page-404-wrapper">
            <Link to="/">
                <img src="/images/image-404-car.png" alt="404 - Page not found" />
                <span className="icon"></span>
                <span className="text">Назад към сайта</span>
            </Link>
        </div>

    )
}

export default Page404;