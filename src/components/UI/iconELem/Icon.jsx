import React from 'react';

const Icon = ({children, transform, color}) => {
    return (
        <span className="material-symbols-outlined"
              style={{transform: `scale(${transform})`, color: color, transition: "all 0.3s ease 0s"}}>
            {children}
        </span>
    );
};

export default Icon;