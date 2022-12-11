import React, { Fragment } from "react";
import Slider from "react-slick";
import ourWorksImg from '../images/our-works/1.png';
export default function SliderWorks<T extends React.FC>(): React.ReactElement {
    const settings: {
        infinite: boolean;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
    } = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const mokeArray: Array<number> = [1, 2, 3];
    return (
        <>
            <section className="our-works" id="our-works">
                <div className="container">
                    <div className="our-works__reviews reviews">Работа</div>
                    <div className="our-works__slider">
                        <Slider {...settings}>
                            {mokeArray.map(elem => <Fragment key={elem}>
                                <div className="our-works__slider-items">
                                    <div className="our-works__item">
                                        <h2 className="our-works__title title">Наши работы</h2>
                                        <h4 className="our-works__subtitle">Уборка после ремонта в трехкомнатной квартире</h4>
                                        <p className="our-works__text">
                                            Обратившись в нашу клининговую компанию вы получите клининговые услуги на высочайшем
                                            уровне,
                                            и
                                            индивидуальный подход к каждому клиенту. Обратившись в нашу клининговую компанию вы
                                            получите
                                            клининговые услуги на высочайшем уровне, и индивидуальный подход к каждому клиенту.
                                        </p>
                                        <p className="our-works__text">
                                            Обратившись в нашу клининговую компанию вы получите клининговые услуги на высочайшем
                                            уровне,
                                            и
                                            индивидуальный подход к каждому клиенту. Обратившись в нашу клининговую компанию вы
                                            получите
                                            клининговые услуги на высочайшем уровне, и индивидуальный подход к каждому клиенту.
                                        </p>
                                        <p className="our-works__text">
                                            Обратившись в нашу клининговую компанию вы получите клининговые услуги на высочайшем
                                            уровне,
                                            и
                                            индивидуальный подход к каждому клиенту. Обратившись в нашу клининговую компанию вы
                                            получите
                                            клининговые услуги на высочайшем уровне, и индивидуальный подход к каждому клиенту.
                                        </p>
                                    </div>
                                    <div className="our-works__img-box">
                                        <img src={ourWorksImg} alt="works images" />
                                        <span className="our-works__img-decor"></span>
                                    </div>
                                </div>
                            </Fragment>)}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}