import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation.jsx/Navigation'
import style from "./HomeScreen.module.css"

const HomeScreen = () => {
    return (
        <div className={style.home}>
            <Navigation />
            <p className={style.text}>
                Мы рады представить вам уникальную
                <br /> возможность использования нашей AI
                <br />технологии для генерации карточек,
                <br />основанных на ваших данных.
            </p>
            <Link to="process" className={style.link}>
                <button className={style.btn}>Начать</button>
            </Link>
        </div>
    )
}

export default HomeScreen