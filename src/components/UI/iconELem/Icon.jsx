import React from 'react';

const Icon = ({children, transform, color, onClick}) => {
    return (
        <span onClick={onClick} className="material-symbols-outlined"
              style={{transform: `scale(${transform})`, color: color, transition: "all 0.3s ease 0s", userSelect: "none"}}>
            {children}
        </span>
    );
};

export default Icon;