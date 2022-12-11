import React, { Fragment, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { combineAction } from '../redux/actions/calculation'
import InputNumber from "../UI/InputNumber";
import { Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import NotifyModal from "./modals/NotifyModal";
export default function Calculation<T extends React.FC>(): React.ReactElement {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const { resetValue } = combineAction;
    const [area, setArea] = useState<string>('');
    const { calculationReducer: calculationStore, serviceReducer: serviceStore } = useTypedSelector(store => store);
    const dispatch = useDispatch();

    const [selectTypeRoom, setSelectTypeRoom] = useState<string>(serviceStore[0].service);
    const [selectTypeRoomItem, setSelectTypeRoomItem] = useState<{
        img: string;
        service: string;
        subService: Array<string>;
    }>(serviceStore[0])
    const [selectTypeClean, setSelectTypeClean] = useState<string>(selectTypeRoomItem.subService[0]);
    const handleTypeRoom = function (string: string) {
        setSelectTypeRoom(string);
        const item = serviceStore.find(elem => elem.service == string);
        if (item) setSelectTypeRoomItem(item);
    }
    const handleTypeClean = function (string: string) {
        setSelectTypeClean(string);
    }

    const [modalError, setModalError] = useState<boolean>(false);
    const [modalSuccess, setModalSuccess] = useState<boolean>(false);

    const sendOrder = async function () {
        const accOptions = calculationStore.options;
        const accStrOptions = [] as Array<string>
        accOptions.forEach(elem => elem.value !== 0 && accStrOptions.push(elem.title + '-' + elem.value));
        let strOptions = '';
        for (let i = 0; i < accStrOptions.length; i++) {
            if (i != accStrOptions.length - 1) {
                strOptions += accStrOptions[i] + ':'
                continue;
            }
            strOptions += accStrOptions[i];
        }

        const data = {
            name: name,
            phone: phone,
            email: email,
            area: +area,
            typeRoom: selectTypeRoom,
            typeClean: selectTypeClean,
            options: strOptions,
            sale: calculationStore.totalSale,
            comment: comment,
            calculator: true
        }
        if (!data.name || !data.phone || !data.email || Object.is(NaN, data.area)) {
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
        setName('');
        setPhone('');
        setEmail('');
        setComment('');
        setArea('');
        dispatch(resetValue());
        setModalSuccess(true);
    }

    return (
        <>
            <section className="calculator" id="calculator">
                <div className="container">
                    <div className="calculator__reviews reviews">Калькулятор</div>
                    <h2 className="calculator__title title">Калькулятор стоимости</h2>
                    <div className="calculator__inner">
                        <div className="calculator__select-box">
                            <div className="calculator__typeofroom">
                                <h4 className="calculator__typeofroom-title">Тип помещения</h4>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Тип помещения</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={selectTypeRoom}
                                        label="Кол-во комнат"
                                        onChange={e => handleTypeRoom(e.target.value as string)}

                                    >
                                        {
                                            serviceStore.map(item =>
                                                <MenuItem key={item.service} value={item.service}>{item.service}</MenuItem>
                                            )
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="calculator__typeofroom">
                                <h4 className="calculator__typeofroom-title">Тип уборки</h4>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Тип уборки</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={selectTypeClean}
                                        label="Кол-во комнат"
                                        onChange={e => handleTypeClean(e.target.value as string)}

                                    >
                                        {
                                            selectTypeRoomItem.subService.map(item =>
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            )
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="calculator__square">
                                <h4 className="calculator__square-title">Площадь помещения</h4>
                                <input value={area} onChange={e => setArea(e.target.value)} type='text' className="calculator__square-input" placeholder="10 ( м² )" />
                                <span className="calculator__square-span"></span>
                            </div>
                        </div>
                        <div className="calculator__wrapper">
                            <div className="calculator__number">
                                {
                                    calculationStore.options.map(option =>
                                        <div key={option.title} className={
                                            option.title == 'Количество санузлов'
                                                ?
                                                'calculator__number-box calculator__number-box--color'
                                                :
                                                option.title != 'Количество санузлов' && option.value > 0
                                                &&
                                                'calculator__number-box calculator__number-box--color'
                                                ||
                                                'calculator__number-box'}>
                                            <h6 className="calculator__number-title">{option.title}</h6>
                                            <p className="calculator__number-price">
                                                {option.title == 'Количество санузлов' ? 'Один санузел входит в базовую стоимость' : `от ${option.sale} ₽/шт`}
                                            </p>
                                            <InputNumber title={option.title} value={option.value} />
                                            <div className="calculator__number-info">
                                                <svg width="7" height="13" viewBox="0 0 7 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.42259 8.72727V8.65909C2.43016 7.93561 2.50592 7.35985 2.64986 6.93182C2.7938 6.50379 2.99834 6.1572 3.26349 5.89205C3.52865 5.62689 3.84683 5.38258 4.21804 5.15909C4.44152 5.02273 4.64228 4.86174 4.82031 4.67614C4.99834 4.48674 5.13849 4.26894 5.24077 4.02273C5.34683 3.77652 5.39986 3.50379 5.39986 3.20455C5.39986 2.83333 5.31274 2.51136 5.13849 2.23864C4.96425 1.96591 4.7313 1.75568 4.43963 1.60795C4.14796 1.46023 3.8241 1.38636 3.46804 1.38636C3.15743 1.38636 2.85819 1.45076 2.57031 1.57955C2.28243 1.70833 2.0419 1.91098 1.84872 2.1875C1.65554 2.46401 1.5438 2.82576 1.51349 3.27273H0.0816761C0.111979 2.62879 0.278646 2.07765 0.581676 1.61932C0.888494 1.16098 1.2919 0.810606 1.7919 0.568181C2.29569 0.325757 2.8544 0.204545 3.46804 0.204545C4.13471 0.204545 4.71425 0.337121 5.20668 0.602272C5.70289 0.867424 6.08546 1.23106 6.3544 1.69318C6.62713 2.1553 6.76349 2.68182 6.76349 3.27273C6.76349 3.68939 6.6991 4.06629 6.57031 4.40341C6.44531 4.74053 6.26349 5.04167 6.02486 5.30682C5.79001 5.57197 5.50592 5.80682 5.17259 6.01136C4.83925 6.2197 4.57221 6.43939 4.37145 6.67045C4.17069 6.89773 4.02486 7.16856 3.93395 7.48295C3.84304 7.79735 3.7938 8.18939 3.78622 8.65909V8.72727H2.42259ZM3.14986 12.0909C2.86955 12.0909 2.62902 11.9905 2.42827 11.7898C2.22751 11.589 2.12713 11.3485 2.12713 11.0682C2.12713 10.7879 2.22751 10.5473 2.42827 10.3466C2.62902 10.1458 2.86955 10.0455 3.14986 10.0455C3.43016 10.0455 3.67069 10.1458 3.87145 10.3466C4.07221 10.5473 4.17259 10.7879 4.17259 11.0682C4.17259 11.2538 4.12524 11.4242 4.03054 11.5795C3.93963 11.7348 3.81652 11.8598 3.66122 11.9545C3.50971 12.0455 3.33925 12.0909 3.14986 12.0909Z"
                                                        fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                    )
                                }
                                <p className="calculator__number-text">
                                    Закажите уборку помещения и узнайте о вашей
                                    персональной скидке
                                </p>
                            </div>
                            <div className="calculator__form">
                                <h4 className="calculator__form-title">Стоимость услуг</h4>
                                <div className="calculator__form-box">
                                    <ul className="calculator__form-list">
                                        {
                                            calculationStore.options.map(option => <Fragment key={option.title}>
                                                {
                                                    option.value > 0 && <li className="calculator__form-item">
                                                        {option.title}
                                                    </li>
                                                }
                                            </Fragment>)
                                        }
                                    </ul>
                                    <ul className="calculator__form-num">
                                        {
                                            calculationStore.options.map(option => <Fragment key={option.title}>
                                                {
                                                    option.value > 0 && <li className="calculator__form-item">
                                                        {option.value} шт
                                                    </li>
                                                }
                                            </Fragment>)
                                        }
                                    </ul>
                                    <ul className="calculator__form-price">
                                        {
                                            calculationStore.options.map(option => <Fragment key={option.title}>
                                                {
                                                    option.value > 0 && <li className="calculator__form-item">
                                                        {option.currentSale} ₽
                                                    </li>
                                                }
                                            </Fragment>)
                                        }
                                    </ul>
                                </div>
                                <div className="calculator__form-total">
                                    <span className="calculator__form-span">Итого</span>
                                    <span className="calculator__form-span">{calculationStore.totalSale} ₽</span>
                                </div>
                                <h6 className="calculator__form-subtitle">Для заказа услуги, заполните форму ниже</h6>
                                <form className="calculator__form-inner">
                                    <input value={name} onChange={e => setName(e.target.value)} className="calculator__form-input" type="text" placeholder="Имя" />
                                    <input value={phone} onChange={e => setPhone(e.target.value)} className="calculator__form-input" type="text" placeholder="Телефон" />
                                    <input value={email} onChange={e => setEmail(e.target.value)} className="calculator__form-input" type="text" placeholder="E-mail" />
                                    <textarea value={comment} onChange={e => setComment(e.target.value)} className="calculator__form-textarea"
                                        placeholder="Комментарий к заказу"></textarea>
                                    <span onClick={() => sendOrder()} className="calculator__form-btn">Заказать уборку </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {modalError && <NotifyModal text="Вы не заполнили необходимые поля, либо указали площадь не в числовом формате!" func={setModalError} />}
                {modalSuccess && <NotifyModal text="Ваш заказ принят. Ожидайте звонка от оператора!" func={setModalSuccess} />}
            </section>
        </>
    )
}