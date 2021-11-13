import { useContext, useState } from "react";
import '../../App.css';
import { addFocusClass, removeFocusClass } from '../../util/util.js';
const Register = ({
    history
}) => {

    function onBlur(e) {
        setAddClass('');
    }

    function onFocus(e) {
        setAddClass('focused');
    }

    const [name, setName] = useState("");
    let [addClass, setAddClass] = useState('');
    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username, password);
        // auth.createUserWithEmailAndPassword(username, password)
        //     .then(userCredential => {
        //         console.log('Register');
        //         history.push('/');
        //     });
    }

    return (
        <div className="register-wrap">
            <div className="content-register">
                <div className="page-member-register">
                    <div className="main">
                        <div className="inner">
                            <div className="inner-inner">
                                <a href="/" className="logo bg"></a>
                                <h1 className="title">Регистрация</h1>
                                <div className="member-form">
                                    <form onSubmit={onRegisterSubmitHandler} className="form-horizontal" name="memberLoginForm"
                                        id="memberLoginForm">
                                        <label className={`field-label ${addClass}`}>
                                            <span className="required-field">Име</span>
                                            <input type="text" name="name" className="required" value={name} onChange={setName} onBlur={onBlur} onFocus={onFocus} />
                                        </label>
                                        <label className="field-label">
                                            <span className="required-field">E-mail</span>
                                            <input type="text" name="email" className="required" value="" />
                                        </label>
                                        <label className="field-label">
                                            <span className="required-field">Телефон</span>
                                            <input type="text" name="telNumber" className="required" value="" />
                                        </label>
                                        <label className="field-label">
                                            <span>Парола</span>
                                            <input type="password" name="password" className="required" value="" />
                                        </label>
                                        <label className="field-label">
                                            <span>Повтори паролата</span>
                                            <input type="password" name="repeatPass" className="required" value="" />
                                        </label>
                                        <div className="agreement">
                                            <label className="field-label checkbox-label">
                                                <input type="checkbox" name="agreement_1" className="required" value="1" />
                                                <span className="required-field">Съгласен съм с <a
                                                    href="/usloviya-za-polzvane">условията за ползване</a>
                                                и <a href="/privacy-policy">политиката за защита на лични данни</a> и имам
                                                навършени 14 години.
                                            </span>
                                            </label>
                                            <label className="field-label checkbox-label">
                                                <input type="checkbox" name="agreement_2" className="required" value="1" />
                                                <span className="required-field"> Съгласен съм с <a href="/obshti-usloviya">общите
                                                    условия</a> на търговеца</span>
                                            </label>
                                        </div>
                                        <div className="register-btn">
                                            <button type="submit" className="button-animate-register">
                                                <span>РЕГИСТРАЦИЯ</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="separator">
                                    <span className="separator-text">или</span>
                                </div>
                                <div className="media-login">
                                    <button className="facebook-login-button" type="button">
                                        <span>ВХОД С FACEBOOK</span>
                                    </button>
                                    <button className="google-login-button" type="button">
                                        <span>ВХОД С GOOGLE</span>
                                    </button>
                                </div>
                                <div className="separator"></div>
                                <div className="existing-user">
                                    <span className="existing-user-text">Вече имате профил?</span>
                                    <a href="/login">Вход</a>
                                </div>
                            </div>
                            <div className="back-to-site">
                                <a href="/" className="text-body-dark">
                                    <span className="back-to-site-icon"></span>
                                    <span>Назад към сайта</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;