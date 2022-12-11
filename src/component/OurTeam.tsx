import React from 'react';
import Slider from "react-slick";
import itemTeamImg from '../images/team/1.jpg';
export default function OurTeam<T extends React.FC>(): React.ReactElement {
    const mokeArray: Array<{
        name: string;
    }> = [
            {
                name: 'Юрий'
            },
            {
                name: 'Юрий'
            },
            {
                name: 'Юрий'
            },
            {
                name: 'Юрий'
            },
            {
                name: 'Юрий'
            },
            {
                name: 'Юрий'
            },
            {
                name: 'Юрий'
            },
            {
                name: 'Юрий'
            },
            {
                name: 'Юрий'
            },
        ];
    const settings: {
        dots: boolean;
        infinite: boolean;
        arrows: false;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
        responsive: Array<{
            breakpoint: number;
            settings: {
                slidesToShow: number;
                slidesToScroll?: number;
                infinite?: boolean;
                dots?: boolean;
                initialSlide?: number;
            }
        }>
    } = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="team">
                <div className="container">
                    <div className="team__reviews reviews">Сотрудники</div>
                    <h2 className="team__title title">Наша команда</h2>
                    <div className="team__slider">
                        <Slider {...settings}>
                            {
                                mokeArray.map(({ name }, i) =>
                                    <div key={i} className="team__item">
                                        <img className="team__item-img" src={itemTeamImg} alt="team img" />
                                        <h5 className="team__item-name">{name}</h5>
                                        <p className="team__item-text">
                                            Опыт работы 7 лет
                                        </p>
                                    </div>
                                )
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}