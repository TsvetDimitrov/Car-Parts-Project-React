import { NavLink, useHistory } from "react-router-dom";
import '../../App.css';


function Navigation() {



    return (<div className="topnav">
        <div className="innerTopNav">
            <div className="logo-wrapper">
                <NavLink to="/" title="Авточасти DIMIPARTS" className="logo">
                </NavLink>
            </div>
            <div className="tab">
                <NavLink to="/izkupuvane" className="redemption-car">
                    <span className="icon"></span>
                    <span className="text">Продай автомобила си</span>
                </NavLink>
            </div>
            <div className="elements">
                <div className="admin">
                    <span className="icon-dropdown"></span>
                    <div className="dropdown-content">
                        <NavLink to="/create" className="create-part">
                            <span className="icon"></span>
                            <span className="text">Създай</span>
                        </NavLink>
                        <NavLink to="/car-requests" className="car-anounce">
                            <span className="icon-car"></span>
                            <span className="text">Обяви за продажба</span>
                        </NavLink>
                    </div>
                </div>
                <NavLink to="tel: 0893496566" className="element phone">
                    <span className="icon"></span>
                    <span className="text">+359893496566</span>
                </NavLink>
                <div className="guest">
                    <NavLink to="/login" className="element login">
                        <span className="icon"></span>
                        <span className="text">Вход</span>
                    </NavLink>
                </div>
                <div className="user">
                    <NavLink to="javascript:void(0)" className="element logout">
                        <span className="icon"></span>
                        <span className="text">Изход</span>
                    </NavLink>
                </div>

                <NavLink to="/cart" className="element cart">

                </NavLink>
            </div>
        </div>

    </div>)
}


export default Navigation;
