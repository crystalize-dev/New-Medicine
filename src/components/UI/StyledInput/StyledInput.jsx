import React, {useState} from 'react';

import cl from "./StyledInput.module.css"
import Icon from "../icon/Icon";


const StyledInput = ({...props}) => {
    const [showPass, setShowPass] = useState(true)

    return (
        <div className={cl.wrapper}>
            <input type={showPass && (props.type === "password") ? "password" : props.type === "password" ? "text" : props.type} required/>

            <p>{props.placeholder}</p>
            <hr/>

            {props.type === "password" &&
                <Icon onClick={() => {setShowPass(!showPass)}}>
                    {showPass ? "visibility" : "visibility_off"}
                </Icon>}
        </div>
    );
};

export default StyledInput;