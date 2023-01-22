import React, {useState} from 'react';
import cl from "./header-1.module.css";
import facebook from "../../../img/social/face.png"
import vk from "../../../img/social/vk.png"
import telegram from "../../../img/social/telegram.png"
import Icon from "../icon/Icon";
import classNames from "classnames";


const Header1 = () => {
    const [inputActive, setInputActive] = useState(false)

    return (
        <header className={cl.header}>
                <ul className={cl.socials}>
                    <img alt={"vk"} src={vk} draggable={false}/>
                    <img alt={"telegram"} src={telegram} draggable={false}/>
                    <img alt={"facebook"} src={facebook} draggable={false}/>
                </ul>

                <div className={cl.sideInfo}>
                    <p><span>Позвоните нам!</span> +7(800)-555-35-35</p>
                    <hr/>
                    <p>someEmail@mail.ru</p>

                    <div className={cl.inputWrapper}>
                        <Icon className={inputActive ? classNames(cl.icon, cl.inactiveIcon) : cl.icon} onClick={() => setInputActive(!inputActive)}>
                            search
                        </Icon>
                        <input className={inputActive ? cl.searchInput : classNames(cl.searchInput, cl.inactiveInput)} placeholder={"Найти"}/>
                    </div>

                    <button>Вход</button>
                    <hr/>
                    <button>Регистрация</button>
                </div>
        </header>
    );
};

export default Header1;