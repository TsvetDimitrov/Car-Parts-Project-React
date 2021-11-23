import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const BuyoutInfo = () => {
    let [addBrandClass, setAddBrandClass] = useState('');
    let [addModelClass, setAddModelClass] = useState('');
    let [addManufactureYearClass, setAddManufactureYearClass] = useState('');
    let [addEngineTypeClass, setAddEngineTypeClass] = useState('');
    let [addGearboxTypeClass, setAddGearboxTypeClass] = useState('');
    let [addPriceWantedClass, setAddPriceWantedClass] = useState('');
    let [addTextClass, setAddTextClass] = useState('');

    function onBlurBrand(e) {
        if (!e.target.value) {
            setAddBrandClass('');
        }
    }

    function onFocusBrand() {
        setAddBrandClass('focused');
    }

    function onBlurModel(e) {
        if (!e.target.value) {
            setAddModelClass('');
        }
    }

    function onFocusModel() {
        setAddModelClass('focused');
    }

    function onBlurManufactureYear(e) {
        if (!e.target.value) {
            setAddManufactureYearClass('');
        }
    }

    function onFocusManufactureYear() {
        setAddManufactureYearClass('focused');
    }

    function onBlurEngineType(e) {
        if (!e.target.value) {
            setAddEngineTypeClass('');
        }
    }

    function onFocusEngineType() {
        setAddEngineTypeClass('focused');
    }

    function onBlurGearboxType(e) {
        if (!e.target.value) {
            setAddGearboxTypeClass('');
        }
    }

    function onFocusGearboxType() {
        setAddGearboxTypeClass('focused');
    }

    function onBlurPriceWanted(e) {
        if (!e.target.value) {
            setAddPriceWantedClass('');
        }
    }

    function onFocusPriceWanted() {
        setAddPriceWantedClass('focused');
    }

    function onBlurText(e) {
        if (!e.target.value) {
            setAddTextClass('');
        }
    }

    function onFocusText() {
        setAddTextClass('focused');
    }




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
            navigate('/izkupuvane/infopic');
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
                            <label className={`field-label ${addBrandClass}`}>
                                <span className="required-field">Марка</span>
                                <input type="text" name="brand" className="required" onBlur={onBlurBrand} onFocus={onFocusBrand} />
                            </label>
                        </div>
                        <div className="form-input">
                            <label className={`field-label ${addModelClass}`}>
                                <span className="required-field">Модел</span>
                                <input type="text" name="model" className="required" onBlur={onBlurModel} onFocus={onFocusModel} />
                            </label>
                        </div>
                        <div className="form-input">
                            <label className={`field-label ${addManufactureYearClass}`}>
                                <span className="required-field">Година на производство</span>
                                <input type="text" name="manufactureYear" className="required" onBlur={onBlurManufactureYear} onFocus={onFocusManufactureYear} />
                            </label>
                        </div>
                        <div className="form-input">
                            <label className={`field-label ${addEngineTypeClass}`}>
                                <span className="required-field">Вид двигател</span>
                                <input type="text" name="engineType" className="required" onBlur={onBlurEngineType} onFocus={onFocusEngineType} />
                            </label>
                        </div>
                        <div className="form-input">
                            <label className={`field-label ${addGearboxTypeClass}`}>
                                <span className="required-field">Скоросттна кутия</span>
                                <input type="text" name="gearboxType" className="required" onBlur={onBlurGearboxType} onFocus={onFocusGearboxType} />
                            </label>
                        </div>
                        <div className="form-input">
                            <label className={`field-label ${addPriceWantedClass}`}>
                                <span className="required-field">Предложете цена за вашият автомобил</span>
                                <input type="number" name="priceWanted" className="required" min="$100" max="$10000" onBlur={onBlurPriceWanted} onFocus={onFocusPriceWanted} />
                            </label>
                        </div>
                        <div className="form-input fullwidth">
                            <label className={`field-label ${addTextClass}`}>
                                <span className="required-field">Цялостно описание</span>
                                <textarea name="text" onBlur={onBlurText} onFocus={onFocusText}></textarea>
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