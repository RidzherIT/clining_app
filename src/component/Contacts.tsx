import React, { useState, FC, ReactElement } from 'react';
import instagramIconFooter from '../images/icons/insta.svg';
import whatsappIconFooter from '../images/icons/whatsap.svg';
import telegramIconFooter from '../images/icons/telegramm.svg';
import NotifyModal from './modals/NotifyModal';
export default function Contacts<T extends React.FC>(): React.ReactElement {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [modalError, setModalError] = useState<boolean>(false);
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);
    const sendConsalt = async function () {
        const data = {
            name: name,
            phone: phone,
            email: email
        }
        if (!data.name || !data.phone || !data.email) {
            setModalError(true);
            return;
        }
        console.log(data);
        const res = await fetch('https://server-clining.onrender.com/request/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        const json = await res.json();
        setName('');
        setPhone('');
        setEmail('');
        setModalSuccess(true);
    }
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <h2 className="contact__title title">Связаться с нами</h2>
                    <div className="contact__inner">
                        <div className="contact__form">
                            <h6 className="contact__form-title">
                                Отправьте заявку – менеджер свяжется с Вами в ближайшее время.
                            </h6>
                            <label className="contact__form-label">
                                <input value={name} onChange={e => setName(e.target.value as string)} type="text" className="contact__form-name" placeholder="Ваше имя" />
                                <input value={phone} onChange={e => setPhone(e.target.value as string)} type="text" className="contact__form-phone" placeholder="Телефон" />
                            </label>
                            <label className="contact__form-label--email">
                                <input value={email} onChange={e => setEmail(e.target.value as string)} type="text" className="contact__form-email" placeholder="E-mail" />
                            </label>
                            <button onClick={() => sendConsalt()} className="contact__btn header-content__btn">Отправить</button>
                        </div>
                        <div className="contact__social">
                            <h5 className="contact__social-title">
                                Удобно общаться через соцсети?
                            </h5>
                            <p className="contact__social-subtitle">Пишите нам</p>
                            <div className="contact__social-box">
                                <a className="contact__social-boxx" href="#">
                                    <img src={instagramIconFooter} alt="instagram icon" />
                                    <p>Instagram</p>
                                </a>
                                <a className="contact__social-boxx" href="#">
                                    <img src={whatsappIconFooter} alt="whatsap icon" />
                                    <p>WhatsApp</p>
                                </a>
                                <a className="contact__social-boxx" href="#">
                                    <img src={telegramIconFooter} alt="telegram icon" />
                                    <p>Telegram</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {modalError && <NotifyModal text="Вы не заполнили необходимые поля!" func={setModalError} />}
                {modalSuccess && <NotifyModal text="Ваша заявка принята. Ожидайте звонка от оператора!" func={setModalSuccess} />}
            </section>
        </>
    )
}