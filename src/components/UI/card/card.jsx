import React from 'react';
import Icon from "../icon/Icon";

import cl from "./card.module.css"


const Card = ({
                  icon,
                  header,
                  text,
                  buttonText = "Подробнее",
                  withButton = true,
                  alterText
              }) => {


    return (
        <div className={cl.wrapper}>
            <Icon className={cl.roundIcon}>
                {icon}
            </Icon>
            <h1>{header}</h1>
            <h2>{text}</h2>

            {withButton &&
                <button>
                    {buttonText}
                </button>}
            {!withButton && alterText &&
                <p>
                    {alterText}
                </p>}
        </div>
    );
};

export default Card;