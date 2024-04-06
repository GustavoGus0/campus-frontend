import React from 'react';
import "./registration.scss";

const Registration = () => {

    const handleClick = () => {
        console.log("click");
    }

    return(
        <>
            <div className="box">
                <div className="reg-window">

                    <h2>Добро пожаловать!</h2>

                    <div className="email-content">
                        <label htmlFor="email">Электронная почта</label>
                        <input id='email'
                        type='text' placeholder='Ваша эл. почта'
                        />
                    </div>
                    <div className="password-content">
                        <label htmlFor="password">Пароль</label>
                        <input id='password'
                        type='password' placeholder='Пароль'
                        />
                    </div>

                    <p>Восстановить пароль</p>

                    <button onClick={() => handleClick()}>Подтвердить</button>
                </div>
            </div>
        </>
    );
}

export default Registration