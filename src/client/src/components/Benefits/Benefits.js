import './Benefits.css';


const Benefits = () => {

    return (
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
    )
}

export default Benefits;