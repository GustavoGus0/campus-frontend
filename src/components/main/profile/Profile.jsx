import '../content.scss';
import '../../../vars.scss';

export default function Profile(){

    const editIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4.00037 20.9999H20.5M19.2372 3.91416L20.0861 4.76315C20.8672 5.5442 20.8672 6.81053 20.0861 7.59158L8.85031 18.8274C8.63076 19.0469 8.36311 19.2124 8.06856 19.3105L3.94902 20.6837C3.55814 20.814 3.18627 20.4421 3.31656 20.0513L4.68974 15.9317C4.78793 15.6372 4.95335 15.3695 5.1729 15.15L16.4087 3.91415C17.1898 3.13311 18.4561 3.13311 19.2372 3.91416Z" stroke="#042484" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
    </svg>

    return(
        <> 
            <div className="pad-block">
                <h1>Личный кабинет</h1>
                <div className="box">
                    <div className="profile">
                        <div className="line-block">
                            <h2>Профиль</h2>
                            <div className="edit-icon">
                                {editIcon}
                                <p>Редактировать</p>
                            </div>
                        </div>
                        <div className="info-and-pic">
                            <div className="pic">
                                <img src="#" alt="Фотография профиля" />
                            </div>
                            <div className="info">
                                <p>Имя:</p>
                                <p>Фамилия:</p>
                                <p>Отчество:</p>
                                <p>Учебное заведение:</p>
                            </div>
                        </div>
                    </div>
                    <div className="myComps">
                        <h2>Мои компетенции</h2>
                    </div>
                    <div className="myEvents">
                        <h2>Мои мероприятия</h2>
                    </div>
                </div>
            </div>
        </>
    );
}