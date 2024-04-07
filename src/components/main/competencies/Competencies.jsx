import '../content.scss';
import '../../../vars.scss';

export default function Competencies(){

    return(
        <>
            <div className="pad-block">
                <h1>Компетенции</h1>

                <div className="compet-container">
                    <div className="line-headings-of-table">
                        <div className="name-of-comp">
                            <h2>Название компетенции</h2>
                        </div>
                        <div className="desc-of-comp">
                            <h2>Описание компетенции</h2>
                        </div>
                        <div className="myLevel">
                            <h2>Мой уровень</h2>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="heading">
                            <h3>Анализ информации</h3>
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae nisi expedita repellendus omnis dolorum temporibus magnam velit totam nobis!</p>
                        </div>
                        <div className="level">
                            <h4 id="rating">2</h4>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="heading">
                            <h3>Клиентоориентированность</h3>
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae nisi expedita repellendus omnis dolorum temporibus magnam velit totam nobis!</p>
                        </div>
                        <div className="level">
                            <h4 id="rating">0</h4>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="heading">
                            <h3>Коммуникативность</h3>
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae nisi expedita repellendus omnis dolorum temporibus magnam velit totam nobis!</p>
                        </div>
                        <div className="level">
                            <h4 id="rating">0</h4>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="heading">
                            <h3>Лидерство</h3>
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae nisi expedita repellendus omnis dolorum temporibus magnam velit totam nobis!</p>
                        </div>
                        <div className="level">
                            <h4 id="rating">0</h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}