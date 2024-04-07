import React, { useState } from 'react';
import "./registration.scss";

const Registration = (props) => {

    let isLoggedIn = props.isLoggedIn;

    const handleClick = () => {

        const newUser = {
            email: {email},
            first_name: {fName},
            second_name: {sName},
            third_name: {tName},
            password: {password},
        }
        isLoggedIn = true;
        console.log(newUser);
    }

    const [email, setEmail] = useState("");
    const [fName, setfName] = useState("");
    const [sName, setsName] = useState("");
    const [tName, settName] = useState("");
    const [password, setPassword] = useState("");
    const [selectedUnvr, setSelectedUnvr] = useState(null);

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

    return(
        <>
            <div className="reg-box">
                <div className="reg-window">

                    <h2>Добро пожаловать!</h2>

                    <div className="email-content">
                        <label htmlFor="email">Электронная почта</label>
                        <input id='email' value={email} onChange={handleEmailInput}
                        type='text' placeholder='Ваша эл. почта'
                        />
                    </div>
                    <div className="f-name-content">
                        <label htmlFor="f-name">Имя</label>
                        <input id='f-name' onChange={handlefNameInput} value={fName}
                        type='text' placeholder='Ваша эл. почта'
                        />
                    </div>
                    <div className="s-name-content">
                        <label htmlFor="s-name">Фамилия</label>
                        <input id='s-name' onChange={handlesNameInput} value={sName}
                        type='text' placeholder='Ваша эл. почта'
                        />
                    </div>
                    <div className="t-name-content">
                        <label htmlFor="t-name">Отчество</label>
                        <input id='t-name' onChange={handletNameInput} value={tName}
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
                        <select name="University" id="University">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <p>Восстановить пароль</p>

                    <button onClick={() => handleClick()}>Подтвердить</button>
                </div>
            </div>
        </>
    );
}

export default Registration