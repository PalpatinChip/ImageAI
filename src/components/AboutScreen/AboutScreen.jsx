import React, { useState } from 'react'
import Navigation from '../Navigation.jsx/Navigation'
import style from "./AboutScreen.module.css"

const AboutScreen = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    const text = [
        { text: "В чём преимущество вашей нейросети?", description: "Многофункциональность, простота использования и уникальность" },
        { text: "Как пользоваться нейросетью?", description: "Загрузите фото, выберите функцию и нажмите кнопку сгенерировать" },
        { text: "Какие технологии используются?", description: "Python, NumPy, TensorFlow, OpenCV, DataSphere" },
        { text: "Какие улучшения ждать в будущем?", description: "Улучшение интерфейса и добавление новых функций." },
    ]

    const handleRowClick = (index) => {
        setSelectedItem(index === selectedItem ? null : index);
    };


    return (
        <div className={style.about}>
            <Navigation />
            <p className={style.info}>
                Наш сервис предоставляет возможность автоматически генерировать карточки товаров.
                <br />Это обеспечивается использованием <br />искусственного интеллекта и алгоритмов<br /> машинного обучения.
            </p>
            <div className={style.table}>
                {text.map((item, i) => {
                    return <>
                        <div className={style.row} key={i} onClick={() => handleRowClick(i)}>
                            <p>{item.text}</p>
                            <p style={selectedItem === i ? { transform: 'rotate(45deg)' } : { transform: 'rotate(90deg)' }} className={style.plus}>+</p>
                        </div>
                        {selectedItem === i && (
                            <div
                                className={style.row_des}
                                onClick={() => handleRowClick(i)}
                            >
                                <p>{item.description}</p>
                            </div >
                        )}
                    </>
                })}
            </div>
        </div >
    )
}

export default AboutScreen