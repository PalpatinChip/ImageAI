import React, { useState } from 'react'
import style from "./ProcessScreen.module.css"
import Navigation from '../Navigation.jsx/Navigation'

const ProcessScreen = () => {

    const [background, setBackground] = useState(false);
    const [deleteBack, setDeleteBack] = useState(false)
    const [assessment, setAssessment] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null)

    // Функция нажатия кнопки инфографики
    const handleAssessmentClick = () => {
        setAssessment(!assessment);
        setBackground(false)
        setDeleteBack(false)
    };
    // Функция изменения фона
    const handleBackgroundClick = () => {
        setBackground(!background)
        setAssessment(false)
        setDeleteBack(false)
    }
    // Функция удаления фона
    const handleBackgroundDeleteClick = () => {
        setDeleteBack(!deleteBack)
        setAssessment(false)
        setBackground(false)
    }

    // Функция которая сохранят полученное изображение в selectedImage
    const handleImageUpload = event => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    const handleImageUploadEx = (name) => {
        setSelectedImage(name);
    };

    return (
        <div className={style.proc}>
            <Navigation />
            <div className={style.main}>
                <label className={style.middle}>
                    <input type="file" onChange={handleImageUpload} accept="image/png, image/gif, image/jpeg" />
                    <img src="image 2.png" alt="Здесь изображение" />
                </label>
                {selectedImage != null ? <div className={style.actual}>
                    <p>Выбранное изображение:</p>
                    <img src={selectedImage} className={style.result} alt="Ошибка загрузки, повторите попытку" />
                </div>
                    : ""}
                <div className={style.fncts}>
                    <div className={style.ai}>
                        <p className={background ? style.active : null} onClick={handleBackgroundClick}>Подобрать фон</p>
                        <p className={assessment ? style.active : null} onClick={handleAssessmentClick}>Оценка инфографики</p>
                        <p className={deleteBack ? style.active : null} onClick={handleBackgroundDeleteClick}>Удалить фон</p>
                    </div>
                    <div className={style.examples}>
                        <p>Примеры изображений:</p>
                        <div className={style.imgs}>
                            {deleteBack ? <>
                                <img src="image 5.png" alt="фото" onClick={() => handleImageUploadEx('image 5.png')} />
                                <img src="image 6.png" alt="фото" onClick={() => handleImageUploadEx('image 6.png')} />
                                <img src="image 7.png" alt="фото" onClick={() => handleImageUploadEx('image 7.png')} />
                                <img src="image 8.png" alt="фото" onClick={() => handleImageUploadEx('image 8.png')} />
                            </>
                                : ""}
                            {assessment ? <>
                                <img src="info1.jpg" alt="фото" onClick={() => handleImageUploadEx('info1.jpg')} />
                                <img src="info2.jpg" alt="фото" onClick={() => handleImageUploadEx('info2.jpg')} />
                                <img src="info3.jpg" alt="фото" onClick={() => handleImageUploadEx('info3.jpg')} />
                                <img src="info4.jpg" alt="фото" onClick={() => handleImageUploadEx('info4.jpg')} />
                            </>
                                : ""}
                            {background ? <>
                                <img src="bag.jpg" alt="фото" onClick={() => handleImageUploadEx('bag.jpg')} />
                                <img src="tv.jpg" alt="фото" onClick={() => handleImageUploadEx('tv.jpg')} />
                                <img src="phone.jpg" alt="фото" onClick={() => handleImageUploadEx('phone.jpg')} />
                                <img src="zont.jpg" alt="фото" onClick={() => handleImageUploadEx('zont.jpg')} />
                            </>
                                : ""}
                        </div>
                        <button className={style.generate}>Сгенерировать</button>
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                {/* Тут будет результат генерации */}
            </div>
        </div >
    )
}

export default ProcessScreen