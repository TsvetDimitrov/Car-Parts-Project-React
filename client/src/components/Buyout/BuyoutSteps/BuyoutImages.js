import { useNavigate } from "react-router-dom";


const BuyoutImages = () => {
    const navigate = useNavigate();

    function onSubmitImagesHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const imageUrl = formData.get('imageUrl').trim();
        if (!imageUrl) {
            return alert('Please enter imageUrl');
        } else {
            carDataState.imageUrl = imageUrl;
            await createCarBuyOutRequest(carDataState);
            navigate('/');
        }
    }

    return (
        <div class="buyout-car-info">
            <div class="buyout-car-header">
                <div class="inner">
                    <h1 class="header">Oнлайн оценка на автомобил</h1>
                </div>
            </div>
            <div class="buyout-car-content">
                <div class="buyout-steps">
                    <div class="buyout-step active">
                        <div class="step-image">
                            <img src="/images/step-01-success.svg" />
                        </div>
                        <div class="buyout-text">Въведете данните за вашия автомобил</div>
                    </div>
                    <div class="buyout-separator-step success"></div>
                    <div class="buyout-step">

                        <div class="step-image">
                            <img src="/images/step-01-active.svg" />
                        </div>
                        <div class="buyout-text">Приложете снимки на вашият автомобил</div>
                    </div>


                </div>
                <div class="image-wrapper">
                    <form onSubmit={onSubmitImagesHandler}>
                        <label class="field-label">
                            <span class="required-field">Въведете imageURL</span>
                            <input type="text" name="imageUrl" class="required" min="$100" max="$10000" />
                        </label>
                        <button type="submit">Изпрати заявка</button>
                    </form>

                </div>
            </div>

        </div >
    )
}


export default BuyoutImages;