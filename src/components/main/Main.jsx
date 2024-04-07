import Menu from "./Menu";
import Profile from "./profile/Profile";
import Events from "./events/Events";
import Competencies from "./competencies/Competencies";
import Notifications from "./notifications/Notifications";
import Messages from "./messages/Messages";
import Settings from "./settings/Settings";
import "./main.scss";
import "../../vars.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function Main(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const [email, setEmail] = useState("");
    const [first_name, setfName] = useState("");
    const [second_name, setsName] = useState("");
    const [third_name, settName] = useState("");
    const [password, setPassword] = useState("");
    const [selectedUnvr, setSelectedUnvr] = useState(1);

    const handleClick = () => {

        if(email !== "" &&
           first_name !== "" &&
           second_name !== "" &&
           third_name !== "" &&
           password !== "" &&
           selectedUnvr != 1
        ){
            const newUser = {
                email: {email},
                first_name: {first_name},
                second_name: {second_name},
                third_name: {third_name},
                password: {password},
                university: {selectedUnvr},
            }
            console.log(newUser);
            setIsLoggedIn(true);
        }
    }


    function handleEmailInput(event){
        setEmail(event.target.value);
    }

    function handlefNameInput(event){
        setfName(event.target.value);
    }

    function handlesNameInput(event){
        setsName(event.target.value);
    }

    function handletNameInput(event){
        settName(event.target.value);
    }

    function handlePasswordInput(event){
        setPassword(event.target.value);
    }

    function handleUnivInput(event){
        setSelectedUnvr(event.target.value);
    }


    return !isLoggedIn ? (
        <>
            <div className="reg-box">
                <div className="reg-window">

                    <h2>Добро пожаловать!</h2>

                    <div className="email-content">
                        <label htmlFor="email">Электронная почта:</label>
                        <input id='email' value={email} onChange={handleEmailInput}
                        type='text' placeholder='Ваша эл. почта'
                        />
                    </div>
                    <div className="f-name-content">
                        <label htmlFor="f-name">Имя:</label>
                        <input id='f-name' onChange={handlefNameInput} value={first_name}
                        type='text' placeholder='Ваша эл. почта'
                        />
                    </div>
                    <div className="s-name-content">
                        <label htmlFor="s-name">Фамилия:</label>
                        <input id='s-name' onChange={handlesNameInput} value={second_name}
                        type='text' placeholder='Ваша эл. почта'
                        />
                    </div>
                    <div className="t-name-content">
                        <label htmlFor="t-name">Отчество:</label>
                        <input id='t-name' onChange={handletNameInput} value={third_name}
                        type='text' placeholder='Ваша эл. почта'
                        />
                    </div>

                    <div className="password-content">
                        <label htmlFor="password">Пароль</label>
                        <input id='password' onChange={handlePasswordInput} value={password}
                        type='password' placeholder='Пароль'
                        />
                    </div>

                    <div className="select-block">
                        <label htmlFor="University">Учебное заведение:</label>
                        <select value={selectedUnvr} onChange={handleUnivInput} name="University" id="University">
                            <option value="-"></option>
                            <option value="TumGU">ТюмГУ</option>
                            <option value="TIU">ТИУ</option>
                            <option value="TGMU">ТГМУ</option>
                            <option value="GAU SA">ГАУ СА</option>
                            <option value="TGIK">ТГИК</option>
                        </select>
                    </div>

                    <button onClick={() => handleClick()}>Подтвердить</button>
                </div>
            </div>
        </>
    ) :
    (
        <Router>
            <div className="page">
                <menu>
                    <Menu />
                </menu>
                <main>
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/competencies" element={<Competencies />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}