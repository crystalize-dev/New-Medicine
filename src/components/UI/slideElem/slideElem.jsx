import React from 'react';
import cl from "./slideElem.module.css"



const SlideElem = ({text, description, img, ...props}) => {
    return (
        <div {...props} className={cl.wrapper}>
            <img src={img} alt={"slide_img"} draggable={false}/>

            <div className={cl.textArea}>
                <h1>{text}</h1>
                <p>{description}</p>
                <button>Подробнее</button>
            </div>
        </div>
    );
};

export default SlideElem;