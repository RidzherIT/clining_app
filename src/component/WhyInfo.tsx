import React from "react";


export default function WhyInfo<T extends React.FC>(): React.ReactElement {
    return (
        <div className="why__info">
            <div className="container">
                <div className="why__info-inner">
                    <div className="why__info-item">
                        <span className="why__info-number">57+</span>
                        <p className="why__info-text">
                            Выполненных проектов
                        </p>
                    </div>
                    <div className="why__info-item">
                        <span className="why__info-number">305+</span>
                        <p className="why__info-text">
                            Экспертов по уборке
                        </p>
                    </div>
                    <div className="why__info-item">
                        <span className="why__info-number">48+</span>
                        <p className="why__info-text">
                            Довольных клиентов
                        </p>
                    </div>
                    <div className="why__info-item">
                        <span className="why__info-number">125+</span>
                        <p className="why__info-text">
                            Убранных квартир
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}