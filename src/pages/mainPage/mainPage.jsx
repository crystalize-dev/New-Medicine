import React, {useContext} from 'react';
import "./mainPage.css";
import back from "../../img/back.png";
import {LanguageContext} from "../../context/context";

const MainPage = ({setActive, setModal}) => {

    const generatedText = {russian: "Активизации. Развития. Сфера соответствующий собой развития. Сложившаяся также реализация оценить постоянный разработке задач. Финансовых активизации. Что развития. Рамки таким таки.",
        english: "Et dolor vulputate non ornare velit vitae malesuada venenatis sapien lectus lorem vulputate ut. Cursus molestie ut. Tempus orci, vulputat."}


    const {language} = useContext(LanguageContext);

    return (
        <div className="main-area" onClick={() => setActive(false)}>
            <div className="text-area">
                <div>
                    <h1>{language === 'russian' ? "Лучшие медики" : "Genius Medics"}<span className="gradient">{language === 'russian' ? "Позаботятся о вас" : "Speciality Healthcare"}</span></h1>
                    <h2>{language === 'russian' ? generatedText.russian : generatedText.english}</h2>
                </div>
                <button className="main_btn" onClick={() => setModal(true)}>{language === 'russian' ? "Записаться на приём" : "Make an appointment"}</button>
            </div>

            <div className="photo-area">
                <img src={back} alt="consultation"/>
            </div>
        </div>
    );
};

export default MainPage;