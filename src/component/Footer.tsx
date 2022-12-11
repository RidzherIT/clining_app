import React from 'react';
import { Link } from "react-scroll";

export default function Footer<T extends React.FC>(): React.ReactElement {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <Link to='header' smooth={true} duration={1000}>Главная</Link>

                        </li>
                        <li className="footer__list-item">
                            <Link to='services' smooth={true} duration={1000}>Услуги</Link>

                        </li>
                        <li className="footer__list-item">
                            <Link to='calculator' smooth={true} duration={1000}>Какулькулятор стоимости</Link>

                        </li>
                        <li className="footer__list-item">
                            <Link to='our-works' smooth={true} duration={1000}>О компании</Link>

                        </li>
                        <li className="footer__list-item">
                            <Link to='contact' smooth={true} duration={1000}>Контакты</Link>

                        </li>
                    </ul>
                    <span className="footer__name">Клининг Ростов-на-Дону 2022.</span>
                    <a href="#">Политика обработки персональных данных</a>
                </div>
            </footer>
        </>
    )
}