import { useNavigate } from "react-router-dom";



const BuyoutInfo = () => {
    const navigate = useNavigate();

    function onSubmitHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const brand = formData.get('brand').trim();
        const model = formData.get('model').trim();
        const manufactureYear = formData.get('manufactureYear').trim();
        const engineType = formData.get('engineType').trim();
        const gearboxType = formData.get('gearboxType').trim();
        const priceWanted = formData.get('priceWanted').trim();
        const additionalInfo = formData.get('text').trim();

        //Check if fields are empty. If they are: span will be showed in error style.
        let hasEmptyField = false;

        for (let entry of formData.entries()) {
            if (entry[1] == '') {
                hasEmptyField = true;
                const el = document.querySelector(`input[name="${entry[0]}"]`) || document.querySelector(`textarea[name="text"]`);
                const label = el.parentNode;
                if (!label.contains(label.querySelector('.red-text-field'))) {
                    label.appendChild(createEl());
                }
            } else {
                const el = document.querySelector(`input[name="${entry[0]}"]`) || document.querySelector(`textarea[name="text"]`);
                const label = el.parentNode;
                if (label.contains(label.querySelector('.red-text-field'))) {
                    label.removeChild(label.querySelector('.red-text-field'))
                }
            }
        }


        if (!hasEmptyField) {
            navigate('/izkupuvane/info2');
        }

        function createEl() {
            const span = document.createElement('span');
            span.textContent = '*Полето е задължително';
            span.className = "red-text-field";
            return span;
        }

    }

    return (
        <div className="buyout-car-info">
            <div className="buyout-car-header">
                <div className="inner">
                    <h1 className="header">Oнлайн оценка на автомобил</h1>
                </div>
            </div>
            <div className="buyout-car-content">
                <div className="buyout-steps">
                    <div className="buyout-step active">
                        <div className="step-image">
                            <img src="/images/step-01-active.svg" />
                        </div>
                        <div className="buyout-text">Въведете данните за вашия автомобил</div>
                    </div>
                    <div className="buyout-separator-step"></div>
                    <div className="buyout-step">
                        <div className="step-image">
                            <img src="/images/step-02-inactive.svg" />
                        </div>
                        <div className="buyout-text">Приложете снимки на вашият автомобил</div>
                    </div>
                </div>
                <form onSubmit={onSubmitHandler} action="POST" name="buyoutForm" className="form-horiz">
                    <div className="form-inputs">
                        <div className="form-input">
                            <label className="field-label">
                                <span className="required-field">Марка</span>
                                <input type="text" name="brand" className="required" />
                            </label>
                        </div>
                        <div className="form-input">
                            <label className="field-label">
                                <span className="required-field">Модел</span>
                                <input type="text" name="model" className="required" />
                            </label>
                        </div>
                        <div className="form-input">
                            <label className="field-label">
                                <span className="required-field">Година на производство</span>
                                <input type="text" name="manufactureYear" className="required" />
                            </label>
                        </div>
                        <div className="form-input">
                            <label className="field-label">
                                <span className="required-field">Вид двигател</span>
                                <input type="text" name="engineType" className="required" />
                            </label>
                        </div>
                        <div className="form-input">
                            <label className="field-label">
                                <span className="required-field">Скоросттна кутия</span>
                                <input type="text" name="gearboxType" className="required" />
                            </label>
                        </div>
                        <div className="form-input">
                            <label className="field-label">
                                <span className="required-field">Предложете цена за вашият автомобил</span>
                                <input type="number" name="priceWanted" className="required" min="$100" max="$10000" />
                            </label>
                        </div>
                        <div className="form-input fullwidth">
                            <label className="field-label">
                                <span className="required-field">Цялостно описание</span>
                                <textarea name="text"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <button type="submit" className="button-submit">
                            <span>Към стъпка 2</span>
                            <span className="icon"></span>

                        </button>
                        <div className="text-button">* Задължителни полета</div>
                    </div>
                </form>

            </div>
        </div>
    )
}


export default BuyoutInfo;