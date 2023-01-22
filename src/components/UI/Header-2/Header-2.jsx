import React from 'react';
import cl from "./Header-2.module.css";
import logo from "../../../img/logo/logoWithText.png"


const Header2 = () => {
    return (
        <div className={cl.header}>
            <img src={logo} alt={"logo"} draggable={false}/>

            <ul className={cl.linksArea}>
                <li>О клинике</li>
                <li>Услуги и цены</li>
                <li>Наши специалисты</li>
                <li>Запись на приём</li>
                <li>Для пациентов</li>
                <li>Контакты</li>
            </ul>
        </div>
    );
};

export default Header2;