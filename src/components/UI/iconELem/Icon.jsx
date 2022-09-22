import React from 'react';

const Icon = ({children, transform, color}) => {
    return (
        <span className="material-symbols-outlined"
              style={{transform: `scale(${transform})`, color: color}}>
            {children}
        </span>
    );
};

export default Icon;