import React from "react";
type TFunc = (bool: boolean) => void;
interface IProps {
    text: string;
    func: TFunc;
}

export default function NotifyModal<T extends React.FC>(props: IProps): React.ReactElement {
    const { text, func } = props;
    return (
        <>
            <div className="modal-wrapper">
                <div className="modal-notify">
                    <p className="modal-notify__text">{text}</p>
                    <button onClick={() => func(false)} className="modal-notify__btn">Закрыть окно</button>
                </div>
            </div>
        </>
    )
}