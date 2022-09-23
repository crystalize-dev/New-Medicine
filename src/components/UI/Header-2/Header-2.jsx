import React, {useContext} from 'react';
import "./Header-2.css";
import Icon from "../iconELem/Icon";
import classes from "classnames";
import {ThemeContext} from "../../../context/context";


const Header2 = ({active, setActive, setModal}) => {
    const openModal = () => {
        setModal(true)
        setActive(false);
    }

    const {toggleTheme} = useContext(ThemeContext)

    return (
        <div className="header2">
            <ul className="linksArea">
                <li>Home</li>
                <li className="pagesLink">
                    Pages
                    <Icon>expand_more</Icon>
                    <div className="dropDownList">
                        <div className="dropElem"><a href="#">About us</a></div>
                        <div className="dropElem"><a href="#">Testimonials</a></div>
                        <div className="dropElem"><a href="#">Our blog</a></div>
                    </div>
                </li>
                <li>Departments</li>
                <li>Contact</li>
                <li>News</li>
                <li>Consultation</li>
            </ul>

            <div className="menuIcon">
                <Icon color={"white"} transform={1.3} onClick={() => toggleTheme()}>dark_mode</Icon>
                <Icon color={"white"} transform={1.3} onClick={() => setActive(!active)}>{active ? "expand_less" : "menu"}</Icon>
                <div className={active ? "menu" : classes("menu", "invisible")}>
                    <div className={active ? "logElem" : classes("logElem", "invisible")}
                         onClick={() => openModal()}>SIGN IN</div>
                    <div className={active ? "logElem" : classes("logElem", "invisible")}
                         onClick={() => openModal()}>SIGN UP</div>
                </div>
            </div>
        </div>
    );
};

export default Header2;