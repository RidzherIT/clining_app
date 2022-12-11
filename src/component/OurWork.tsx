import React, { FC, ReactElement } from 'react';
import ourWorkImg from '../images/our-works/1.png';
import { Link } from "react-scroll";
export default function OurWork<T extends FC>(): ReactElement {
    return (
        <>
            <section className="our-works">
                <div className="container">
                    <div className="our-works__slider">
                        <div className="our-works__slider-items">
                            <div className="our-works__item our-works__item--bottom">
                                <div className="our-works__reviews reviews">Для юридических лиц</div>
                                <h2 className="our-works__title works__title">Клининг для юридических лиц и организаций</h2>
                                <p className="our-works__text works__text">
                                    Клининговая компания «Rostov Clean» оказывает услуги в сфере клининга предприятиям,
                                    организациям, предпринимателям и другим юридическим лицам.
                                </p>
                                <ul className="our-works__list">
                                    <li className="our-works__list-item">
                                        Уборка офисов
                                    </li>
                                    <li className="our-works__list-item">
                                        Уборка помещений
                                    </li>
                                    <li className="our-works__list-item">
                                        Торговые центры
                                    </li>
                                    <li className="our-works__list-item">
                                        Промышленные предприятия
                                    </li>
                                </ul>
                                <button className="our-works__btn header-content__btn">
                                    <Link to='calculator' smooth={true} duration={1000}>Оставить заявку</Link>
                                </button>
                            </div>
                            <div className="our-works__img-box">
                                <img src={ourWorkImg} alt="works images" />
                                <span className="our-works__img-decor"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}