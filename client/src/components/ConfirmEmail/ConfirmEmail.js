

import './ConfirmEmail.css';


const ConfirmEmail = () => {

    return (
        <div className="confirmEmail-container">
            <img src="./images/correct.png" alt="correct-sign"></img>
            <h1 className="display-3">Благодарим Ви!</h1>
            <p className="lead"><strong>Моля проверете имейл адреса си</strong> за допълнителни инструкции и потвърждение.</p>
            <p className="lead">
                <a className="btn btn-primary btn-sm" href="/" role="button">Продължете към основната страница</a>
            </p>
        </div>
    )
}


export default ConfirmEmail;