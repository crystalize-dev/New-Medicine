import "./app.css";
import Header1 from "./components/UI/Header-1/header-1";
import Header2 from "./components/UI/Header-2/Header-2";
import Slider from "./components/UI/slider/slider";
import Card from "./components/UI/card/card";
import {LoginContext} from "./context/loginContext";
import {useState} from "react";
import LoginForm from "./components/loginForm/LoginForm";


function App() {
    const [modal, setModal] = useState("")

    return (
        <LoginContext.Provider value={{modal, setModal}}>
            <div className="wrapper">
                <Header1 />
                <Header2 />

                <Slider/>
                <div className="cardArea">
                    <Card icon={"medical_services"} header={"График работы врачей"}
                          text={"Мы сделали для вас удобный режим работы"}/>
                    <Card icon={"stethoscope"} header={"Направления"} text={"Мы работает по многим направлениям!"}/>
                    <Card icon={"home_health"} header={"Записаться на приём"} buttonText={"Записаться"}
                          text={"Запишитесь онлайн"}/>
                    <Card icon={"schedule"} header={"Время работы"} withButton={false}
                          alterText={"Пн.-пт.             8:00 - 21:00\nСуббота           8:00 - 20:00\nВоскресенье  9:00 - 18:00"}/>
                </div>

                {modal !== "" &&
                    <LoginForm />
                }
            </div>
        </LoginContext.Provider>
    );
}

export default App;
