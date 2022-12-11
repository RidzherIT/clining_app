import React, { useEffect, useState } from 'react';
import reviewLogo from '../images/reviews/1.svg';
import userImg from '../images/reviews/user.png';
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import FeedbackModal from './modals/FeedbackModal';
interface ICommentsItem {
    id: number;
    name: string;
    star: number;
    text: string;
}
type TComments = Array<ICommentsItem>;
export default function Review<T extends React.FC>(): React.ReactElement {
    const settings: {
        dots: boolean;
        infinite: boolean;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
    } = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [comments, setComments] = useState<TComments>([]);
    const getComments = async function () {
        const res = await fetch('http://localhost:8080/comments/get');
        const json = await res.json() as TComments;
        setComments(prev => [...json]);
    }
    const [modalReview, setModalReview] = useState<boolean>(false);
    const showModal = function (e: React.SyntheticEvent<HTMLButtonElement>) {
        setModalReview(true);
    }
    useEffect(() => {
        getComments()
    }, [])
    return (
        <>
            <section className="review">
                <div className="container">
                    <div className="review__inner">
                        <div className="review__about">
                            <div className="review__reviews reviews">Отзывы</div>
                            <h2 className="review__title title">Что о нас говорят</h2>
                            <img src={reviewLogo} alt="logo icon" />
                            <button onClick={e => showModal(e)} className="review__btn header-content__btn">Оставить отзыв</button>
                        </div>
                        <div className="review__slider">
                            <Slider {...settings}>
                                {comments.map(({ name, id, star, text }) =>
                                    <div key={id} className="review__comments">
                                        <div className="review__author-box">
                                            <img className="review__author-img" src={userImg} alt="author img" />
                                            <p className="review__author-name">{name}</p>
                                        </div>
                                        <p className="review__comments-text">
                                            {text}
                                        </p>
                                        <div className="star">
                                            <Rating disabled={true} value={star} />
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                        <button className="header-content__btn review__comments-btn">Оставить отзыв</button>
                    </div>
                </div>
            </section>
            {modalReview && <FeedbackModal func={setModalReview} />}
        </>
    )
}