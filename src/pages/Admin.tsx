import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ConsaltAdmin from "../component/ConsaltAdmin";
interface IConsaltItem {
    id: number;
    name: string;
    email: string;
    phone: string;
    checked: boolean;
}
type TConsalt = Array<IConsaltItem>

interface IOrdersItem {
    id: number;
    name: string;
    email?: string;
    phone: string;
    checked: boolean;
    area: number;
    typeroom?: string;
    typeclean?: string;
    options?: string & Array<{
        option: string;
        value: number;
    }>;
    sale?: number;
    valueroom?: number;
    comment?: string;
}
type TOrders = Array<IOrdersItem>;

export default function Admin<T extends React.FC>(): React.ReactElement {
    // RENDER
    const [render, setRender] = useState<boolean>(false);
    // CONSALT
    const [consalt, setConsalt] = useState<TConsalt>([]);
    const removeConsalt: () => void = async function () {
        const res = await fetch('https://server-clining.onrender.com/request/delete', {
            method: 'DELETE'
        })
        setRender(!render);
    }
    const getConsalt = async function () {
        const res = await fetch('https://server-clining.onrender.com/request/get');
        const json = await res.json() as TConsalt;
        setConsalt(prev => [...json]);
    }
    useEffect(() => {
        getConsalt();
    }, [render]);
    // ORDERS
    const [orders, setOrders] = useState<TOrders>([]);
    const getOrders = async function () {
        const res = await fetch('https://server-clining.onrender.com/orders/get');
        const json = await res.json() as TOrders;
        // Helper
        const accJson = json.map(elem => {
            if (elem.options !== '') {
                const options = elem.options?.split(':') as Array<string>;
                const accOptions = options.map(elem => {
                    return {
                        option: elem.split('-')[0],
                        value: elem.split('-')[1]
                    }
                })
                return {
                    ...elem,
                    options: accOptions
                }
            }
            return elem;
        })
        setOrders(accJson as TOrders);
    }
    const deleteSuccessOrder: () => void = async function () {
        const res = await fetch('https://server-clining.onrender.com/orders/delete', {
            method: 'DELETE'
        })
        const json = await res.json() as TOrders;
        setRender(!render);
    }
    const updateSuccessOrder: (id: number) => void = async function (id) {
        const data = {
            id: id
        }
        const res = await fetch('https://server-clining.onrender.com/orders/update', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        const json = await res.json();
        setRender(!render);
    }
    useEffect(() => {
        getOrders();
    }, [render])
    return (
        <>
            <div className="admin">
                <h1 className="admin__title">?????????? ????????????</h1>
                <div className="admin__consalt">
                    <h2 className="admin__consalt-title">???????????? ???????????? ???? ????????????????????????</h2>
                    <button onClick={removeConsalt} className="admin__btn admin__consalt-btn">?????????????? ?????????????????????? ????????????????????????</button>
                    <div className="admin__consalt-wrapper">
                        {
                            consalt.length
                                ?
                                <>
                                    {consalt.map(elem => <Fragment key={elem.id}>
                                        <ConsaltAdmin setRender={setRender} checked={elem.checked} id={elem.id} name={elem.name} phone={elem.phone} email={elem.email} />
                                    </Fragment>)}
                                </>
                                :
                                <h3 style={{ margin: '25px auto', left: '0', right: '0' }}>???????????????????????? ??????</h3>
                        }
                    </div>
                </div>
                <div className="admin__order">
                    <h2 className="admin__order-title">
                        ????????????
                    </h2>
                    <button onClick={deleteSuccessOrder} className="admin__btn admin__order-btn">
                        ?????????????? ?????????????????????? ????????????
                    </button>
                    <div className="admin__order-wrapper">
                        {
                            orders.length
                                ?
                                <>
                                    {orders.map(elem => <Fragment key={elem.id}>
                                        {
                                            !elem.options
                                            &&
                                            <div className="admin__order-item">
                                                <h3 className="admin__order-title">
                                                    ??????: {elem.name}
                                                </h3>
                                                <p className="admin__order-text">
                                                    ??????????????: {elem.phone}
                                                </p>
                                                <p className="admin__order-text">
                                                    ??????????????: {elem.area} ????
                                                </p>
                                                <p className="admin__order-text">
                                                    ??????-???? ????????????: {elem.valueroom}
                                                </p>
                                                {!elem.checked ? <button onClick={() => updateSuccessOrder(elem.id)} className="admin__btn">??????????????????</button> : <p className="admin__order-value">??????????????????</p>}
                                            </div>
                                        }
                                        {
                                            elem.options
                                            &&
                                            <div className="admin__order-item">
                                                <h3 className="admin__order-title">
                                                    ??????: {elem.name}
                                                </h3>
                                                <p className="admin__order-text">
                                                    ??????????????: {elem.phone}
                                                </p>
                                                <p className="admin__order-text">
                                                    Email: {elem.email}
                                                </p>
                                                <p className="admin__order-text">
                                                    ??????????????: {elem.area} ????
                                                </p>
                                                <p className="admin__order-text">
                                                    ?????? ??????????????: {elem.typeroom}
                                                </p>
                                                <p className="admin__order-text">
                                                    ?????? ????????????: {elem.typeclean}
                                                </p>
                                                <p className="admin__order-text">
                                                    {elem.sale} ??????.
                                                </p>
                                                <ul className="admin__order-text">
                                                    {
                                                        elem.options.map(elem =>
                                                            <li key={elem.option}>
                                                                ??????????: {elem.option} ?? ??????-???? {elem.value}
                                                            </li>)
                                                    }
                                                </ul>
                                                <p className="admin__order-text">
                                                    {elem.comment}
                                                </p>
                                                {!elem.checked ? <button onClick={() => updateSuccessOrder(elem.id)} className="admin__btn">??????????????????</button> : <p className="admin__order-value">??????????????????</p>}
                                            </div>
                                        }
                                    </Fragment>)}
                                </>
                                :
                                <h3 style={{ margin: '25px auto', left: '0', right: '0' }}>???????????? ??????????????????????</h3>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}