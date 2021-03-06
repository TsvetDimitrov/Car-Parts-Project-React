import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import carBuyoutContext from '../../../contexts/CarBuyoutContext.js';
import { createCarBuyOutRequest } from '../../../api/data.js';

const BuyoutImages = ({ handleClickShowError }) => {
    let [addImageUrlClass, setAddImageUrlClass] = useState('');
    const { carInfo, setCarInfo } = useContext(carBuyoutContext);

    function onBlurImageUrl(e) {
        if (!e.target.value) {
            setAddImageUrlClass('');
        }
    }

    function onFocusImageUrl() {
        setAddImageUrlClass('focused');
    }

    const navigate = useNavigate();

    async function onSubmitImagesHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const imageUrl = formData.get('imageUrl').trim();
        if (!imageUrl) {
            return handleClickShowError('Моля въведете адрес на изображение!');
        } else {
            setCarInfo({ ...carInfo, imageUrl });
            console.log(carInfo);
            await createCarBuyOutRequest({...carInfo, imageUrl});
            navigate('/');
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
                            <img src="/images/step-01-success.svg" alt="success" />
                        </div>
                        <div className="buyout-text">Въведете данните за вашия автомобил</div>
                    </div>
                    <div className="buyout-separator-step success"></div>
                    <div className="buyout-step">

                        <div className="step-image">
                            <img src="/images/step-01-active.svg" alt="active-page" />
                        </div>
                        <div className="buyout-text">Приложете снимки на вашият автомобил</div>
                    </div>


                </div>
                <div className="image-wrapper">
                    <form onSubmit={onSubmitImagesHandler}>
                        <label className={`field-label ${addImageUrlClass}`}>
                            <span className="required-field">Въведете imageURL</span>
                            <input type="text" name="imageUrl" className="required" min="$100" max="$10000" onBlur={onBlurImageUrl} onFocus={onFocusImageUrl} />
                        </label>
                        <button type="submit">Изпрати заявка</button>
                    </form>

                </div>
            </div>

        </div >
    )
}


export default BuyoutImages;