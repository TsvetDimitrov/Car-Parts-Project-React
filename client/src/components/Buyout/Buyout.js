import { Link } from "react-router-dom";
import './Buyout.css';

function Buyout() {

    return (
        <div className="buyout-car-wrapper">
            <div className="header">
                <h1 className="title">Продай автомобила си</h1>
            </div>
            <div className="buyout-car-content">
                <div className="buyout-info">
                    <img src="./images/sell-your-car-image.png" alt="Продай автомобила си" className="buyout-image" />

                    <div className="text-buyout">
                        DIMIPARTS изкупува всички марки и модели автомобили, джипове и бусове от цялата страна,
                        на реалистични цени. Предлагаме траспорт и издаваме удостоверения за дерегистрация на
                        автомобилите от КАТ.
                        За повече информация може да се свържете
                        с нас по телефона или използвайте опцията, онлайн оценка на вашия автомобил.
            </div>
                    <Link to="/izkupuvane/info" className="button-evaluation">
                        <span className="icon"></span>
                        <span>ОНЛАЙН ОЦЕНКА НА АВТОМОБИЛ</span>
                    </Link>
                    <div className="text-contacts">
                        <h3>
                            <img src="/images/phone-icon.png" alt="" className="icon" />
                            <strong><Link className="tel" to="tel: 0893496566">0893496566</Link></strong>
                        </h3>

                        <h3>
                            <img src="/images/mail-icon.png" className="icon" />
                            <Link className="mail" to="mailto:dimitrovv32@gmail.com"><strong>dimitrovv32@gmail.com</strong></Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Buyout;