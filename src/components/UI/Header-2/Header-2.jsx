import React, {useContext} from 'react';
import "./Header-2.css";
import Icon from "../iconELem/Icon";
import classes from "classnames";
import {LanguageContext, ThemeContext} from "../../../context/context";
import russia from "../../../img/russian.png";
import english from "../../../img/english.png";


const Header2 = ({active, setActive, setModal}) => {
    const openModal = () => {
        setModal(true)
        setActive(false);
    }

    const {toggleTheme} = useContext(ThemeContext)
    const {language, toggleLanguage} = useContext(LanguageContext)

    return (
        <div className="header2">
            <div className="language-area">
                <img src={russia} alt="russian" onClick={() => toggleLanguage('russian')}/>
                <img src={english} alt="english" onClick={() => toggleLanguage('english')}/>
            </div>
            <ul className="linksArea">
                <li>{language === 'russian' ? "Главная" : "Home"}</li>
                <li className="pagesLink">
                    {language === 'russian' ? "Страницы" : "Pages"}
                    <Icon>expand_more</Icon>
                    <div className="dropDownList">
                        <div className="dropElem"><a href="#">{language === 'russian' ? "О нас" : "About us"}</a></div>
                        <div className="dropElem"><a href="#">{language === 'russian' ? "Отзывы" : "Testimonials"}</a></div>
                        <div className="dropElem"><a href="#">{language === 'russian' ? "Наш блог" : "Our Blog"}</a></div>
                    </div>
                </li>
                <li>{language === 'russian' ? "Отделы" : "Departments"}</li>
                <li>{language === 'russian' ? "Контакты" : "Contacts"}</li>
                <li>{language === 'russian' ? "Новости" : "News"}</li>
                <li>{language === 'russian' ? "Консультация" : "Consultation"}</li>
            </ul>

            <div className="menuIcon">
                <Icon color={"white"} transform={1.3} onClick={() => toggleTheme()}>dark_mode</Icon>
                <Icon color={"white"} transform={1.3} onClick={() => setActive(!active)}>{active ? "expand_less" : "menu"}</Icon>
                <div className={active ? "menu" : classes("menu", "invisible")}>
                    <div className={active ? "logElem" : classes("logElem", "invisible")}
                         onClick={() => openModal()}>{language === 'russian' ? "Войти" : "SIGN IN"}</div>
                    <div className={active ? "logElem" : classes("logElem", "invisible")}
                         onClick={() => openModal()}>{language === 'russian' ? "Регистрация" : "SIGN UP"}</div>
                </div>
            </div>
        </div>
    );
};

export default Header2;