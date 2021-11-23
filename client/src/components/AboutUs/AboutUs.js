import { Link } from "react-router-dom";
import './AboutUs.css';


function AboutUs() {


    return (
        <div id="aboutUsPage">
            <div className="aboutUsHeader">
                <div className="container">
                    <div className='h4'> За нас</div>
                    <div className="links">
                        <Link to="/"> <i className="fas fa-home"></i>Начална страница</Link>
                        <span>/</span>
                        <Link to="/aboutUs">За нас</Link>
                    </div>
                </div>
            </div>
            <div className="aboutUsContent">
                <p>
                    DIMIPARTS ООД е платформа за предлагане на авточасти. Работейки с множество доставчици, ние DIMIPARTS
                    успяваме да предложим богат асортимент на едно място за всички автолюбители.
                    Нашите партньори предлагат авточасти, гуми, джанти, акумулатори, автоаксесоари и други продукти на
                    автомобилна тематика.
                    За да предложим максимално качество на обслужване,
                    от DIMIPARTS щателно подбираме своите партноьори и контролираме всяка една поръчка направена през
                    платформата
                    за да гарантираме,
                    че всеки един потребител ще получи максимално качествено обслужване.
                </p>
            </div>
            <div className="benefits-wrapper">
                <div className="inner">
                    <div className="benefits">
                        <ul>
                            <li>
                                <img src="/images/express-delivery-icon.png" alt="Експресна доставка" />
                                <p>Експресна доставка</p>
                                <p>Доставяне из цяла България.</p>
                            </li>
                            <li>
                                <img src="/images/delivery.png" alt="Нови части" />
                                <p>Нови части всеки ден</p>
                                <p>Ежедневно зарежваме нови части.</p>
                            </li>
                            <li>
                                <img src="/images/satisfaction-guaranteed.png" alt="Нови части" />
                                <p>Проверено качество</p>
                                <p>Авточасти с гаранция.</p>
                            </li>
                            <li>
                                <img src="/images/right-of-return.png" alt="Нови части" />
                                <p>Право на връщане</p>
                                <p>14 дни право на връщане на всяка поръчана стока.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default AboutUs;
