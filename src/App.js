import "./app.css";
import back from "./img/back.png";
import Header1 from "./components/UI/header-1/header-1";
import Header2 from "./components/UI/Header-2/Header-2";


function App() {

    return (
        <div className="wrapper">
            <Header1/>
            <Header2/>

            <div className="main-area">
                <div className="text-area">
                    <div>
                        <h1>Genius Medics<span className="gradient">Speciality Healthcare</span></h1>
                        <h2>Et dolor vulputate non ornare velit vitae malesuada venenatis sapien lectus lorem vulputate
                            ut. Cursus molestie ut. Tempus orci, vulputat.</h2>
                    </div>
                    <button className="main_btn">Make an appointment</button>
                </div>

                <div className="photo-area">
                    <img src={back} alt="consultation"/>
                </div>
            </div>
        </div>
    );
}

export default App;
