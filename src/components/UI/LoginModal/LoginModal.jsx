import React, {useContext, useState} from 'react';
import cl from "./LoginModal.css";
import classes from "classnames";
import Icon from "../iconELem/Icon";
import {LanguageContext} from "../../../context/context";


const LoginModal = ({modal, setModal}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const {language} = useContext(LanguageContext);

    const auth = (e) => {
        e.preventDefault();

        setModal(false);

        setLogin('');
        setPassword('');
    }

    return (
        <div className={modal ? "wrapperModal" : classes("wrapperModal", "invisible")}
             onMouseDown={() => setModal(false)}>

            <div className="window" onMouseDown={(e) => e.stopPropagation()}>
                <Icon onClick={() => setModal(false)} transform={1.4} color={"white"}>close</Icon>

                <form className="mainArea" onSubmit={(e) => auth(e)}>
                    <div>
                        <input placeholder={language === 'russian' ? "Введите логин" : "Enter Login"} type="text"
                               value={login} onChange={(e) => setLogin(e.target.value)}/>
                        <input placeholder={language === 'russian' ? "Введите пароль" : "Enter Password"} type="password"
                               value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit">{language === 'russian' ? "Войти" : "Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;