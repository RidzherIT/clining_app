import React, { Fragment } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";


export default function Service<T extends React.FC>(): React.ReactElement {
    const serviceArray = useTypedSelector(store => store.serviceReducer);
    return (
        <>
            <section className="services" id="services">
                <div className="container">
                    <div className="services__reviews reviews">Услуги</div>
                    <h2 className="services__title title">
                        Наши услуги
                    </h2>
                    <div className="services__inner">
                        {
                            serviceArray.map(({ img, service, subService }) =>
                                <div key={img} className="services__item">
                                    <img className="services__item-img" src={img} alt="services img" />
                                    <div className="services__item-box">
                                        <h4 className="services__item-title">{service}</h4>
                                        <ul>
                                            {
                                                subService.map((elem, i) => <Fragment key={i}>
                                                    <li className="services__item-link">{elem}</li>
                                                </Fragment>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}