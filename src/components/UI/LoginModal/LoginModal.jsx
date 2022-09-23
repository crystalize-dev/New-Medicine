import React, {useState} from 'react';
import cl from "./LoginModal.css";
import classes from "classnames";
import Icon from "../iconELem/Icon";


const LoginModal = ({modal, setModal}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const auth = (e) => {
        e.preventDefault();

        setModal(false);

        setLogin('');
        setPassword('');
    }

    return (
        <div className={modal ? "wrapperModal" : classes("wrapperModal", "invisible")}
             onMouseDown={() => setModal(false)}>

            <div className="window" onMouseDown={(e) => e.stopPropagation()}>
                <Icon onClick={() => setModal(false)} transform={1.4} color={"white"}>close</Icon>

                <form className="mainArea" onSubmit={(e) => auth(e)}>
                    <div>
                        <input placeholder={"Enter Login"} type="text"
                               value={login} onChange={(e) => setLogin(e.target.value)}/>
                        <input placeholder={"Enter Password"} type="password"
                               value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;