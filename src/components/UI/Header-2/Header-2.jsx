import React from 'react';
import cl from "./Header-2.module.css";
import Icon from "../iconELem/Icon";


const Header2 = () => {
    return (
        <div className={cl.header2}>
            <ul className={cl.linksArea}>
                <li>Home</li>
                <li>Pages</li>
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