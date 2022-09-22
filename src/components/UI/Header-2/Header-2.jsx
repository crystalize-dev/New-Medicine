import React from 'react';
import cl from "./Header-2.module.css";
import Icon from "../iconELem/Icon";


const Header2 = () => {
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

            <Icon color={"white"} transform={1.3}>menu</Icon>
        </div>
    );
};

export default Header2;