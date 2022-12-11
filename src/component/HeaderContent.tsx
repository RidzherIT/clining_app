import React from "react";
import contentImg from '../images/content/1.png';
import { Link } from "react-scroll";
export default function HeaderContent<T extends React.FC>(): React.ReactElement {
    return (
        <section className="header-content">
            <div className="container">
                <div className="header-content__inner">
                    <div className="header-content__item">
                        <div className="header-content__reviews reviews">Лучший клинговый сервис</div>
                        <h2 className="header-content__title title">
                            Клининговая компания
                            Лучшие услуги
                        </h2>
                        <p className="header-content__text">
                            Обратившись в нашу клининговую компанию вы получите клининговые услуги на высочайшем уровне,
                            и
                            индивидуальный подход к каждому клиенту.
                        </p>
                        <button className="header-content__btn">
                            <Link to='calculator' smooth={true} duration={1000}>Заказать уборку</Link>
                        </button>
                    </div>
                    <img className="header-content__item-img" src={contentImg} alt="content images" />
                </div>
            </div>
        </section>
    )
}