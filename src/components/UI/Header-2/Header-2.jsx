import React, {useEffect, useState} from 'react';
import cl from "./Header-2.module.css";
import Icon from "../iconELem/Icon";
import classes from "classnames";


const Header2 = ({active, setActive, setModal}) => {

    useEffect(() => {
        console.log("pzdc - ", active)
    }, [active])

    return (
        <div className={cl.header2}>
            <ul className={cl.linksArea}>
                <li>
                    Home
                    <div className={cl.slider}/>
                </li>
                <li className={cl.pagesLink}>
                    Pages
                    <Icon>expand_more</Icon>
                    <div className={cl.dropDownList}>
                        <div className={cl.dropElem}><a href="#">About us</a></div>
                        <div className={cl.dropElem}><a href="#">Testimonials</a></div>
                        <div className={cl.dropElem}><a href="#">Our blog</a></div>
                    </div>
                </li>
                <li>Departments</li>
                <li>Contact</li>
                <li>News</li>
                <li>Consultation</li>
            </ul>

            <div className={cl.menuIcon}>
                <Icon color={"white"} transform={1.3} onClick={() => setActive(!active)}>{active ? "expand_less" : "menu"}</Icon>
                <div className={active ? cl.menu : classes(cl.menu, cl.invisible)}>
                    <div className={active ? cl.logElem : classes(cl.logElem, cl.invisible)}
                         onClick={() => setModal(true)}>SIGN IN</div>
                    <div className={active ? cl.logElem : classes(cl.logElem, cl.invisible)}
                         onClick={() => setModal(true)}>SIGN UP</div>
                </div>
            </div>
        </div>
    );
};

export default Header2;