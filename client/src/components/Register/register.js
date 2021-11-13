import styles from "./register.module.css";

const Register = ({
    history
}) => {
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
        <div className={styles['register-wrap']}>
            <div className={styles['content-register']}>
                <div className={styles['page-member-register']}>
                    <div className={styles.main}>
                        <div className={styles.inner}>
                            <div className={styles['inner-inner']}>
                                <a href="/" className={styles.logo}></a>
                                <h1 className={styles.title}>Регистрация</h1>
                                <div className={styles['member-form']}>
                                    <form onSubmit={onRegisterSubmitHandler} className={styles['form-horizontal']} name="memberLoginForm"
                                        id="memberLoginForm">
                                        <label className={styles['field-label']}>
                                            <span className={styles['required-field']}>Име</span>
                                            <input type="text" name="name" className={styles.required} value="" />
                                        </label>
                                        <label className={styles['field-label']}>
                                            <span className={styles['required-field']}>E-mail</span>
                                            <input type="text" name="email" className={styles.required} value="" />
                                        </label>
                                        <label className={styles['field-label']}>
                                            <span className={styles['required-field']}>Телефон</span>
                                            <input type="text" name="telNumber" className={styles.required} value="" />
                                        </label>
                                        <label className={styles['field-label']}>
                                            <span>Парола</span>
                                            <input type="password" name="password" className={styles.required} value="" />
                                        </label>
                                        <label className={styles['field-label']}>
                                            <span>Повтори паролата</span>
                                            <input type="password" name="repeatPass" className={styles.required} value="" />
                                        </label>
                                        <div className={styles.agreement}>
                                            <label className={`${styles['field-label']} ${styles['checkbox-label']}`}>
                                                <input type="checkbox" name="agreement_1" className={styles.required} value="1" />
                                                <span className={styles['required-field']}>Съгласен съм с <a
                                                    href="/usloviya-za-polzvane">условията за ползване</a>
                                            и <a href="/privacy-policy">политиката за защита на лични данни</a> и имам
                                            навършени 14 години.
                                        </span>
                                            </label>
                                            <label className={`${styles['field-label']} ${styles['checkbox-label']}`}>
                                                <input type="checkbox" name="agreement_2" className={styles.required} value="1" />
                                                <span className={styles['required-field']}> Съгласен съм с <a href="/obshti-usloviya">общите
                                                условия</a> на търговеца</span>
                                            </label>
                                        </div>
                                        <div className={styles['register-btn']}>
                                            <button type="submit" className={styles['button-animate-register']}>
                                                <span>РЕГИСТРАЦИЯ</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className={styles.separator}>
                                    <span className={styles['separator-text']}>или</span>
                                </div>
                                <div className={styles['media-login']}>
                                    <button className={styles['facebook-login-button']} type="button">
                                        <span>ВХОД С FACEBOOK</span>
                                    </button>
                                    <button className={styles['google-login-button']} type="button">
                                        <span>ВХОД С GOOGLE</span>
                                    </button>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles['existing-user']}>
                                    <span className={styles['existing-user-text']}>Вече имате профил?</span>
                                    <a href="/login">Вход</a>
                                </div>
                            </div>
                            <div className={styles['back-to-site']}>
                                <a href="/" className={styles['text-body-dark']}>
                                    <span className={styles['back-to-site-icon']}></span>
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