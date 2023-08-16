import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from './Navigation.module.css'

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className={style.nav}>
            <p><p style={{ color: "red" }}>Товар</p>Камий</p>
            {menuOpen === false ?
                <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                    onClick={handleMenuToggle} className={menuOpen ? 'menu-open' : ''}>
                    <path d="M0 25H31M0 2H31M0 13.5H31" stroke="white" strokeWidth="3" />
                    <path d="M0 25H31M0 2H31M0 13.5H31" stroke="white" strokeWidth="3" />
                    <path d="M0 25H31M0 2H31M0 13.5H31" stroke="white" strokeWidth="3" />
                </svg>
                : (
                    <div className={style.verticalmenu}>
                        <p className={style.logo}><p style={{ color: "red" }}>Товар</p>Камий</p>
                        <hr />
                        <div className={style.menuText}>
                            <Link to="/ImageAi" className={style.link}>
                                <p>Главная</p>
                            </Link>
                            <Link to="/ImageAi/process" className={style.link}>
                                <p>Сгенерировать изображение</p>
                            </Link>
                            <Link to="/ImageAi/about" className={style.link}>
                                <p>О сервисе</p>
                            </Link>
                        </div>
                        <p className={style.close} onClick={closeMenu}>X</p>
                    </div >
                )
            }
        </div >
    )
}

export default Navigation