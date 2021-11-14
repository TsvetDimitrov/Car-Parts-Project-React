import { Link, useHistory } from "react-router-dom";
import '../../App.css';


function Navigation() {



    return (
    <div className="topnav">
        <div className="innerTopNav">
            <div className="logo-wrapper">
                <Link to="/" title="Авточасти DIMIPARTS" className="logo">
                </Link>
            </div>
            <div className="tab">
                <Link to="/izkupuvane" className="redemption-car">
                    <span className="icon"></span>
                    <span className="text">Продай автомобила си</span>
                </Link>
            </div>
            <div className="elements">
                <div className="admin">
                    <span className="icon-dropdown"></span>
                    <div className="dropdown-content">
                        <Link to="/create" className="create-part">
                            <span className="icon"></span>
                            <span className="text">Създай</span>
                        </Link>
                        <Link to="/car-requests" className="car-anounce">
                            <span className="icon-car"></span>
                            <span className="text">Обяви за продажба</span>
                        </Link>
                    </div>
                </div>
                <Link to="tel: 0893496566" className="element phone">
                    <span className="icon"></span>
                    <span className="text">+359893496566</span>
                </Link>
                <div className="guest">
                    <Link to="/login" className="element login">
                        <span className="icon"></span>
                        <span className="text">Вход</span>
                    </Link>
                </div>
                <div className="user">
                    <Link to="javascript:void(0)" className="element logout">
                        <span className="icon"></span>
                        <span className="text">Изход</span>
                    </Link>
                </div>

                <Link to="/cart" className="element cart">

                </Link>
            </div>
        </div>

    </div>)
}


export default Navigation;
