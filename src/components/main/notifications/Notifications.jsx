import '../content.scss';
import '../../../vars.scss';

export default function Notifications(){

    return(
        <>
            <div className="pad-block">
                <h1>Уведомления</h1>
                <div className="new-not">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sint est fugit provident ratione.</p>
                    <div className="circle">
                        <h3 id="#count">1</h3>
                    </div>
                </div>
                <div className="new-not">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sint est fugit provident ratione.</p>
                    <div className="circle">
                        <h3 id="#count">1</h3>
                    </div>
                </div>
            </div>
        </>
    );
}