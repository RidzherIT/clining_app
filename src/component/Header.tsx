import React, { useEffect, useState } from "react";
import telegramIcon from '../images/icons/telegram.svg';
import whatsappIcon from '../images/icons/whatsapp.svg';
import vkIcon from '../images/icons/vk.svg';
import logoIcon from '../images/icons/logo.svg';
import { Link } from "react-scroll";
export default function Header<T extends React.FC>(): React.ReactElement {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <>
            <header className="header" id="header">
                <div className="header__border-bottom">
                    <div className="container">
                        <div className="header__top">
                            <div className="header__top-social">
                                <a className="header__top-link" href="#">
                                    <img src={telegramIcon} alt="telegram icon" />
                                </a>
                                <a className="header__top-link" href="#">
                                    <img src={whatsappIcon} alt="whatsapp icon" />
                                </a>
                                <a className="header__top-link" href="#">
                                    <img src={vkIcon} alt="vk icon" />
                                </a>
                            </div>
                            <div className="header__top-box">
                                <p className="header__top-adress">
                                    г. Ростов-на-Дону, ул. Портовая, д. 393
                                </p>
                                <a className="header__top-email" href="mailto:info@cliningrnd.ru">info@cliningrnd.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="container">
                        <div className="header__bottom-inner">
                            <a className="header__logo" href="#">
                                <img src={logoIcon} alt="logo icon" />
                            </a>
                            <nav className={`${showMenu && 'menu__show'} menu`}>
                                <ul className="menu__list">
                                    <li className="menu__list-item menu__list-item--active">
                                        <Link to='header' smooth={true} duration={1000}>Главная</Link>
                                    </li>
                                    <li className="menu__list-item">
                                        <Link to='services' smooth={true} duration={1000}>Услуги</Link>
                                    </li>
                                    <li className="menu__list-item">
                                        <Link to='calculator' smooth={true} duration={1000}>Какулькулятор стоимости</Link>
                                    </li>
                                    <li className="menu__list-item">
                                        <Link to='our-works' smooth={true} duration={1000}>О компании</Link>

                                    </li>
                                    <li className="menu__list-item">
                                        <Link to='contact' smooth={true} duration={1000}>Контакты</Link>
                                    </li>
                                </ul>
                                <div onClick={() => setShowMenu(!showMenu)} className="menu__exit">✖</div>
                            </nav>
                            <a className="header__bottom-phone" href="tel:+79185657536">
                                +7 (918) 565-75-36
                            </a>
                            {!showMenu && <button onClick={() => setShowMenu(!showMenu)} className="menu__btn"></button>}
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}