import React, {useContext} from 'react';

import cl from "./LoginForm.module.css"
import StyledInput from "../UI/StyledInput/StyledInput";
import {LoginContext} from "../../context/loginContext";
import logo from "../../img/logo/logo.png"

const LoginForm = () => {
    const {modal, setModal} = useContext(LoginContext);

    const auth = (e) => {
        setModal("");

        e.preventDefault();
    }

    return (
        <div className={cl.wrapper} onMouseDown={() => setModal("")}>
            <form onSubmit={(e) => auth(e)} className={cl.window} onMouseDown={(e) => {e.stopPropagation()}}>
                <h1>{modal === "login" ? "Вход" : "Регистрация"}</h1>
                <img src={logo} alt={"logo"} draggable={false} />
                <StyledInput placeholder={"Email"} type={"text"}/>
                <StyledInput placeholder={"Пароль"} type={"password"}/>
                {modal === "register" &&
                    <StyledInput placeholder={"Повторите пароль"} type={"password"}/>
                }
                <button type={"submit"}>LOGIN</button>

                {modal === "register"
                    ? <p>Уже есть аккаунт? <span onClick={() => setModal("login")}>Войти</span></p>
                    : <p>Нет аккаунта? <span onClick={() => setModal("register")}>Зарегистрироваться</span></p>
                }
            </form>
        </div>
    );
};

export default LoginForm;