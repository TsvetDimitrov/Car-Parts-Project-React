import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = ({
    email,
    isAdmin,
    handleClickShowError
}) => {

    const handleClick = (e) => {
        const userEmail = sessionStorage.getItem("email");
        if (!userEmail) {
          e.preventDefault();
          handleClickShowError("Моля, влезте си в профила, за да достъпите тази страница!", 5000);
        }
      };

    return (
        <div className="topnav">
            <div className="innerTopNav">
                <div className="logo-wrapper">
                    <Link to="/" title="Авточасти DIMIPARTS" className="logo">
                    </Link>
                </div>
                <div className="tab">
                    <Link to="/izkupuvane" className="redemption-car" onClick={handleClick}>
                        <span className="icon"></span>
                        <span className="text">Продай автомобила си</span>
                    </Link>
                </div>
                <div className="elements">
                    {Number(isAdmin) ? (<div className="admin">
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
                    </div>) : ''}

                    <a href="tel: 0893496566" className="element phone">
                        <span className="icon"></span>
                        <span className="text">+359893496566</span>
                    </a>
                    {email ? (
                        <div className="user">
                            <Link to="/logout" className="element logout">
                                <span className="icon"></span>
                                <span className="text">Изход</span>
                            </Link>
                            <Link to="/cart" className="element cart"></Link>
                        </div>
                    ) : (<div className="guest">
                        <Link to="/login" className="element login">
                            <span className="icon"></span>
                            <span className="text">Вход</span>
                        </Link>
                    </div>)}
                    
                </div>
            </div>

        </div>)
}


export default Navigation;