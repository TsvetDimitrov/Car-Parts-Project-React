import { Link } from "react-router-dom";
import Benefits from "../Benefits/Benefits";
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
            <Benefits />
        </div>

    )
}


export default AboutUs;
