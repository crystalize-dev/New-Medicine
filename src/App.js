import "./app.css";
import back from "./img/back.png";
import Header1 from "./components/UI/header-1/header-1";
import Header2 from "./components/UI/Header-2/Header-2";
import {useState} from "react";
import LoginModal from "./components/UI/LoginModal/LoginModal";
import {ThemeContext} from "./context/context";


function App() {
    const [active, setActive] = useState(false);
    const [modal, setModal] = useState(false);

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => curr === 'light' ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme} className="wrapper">
                <Header1/>
                <Header2 active={active} setActive={setActive} setModal={setModal}/>

                <LoginModal modal={modal} setModal={setModal}/>

                <div className="main-area" onClick={() => setActive(false)}>
                    <div className="text-area">
                        <div>
                            <h1>Genius Medics<span className="gradient">Speciality Healthcare</span></h1>
                            <h2>Et dolor vulputate non ornare velit vitae malesuada venenatis sapien lectus lorem vulputate
                                ut. Cursus molestie ut. Tempus orci, vulputat.</h2>
                        </div>
                        <button className="main_btn" onClick={() => setModal(true)}>Make an appointment</button>
                    </div>

                    <div className="photo-area">
                        <img src={back} alt="consultation"/>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
