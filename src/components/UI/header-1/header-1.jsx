import React from 'react';
import cl from "./header-1.module.css";
import logo from "../../../img/logo.png";
import Icon from "../iconELem/Icon";

const Header1 = () => {
    return (
        <div className={cl.header1}>
            <div className={cl.logoArea}>
                <p className="gradient">New Medicine</p>
                <img src={logo} alt="logo" draggable={false}/>
            </div>

            <div className={cl.contacts}>
                <p>Emergency help</p>
                <h1>8-800-555-35-35</h1>
            </div>

            <div className={cl.location}>
                <Icon color={"#3155aa"} transform={1.5}>location_on</Icon>
                <p className={cl.address}>Moscow, Krasniy Kazanec, 15k1</p>
            </div>

            <div className={cl.schedule}>
                <Icon color={"#3155aa"} transform={1.5}>schedule</Icon>
                <p>Work days - 8:00 - 21:00
                    Sunday - 8:00 - 14:00</p>
            </div>
        </div>
    );
};

export default Header1;