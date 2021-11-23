import { useNavigate } from "react-router-dom";


const BuyoutImages = () => {
    const navigate = useNavigate();

    async function onSubmitImagesHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const imageUrl = formData.get('imageUrl').trim();
        if (!imageUrl) {
            return alert('Please enter imageUrl');
        } else {
            //FIX DATA STATE FROM PREVIOUS COMPONENT.
            // await createCarBuyOutRequest(carDataState);
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
                            <img src="/images/step-01-success.svg" />
                        </div>
                        <div className="buyout-text">Въведете данните за вашия автомобил</div>
                    </div>
                    <div className="buyout-separator-step success"></div>
                    <div className="buyout-step">

                        <div className="step-image">
                            <img src="/images/step-01-active.svg" />
                        </div>
                        <div className="buyout-text">Приложете снимки на вашият автомобил</div>
                    </div>


                </div>
                <div className="image-wrapper">
                    <form onSubmit={onSubmitImagesHandler}>
                        <label className="field-label">
                            <span className="required-field">Въведете imageURL</span>
                            <input type="text" name="imageUrl" className="required" min="$100" max="$10000" />
                        </label>
                        <button type="submit">Изпрати заявка</button>
                    </form>

                </div>
            </div>

        </div >
    )
}


export default BuyoutImages;