import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
const Register = ({ history }) => {
    //TODO ADD class attribute to focused input tag.
    let [addNameClass, setAddNameClass] = useState('');
    let [addEmailClass, setAddEmailClass] = useState('');
    let [addTelNumberClass, setAddTelNumberClass] = useState('');
    let [addPasswordClass, setAddPasswordClass] = useState('');
    let [addRepeatPassClass, setAddRepeatPassClass] = useState('');

    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [telNumber, setTelNumber] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPass, setRepeatPass] = useState("");

    //TODO make it abstract. 
    function onBlurName(e) {
        if (!e.target.value) {
            setAddNameClass('');
        }
    }

    function onFocusName() {
        setAddNameClass('focused');
    }

    function onBlurEmail(e) {
        if (!e.target.value) {
            setAddEmailClass('');
        }
    }

    function onFocusEmail() {
        setAddEmailClass('focused');
    }

    function onBlurTelNumber(e) {
        if (!e.target.value) {
            setAddTelNumberClass('');
        }
    }

    function onFocusTelNumber() {
        setAddTelNumberClass('focused');
    }

    function onBlurPassword(e) {
        if (!e.target.value) {
            setAddPasswordClass('');
        }
    }

    function onFocusPassword() {
        setAddPasswordClass('focused');

    }

    function onBlurRepeatPass(e) {
        if (!e.target.value) {
            setAddRepeatPassClass('');
        }
    }

    function onFocusRepeatPass() {
        setAddRepeatPassClass('focused');
    }


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
                                        <label className={`field-label ${addNameClass}`}>
                                            <span className="required-field">Име</span>
                                            <input type="text" name="name" className="required" onChange={setName} onBlur={onBlurName} onFocus={onFocusName} />
                                        </label>
                                        <label className={`field-label ${addEmailClass}`}>
                                            <span className="required-field">E-mail</span>
                                            <input type="text" name="email" className="required" onChange={setMail} onBlur={onBlurEmail} onFocus={onFocusEmail} />
                                        </label>
                                        <label className={`field-label ${addTelNumberClass}`}>
                                            <span className="required-field">Телефон</span>
                                            <input type="text" name="telNumber" className="required" onChange={setTelNumber} onBlur={onBlurTelNumber} onFocus={onFocusTelNumber} />
                                        </label>
                                        <label className={`field-label ${addPasswordClass}`}>
                                            <span>Парола</span>
                                            <input type="password" name="password" className="required" onChange={setPassword} onBlur={onBlurPassword} onFocus={onFocusPassword} />
                                        </label>
                                        <label className={`field-label ${addRepeatPassClass}`}>
                                            <span>Повтори паролата</span>
                                            <input type="password" name="repeatPass" className="required" onChange={setRepeatPass} onBlur={onBlurRepeatPass} onFocus={onFocusRepeatPass} />
                                        </label>
                                        <div className="agreement">
                                            <label className="field-label checkbox-label">
                                                <input type="checkbox" name="agreement_1" className="required" value="1" />
                                                <span className="required-field">Съгласен съм с <a
                                                    href="/usloviya-za-polzvane">условията за ползване</a>
                                                и <Link to="/privacy-policy">политиката за защита на лични данни</Link> и имам
                                                навършени 14 години.
                                            </span>
                                            </label>
                                            <label className="field-label checkbox-label">
                                                <input type="checkbox" name="agreement_2" className="required" value="1" />
                                                <span className="required-field"> Съгласен съм с <Link to="/obshti-usloviya">общите
                                                    условия</Link> на търговеца</span>
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
                                    <Link to="/login">Вход</Link>
                                </div>
                            </div>
                            <div className="back-to-site">
                                <Link to="/" className="text-body-dark">
                                    <span className="back-to-site-icon"></span>
                                    <span>Назад към сайта</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;