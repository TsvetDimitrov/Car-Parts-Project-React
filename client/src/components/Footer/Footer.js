import { Link } from "react-router-dom";


function Footer() {

    return (
        <div id="footer">
            <div className="container">
                <div className="modules">
                    <section className="footerAbout">
                        <div className="content">
                            <div className="p">
                                DIMIPARTS ООД е малка компания, локализирана в Североизточна България, занимаваща се основно с авточасти - нови и втора употреба на достъпни цени. Нашата цел е да предоставим на клиента, качество и сигурност на достъпни цени.
                            </div>
                            <div className="map">
                                <Link className="imageMap" to="https://www.google.com/maps/place/%D0%9D%D0%90%D0%9F+-+%D0%BE%D1%84%D0%B8%D1%81+%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80/@42.6921705,23.3276225,17.26z/data=!4m8!1m2!2m1!1ssofia+postal+code!3m4!1s0x40aa857311e1a8b9:0x10983355c2696bb4!8m2!3d42.6917856!4d23.3274759"
                                    target="_blank">
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section className="footerContacts">
                        <h4 className="title_h4">Контакти</h4>
                        <div className="content" style={{overflow: 'hidden'}}>
                            <div className="aboutUsPage-pos">
                                <Link to="/aboutUs" className="aboutUsPage">За нас</Link>
                            </div>
                            <ul>
                                <li>
                                    <h6 className="tel-title">Телефон: </h6>
                                    <p className="tel-num">+359893496566</p>
                                    <p></p>
                                </li>
                                <li>
                                    <h6>Email: </h6>
                                    <Link className="email" to="mailto:dimitrovv32@gmail.com">dimitrovv32@gmail.com</Link>
                                </li>
                                <li>
                                    <h6>Адрес: </h6>
                                    <p className="footer-loc">
                                        гр.София, 1000, Бул.Русия №32
                                    </p>

                                </li>
                            </ul>
                            <div className="contactsSocialMedia">
                                <Link className="btn" to="#">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link className="btn" to="#">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link className="btn" to="#">
                                    <i className="fab fa-youtube"></i>
                                </Link>
                                <div className="logo">
                                    <Link to="/"></Link>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="footer_query">
                        <h4 className="title_h4">Направи запитване</h4>
                        <form className="queryForm" role="form" id="email_form" method="post" action="mailto:dimitrovv32@gmail.com">
                            <input type="text" name="email" className="in_email" placeholder="Email...*" />
                            <input type="text" name="telephone" className="in_telephone" placeholder="Телефон..." />
                            <input type="text" name="firmName" className="in_firm" placeholder="Фирма..." />
                            <textarea type="text" name="textMsg" className="in_text" placeholder="Съобщение...*"></textarea>
                            <button type="submit" className="sendBtn">Изпрати съобщение</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}



export default Footer;
