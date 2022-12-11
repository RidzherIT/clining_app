import React from 'react';
import howWorkOne from '../images/icons/lite.svg';
import howWorkTwo from '../images/icons/cleaning.svg';
import howWorkThree from '../images/icons/like.svg';
export default function HowWork<T extends React.FC>(): React.ReactElement {
    const mokeArray: Array<{
        title: string;
        img: string;
    }> = [
            {
                title: 'Легкое заполнение заявки',
                img: howWorkOne
            },
            {
                title: 'Выезд к вам и уборка',
                img: howWorkTwo
            },
            {
                title: 'Наслаждаетесь результатом',
                img: howWorkThree
            }
        ]
    return (
        <>
            <section className="how-work">
                <div className="container">
                    <div className="how-work__reviews reviews">Работа</div>
                    <h2 className="how-work__title title">Как мы работаем</h2>
                    <div className="how-work__wrapper">
                        <div className="how-work__items">
                            {mokeArray.map(elem =>
                                <div key={elem.title} className="how-work__item">
                                    <div className="how-work__img-box">
                                        <img src={elem.img} alt="how works icon" />
                                    </div>
                                    <h4 className="how-work__item-title">Легкое заполнение заявки</h4>
                                    <p className="how-work__item-text">
                                        Обратившись в нашу клининговую компанию вы получите клининговые услуги на высочайшем
                                        уровне,
                                        и индивидуальный подход к каждому клиенту.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}