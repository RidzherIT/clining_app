import React from "react";
interface IProps {
    id: number;
    name: string;
    email: string;
    phone: string;
    checked: boolean;
    setRender: (prev: TSetRenderCallback) => void;
}
type TSetRenderCallback = (prev: boolean) => boolean;
export default function ConsaltAdmin<T extends React.FC>(props: IProps): React.ReactElement {
    const { id, name, email, phone, checked, setRender } = props;
    const successConsalt = async () => {
        const data = {
            id: id
        }
        const res = await fetch('http://localhost:8080/request/update', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        const json = await res.json();
        setRender(prev => !prev);
    }
    return (
        <>
            <div className="admin__consalt-item">
                <h2 className="admin__consalt-item__title">
                    Имя: {name}
                </h2>
                <p className="admin__consalt-item__text">
                    Телефон: {phone}
                </p>
                <p className="admin__consalt-item__text">
                    Email: {email}
                </p>
                {!checked ? <button onClick={successConsalt} className="admin__btn">Выполнить</button> : <span>Консультация выполнена</span>}
            </div>
        </>
    )
}