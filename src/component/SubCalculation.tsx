import React, { useState } from 'react';
import calcImg from '../images/calc/1.png';
import { Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import NotifyModal from './modals/NotifyModal';
export default function SubCalculation<T extends React.FC>(): React.ReactElement {
    console.log('render')
    const [area, setArea] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [valueRoom, setValueRoom] = useState<number>(1);
    const handleValueRoom = function (e: number) {
        setValueRoom(e)
    }
    const selectStyles = {
        borderRadius: '25px',
    }
    const [modalError, setModalError] = useState<boolean>(false);
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);
    const sendOrder = async function () {
        const data = {
            name: name,
            phone: phone,
            area: +area,
            valueRoom: valueRoom
        }
        if (!data.name || !data.phone || Object.is(NaN, data.area)) {
            setModalError(true);
            return;
        }
        const res = await fetch('https://server-clining.onrender.com/orders/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        const json = await res.json();
        setArea('');
        setName('');
        setPhone('');
        setValueRoom(1);
        setModalSuccess(true);
    }
    return (
        <>
            <section className="calc">
                <div className="container">
                    <div className="calc__reviews reviews">Калькулятор</div>
                    <h2 className="calc__title title">Калькулятор стоимости</h2>
                    <div className="calc__inner">
                        <div className="calc__item">
                            <div className="calc__form-item__box">
                                <h4 className="calc__item-title">Скидка на экономию времени нашего мастера</h4>
                                <span className="calc__item-procent">+15%</span>
                            </div>
                            <img src={calcImg} alt="lounge img" />
                        </div>
                        <div className="calc__form">
                            <div className="calc__form-select__wrapper">
                                <div className="calc__form-select__box">
                                    <h6 className="calc__form-subtitle">Количество комнат?</h6>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Кол-во комнат</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={valueRoom}
                                            label="Кол-во комнат"
                                            onChange={e => handleValueRoom(e.target.value as number)}
                                            sx={selectStyles}
                                        >
                                            <MenuItem value={1}>1 комната</MenuItem>
                                            <MenuItem value={2}>2 комнаты</MenuItem>
                                            <MenuItem value={3}>3 комнаты</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="calc__form-square__box">
                                    <h6 className="calc__form-subtitle">Площадь (м²)</h6>
                                    <input value={area} onChange={e => setArea(e.target.value)} type="text" className="calc__form-square__input" placeholder="10" />
                                </div>
                            </div>
                            <label className="calc__form-label">
                                <input value={name} onChange={e => setName(e.target.value)} className="calc__form-input__name" type="text" placeholder="Ваше имя" />
                                <input value={phone} onChange={e => setPhone(e.target.value)} className="calc__form-input__phone" type="text" placeholder="Телефон" />
                            </label>
                            <button onClick={() => sendOrder()} className="calc__form-btn">Отправить</button>
                        </div>
                    </div>
                </div>
                {modalError && <NotifyModal text="Вы не заполнили необходимые поля, либо указали площадь не в числовом формате!" func={setModalError} />}
                {modalSuccess && <NotifyModal text="Ваш заказ принят. Ожидайте звонка от оператора!" func={setModalSuccess} />}
            </section>
        </>
    )
}