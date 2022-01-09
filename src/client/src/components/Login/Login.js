import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { login } from '../../api/data.js';


const Login = ({
    onLogin,
    handleClickShowError
}) => {
    let [addEmailClass, setAddEmailClass] = useState('');
    let [addPasswordClass, setAddPasswordClass] = useState('');

    function onBlurEmail(e) {
        if (!e.target.value) {
            setAddEmailClass('');
        }
    }

    function onFocusEmail() {
        setAddEmailClass('focused');
    }

    function onBlurPassword(e) {
        if (!e.target.value) {
            setAddPasswordClass('');
        }
    }

    function onFocusPassword() {
        setAddPasswordClass('focused');
    }

    const navigate = useNavigate();
    const onLoginFormSubmitHandler = async (e) => {
        e.preventDefault();

        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();

        if (!email || !password) {
            return handleClickShowError('Всички полета са задължителни!');
        }

        try {
            await login(email, password);
            onLogin(email, sessionStorage.getItem('isAdmin'));
            navigate('/');

        } catch (err) {
            handleClickShowError(err.message);
        }

        
    };

    return (
        <div className="login-wrap">
            <div className="content-login">
                <div className="page-member-login">
                    <div className="main">
                        <div className="inner">
                            <div className="inner-inner">
                                <Link to="/" className="logo bg"></Link>
                                <h1 className="title">Вход</h1>
                                <div className="member-form">
                                    <form onSubmit={onLoginFormSubmitHandler} method="POST" className="form-horizontal" name="memberLoginForm"
                                        id="memberLoginForm">
                                        <label className={`field-label ${addEmailClass}`}>
                                            <span className="required-field">E-mail</span>
                                            <input type="text" name="email" className="required" onBlur={onBlurEmail} onFocus={onFocusEmail} />
                                        </label>
                                        <label className={`field-label ${addPasswordClass}`}>
                                            <span className="required-field">Парола</span>
                                            <input type="password" name="password" className="required" onBlur={onBlurPassword} onFocus={onFocusPassword} />
                                        </label>
                                        <div className="login-btn">
                                            <button type="submit" className="button-animate-login">
                                                <span>Вход</span>
                                            </button>
                                        </div>
                                    </form>
                                    <div className="forgotten-password">
                                        <Link to="/forgotten-password" className="forgotten-pass-text">
                                            <span>Забравена парола?</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="separator">
                                    <span className="separator-text">или</span>
                                </div>
                                <div className="media-login">
                                    <button className="facebook-login-button" href="/auth/facebook" type="button">
                                        <span>ВХОД С FACEBOOK</span>
                                    </button>
                                    <button className="google-login-button" type="button">
                                        <span>ВХОД С GOOGLE</span>
                                    </button>
                                </div>
                                <div className="separator"></div>
                                <div className="not-registered-user">
                                    <span className="not-registered-user-text">Нямате профил?</span>
                                    <Link to="/register"> Регистрация</Link>
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
            </div >
        </div >
    );
};

export default Login;