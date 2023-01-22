import React from 'react';
import "./icon.css"

const Icon = ({children, ...props}) => {
    return (
        <span {...props} className={"material-symbols-rounded " + props.className}>
            {children}
        </span>
    );
};

export default Icon;