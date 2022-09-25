import "./app.css";
import back from "./img/back.png";
import Header1 from "./components/UI/header-1/header-1";
import Header2 from "./components/UI/Header-2/Header-2";
import {useEffect, useState} from "react";
import LoginModal from "./components/UI/LoginModal/LoginModal";
import {LanguageContext, ThemeContext} from "./context/context";
import {checkForLocalStorage} from "./utility/checkForLocalStorage";
import MainPage from "./pages/mainPage/mainPage";


function App() {
    const [active, setActive] = useState(false);
    const [modal, setModal] = useState(false);

    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('russian')

    const toggleTheme = () => {
        const switchTheme = (curr) => curr === 'light' ? "dark" : "light";

        let newTheme = switchTheme(theme);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    const toggleLanguage = (language) => {
        setLanguage(language);
        localStorage.setItem('language', language)
    }

    useEffect(() => {
        checkForLocalStorage(setTheme, setLanguage)
    }, [])


    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <div id={theme} className="wrapper">
                    <Header1/>
                    <Header2 active={active} setActive={setActive} setModal={setModal}/>

                    <LoginModal modal={modal} setModal={setModal}/>

                    <MainPage setActive={setActive} setModal={setModal}/>
                </div>
            </ThemeContext.Provider>
        </LanguageContext.Provider>
    );
}

export default App;
