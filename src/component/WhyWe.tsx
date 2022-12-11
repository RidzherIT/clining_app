import React from 'react';
import whyImg from '../images/why/1.png';
import whyCleaningIcon from '../images/icons/why-cleaning.svg';
import whyTrueIcon from '../images/icons/true.svg';
import whyRateIcon from '../images/icons/rate.svg';
import whySocialIcon from '../images/icons/social.svg';
import Slider from "react-slick";
export default function WhyWe<T extends React.FC>(): React.ReactElement {
    const mokeArray: Array<{
        img: string;
    }> = [
            {
                img: whyImg
            },
            {
                img: whyImg
            },
            {
                img: whyImg
            },
        ];
    const settings: {
        dots?: boolean;
        infinite: boolean;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
    } = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className="why">
                <div className="container">
                    <div className="why__reviews reviews">Почему выбирают нас</div>
                    <div className="why__slider">
                        <Slider {...settings}>
                            {mokeArray.map(({ img }, i) =>
                                <div key={i} className="why__items">
                                    <div className="why__item">
                                        <div className="h3 why__item-title">Мы сделаем каждый сантиметр вашей квартиры чистым</div>
                                        <p className="why__item-text">
                                            Обратившись в нашу клининговую компанию вы получите клининговые услуги на высочайшем
                                            уровне,
                                            и индивидуальный подход к каждому клиенту. Обратившись в нашу клининговую компанию вы
                                            получите клининговые услуги на высочайшем уровне, и индивидуальный подход к каждому
                                            клиенту.
                                        </p>
                                        <div className="why__item-wrapper">
                                            <div className="why__item-box">
                                                <img src={whyCleaningIcon} alt="cleaning icon" />
                                                <p className="why__item-box__text">
                                                    Ежедневная и ежемесячная уборка
                                                </p>
                                            </div>
                                            <div className="why__item-box">
                                                <img src={whyTrueIcon} alt="cleaning icon" />
                                                <p className="why__item-box__text">
                                                    100% удовлетворение от уборки
                                                </p>
                                            </div>
                                        </div>
                                        <div className="why__item-wrapper">
                                            <div className="why__item-box">
                                                <img src={whyRateIcon} alt="cleaning icon" />
                                                <p className="why__item-box__text">
                                                    Стремление к лучшей работе
                                                </p>
                                            </div>
                                            <div className="why__item-box">
                                                <img src={whySocialIcon} alt="cleaning icon" />
                                                <p className="why__item-box__text">
                                                    Опытные и отличные работники
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="why__img-box">
                                        <img className="why__img" src={img} alt="why select img" />
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}