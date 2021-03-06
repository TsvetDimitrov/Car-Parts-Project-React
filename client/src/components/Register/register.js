import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import { register } from '../../api/data.js';
const Register = ({onLogin, handleClickShowError }) => {
    //TODO ADD class attribute to focused input tag.
    let [addNameClass, setAddNameClass] = useState('');
    let [addEmailClass, setAddEmailClass] = useState('');
    let [addTelNumberClass, setAddTelNumberClass] = useState('');
    let [addPasswordClass, setAddPasswordClass] = useState('');
    let [addRepeatPassClass, setAddRepeatPassClass] = useState('');

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

    const navigate = useNavigate();

    const onRegisterSubmitHandler = async (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const telNumber = e.target.telNumber.value.trim();
        const password = e.target.password.value.trim();
        const repeatPass = e.target.repeatPass.value.trim();
        const agreement_1 = e.target.agreement_1.checked;
        const agreement_2 = e.target.agreement_2.checked;

        if (!name || !email || !telNumber || !password || !repeatPass || !agreement_1 || !agreement_2) {
            return handleClickShowError('???????????? ???????????? ???? ????????????????????????!');
        }

        if (password !== repeatPass) {
            return handleClickShowError('???????????????? ???? ????????????????!');
        }

        await register(name, email, telNumber, password);
        onLogin(email, sessionStorage.getItem('isAdmin'));
        navigate('/potvardi-email');
    }

    return (
        <div className="register-wrap">
            <div className="content-register">
                <div className="page-member-register">
                    <div className="main">
                        <div className="inner">
                            <div className="inner-inner">
                                <Link to="/" className="logo bg"></Link>
                                <h1 className="title">??????????????????????</h1>
                                <div className="member-form">
                                    <form onSubmit={onRegisterSubmitHandler} className="form-horizontal" name="memberLoginForm"
                                        id="memberLoginForm">
                                        <label className={`field-label ${addNameClass}`}>
                                            <span className="required-field">??????</span>
                                            <input type="text" name="name" className="required" onBlur={onBlurName} onFocus={onFocusName} />
                                        </label>
                                        <label className={`field-label ${addEmailClass}`}>
                                            <span className="required-field">E-mail</span>
                                            <input type="text" name="email" className="required" onBlur={onBlurEmail} onFocus={onFocusEmail} />
                                        </label>
                                        <label className={`field-label ${addTelNumberClass}`}>
                                            <span className="required-field">??????????????</span>
                                            <input type="text" name="telNumber" className="required" onBlur={onBlurTelNumber} onFocus={onFocusTelNumber} />
                                        </label>
                                        <label className={`field-label ${addPasswordClass}`}>
                                            <span className="required-field">????????????</span>
                                            <input type="password" name="password" className="required" onBlur={onBlurPassword} onFocus={onFocusPassword} />
                                        </label>
                                        <label className={`field-label ${addRepeatPassClass}`}>
                                            <span className="required-field">?????????????? ????????????????</span>
                                            <input type="password" name="repeatPass" className="required" onBlur={onBlurRepeatPass} onFocus={onFocusRepeatPass} />
                                        </label>
                                        <div className="agreement">
                                            <label className="field-label checkbox-label">
                                                <input type="checkbox" name="agreement_1" className="required" />
                                                <span className="required-field"> ???????????????? ?????? ?? <a
                                                    href="/usloviya-za-polzvane"> ?????????????????? ???? ???????????????? </a>
                                                ?? <Link to="/privacy-policy">???????????????????? ???? ???????????? ???? ?????????? ??????????</Link> ?? ????????
                                                ?????????????????? 14 ????????????.
                                            </span>
                                            </label>
                                            <label className="field-label checkbox-label">
                                                <input type="checkbox" name="agreement_2" className="required" />
                                                <span className="required-field"> ???????????????? ?????? ?? <Link to="/obshti-usloviya"> ????????????
                                                    ??????????????</Link> ???? ??????????????????</span>
                                            </label>
                                        </div>
                                        <div className="register-btn">
                                            <button type="submit" className="button-animate-register">
                                                <span>??????????????????????</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="separator">
                                    <span className="separator-text">??????</span>
                                </div>
                                <div className="media-login">
                                    <button className="facebook-login-button" type="button">
                                        <span>???????? ?? FACEBOOK</span>
                                    </button>
                                    <button className="google-login-button" type="button">
                                        <span>???????? ?? GOOGLE</span>
                                    </button>
                                </div>
                                <div className="separator"></div>
                                <div className="existing-user">
                                    <span className="existing-user-text">???????? ?????????? ?????????????</span>
                                    <Link to="/login"> ????????</Link>
                                </div>
                            </div>
                            <div className="back-to-site">
                                <Link to="/" className="text-body-dark">
                                    <span className="back-to-site-icon"></span>
                                    <span>?????????? ?????? ??????????</span>
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