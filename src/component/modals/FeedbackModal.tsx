import React, { useState } from "react";
import NotifyModal from "./NotifyModal";
import { Rating } from '@mui/material';
import modalExitIcon from '../../images/icons/modal-exit.png';
type TFunc = (bool: boolean) => void;
interface IProps {
    func: TFunc;
}

export default function FeedbackModal<T extends React.FC>(props: IProps): React.ReactElement {
    const [name, setName] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [star, setStar] = useState<number>(0);
    const [modalError, setModalError] = useState<boolean>(false);
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);
    const changeStar = function (e: React.SyntheticEvent, value: number) {
        setStar(value)
    }
    const sendComment = async function () {
        const data = {
            name: name,
            star: star,
            text: text
        }

        if (!data.name || data.star === 0 || !data.text) {
            setModalError(true);
            return;
        }
        const res = await fetch('http://localhost:8080/comments/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        const json = await res.json();
        setName('');
        setStar(0);
        setText('');
        setModalSuccess(true);
        setTimeout(() => props.func(false), 3000);
    }
    return (
        <>
            <div className="review-wrapper">
                <div className="modal-review">
                    <img onClick={() => props.func(false)} src={modalExitIcon} alt="Кнопка закрытия окна" className="modal-review__exit" />
                    <h2 className="modal-review__title">Оставить отзыв</h2>
                    <input onChange={e => setName(e.target.value as string)} placeholder="Введите имя" value={name} className="modal-review__input" type="text" />
                    <textarea onChange={e => setText(e.target.value as string)} placeholder="Введите текст" value={text} className="modal-review__input" />
                    <Rating value={star} defaultValue={star} onChange={(e, newValue) => changeStar(e, newValue as number)} />
                    <button onClick={() => sendComment()} className="modal-review__btn">Оставить отзыв</button>
                </div>
            </div>
            {modalError && <NotifyModal text="Вы не заполнили необходимые поля!" func={setModalError} />}
            {modalSuccess && <NotifyModal text="Ваш отзыв оставлен. Спасибо большое!" func={setModalSuccess} />}
        </>
    )
}