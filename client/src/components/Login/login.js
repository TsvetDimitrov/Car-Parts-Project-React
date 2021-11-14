import { Link } from 'react-router-dom'

const Login = ({ history }) => {
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        // auth.signInWithEmailAndPassword(email, password)
        //     .then((userCredential) => {
        //         history.push('/');
        //     });
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
                                        <label className="field-label">
                                            <span className="required-field">E-mail</span>
                                            <input type="text" name="email" className="required" />
                                        </label>
                                        <label className="field-label">
                                            <span className="required-field">Парола</span>
                                            <input type="password" name="password" className="required" />
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
                                    <Link to="/register">Регистрация</Link>
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