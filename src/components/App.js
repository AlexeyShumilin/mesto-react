import React  from 'react';

import '../index.css';
import Main   from "./Main";
import Footer from "./Footer";
import Header from "./Header";


function App() {
    return (
        <div className="page">
            <Header/>
            <Main/>
            <Footer/>


            <section className="popup popup-user">
                <form className="popup__container" name="user" noValidate>
                    <button className="popup__close" type="button"/>
                    <h3 className="popup__title">Редактировать профиль</h3>
                    <input className="popup__item popup__item_name " id="author-input" maxLength={40} minLength={2}
                           name="name" pattern="[A-Za-zА-ЯЁа-яё -]{1,}" placeholder="Имя" required type="text"/>
                    <span className="popup__span-error popup__span-error_active" id="author-input-error"/>
                    <input className="popup__item popup__item_job " id="about-input" maxLength={400} minLength={2}
                           name="about" placeholder="О себе" required type="text"/>
                    <span className="popup__span-error popup__span-error_active" id="about-input-error"/>
                    <button className="popup__save" type="submit">Сохранить</button>
                </form>
            </section>
            <section className="popup popup-image">
                <form className="popup__container popup-add__place" name="new">
                    <button className="popup__close popup__image-close" type="button"/>
                    <h3 className="popup__title">Новое место</h3>
                    <input className="popup__item popup__input_type_name " id="name-input" maxLength={30} minLength={2}
                           name="name" placeholder="Название" required type="text"/>
                    <span className="popup__span-error popup__span-error_active" id="name-input-error"/>
                    <input className="popup__item popup__input_type_link-url " id="link-input" name="link"
                           placeholder="Ссылка на картинку" required type="url"/>
                    <span className="popup__span-error popup__span-error_active" id="link-input-error"/>
                    <button className="popup-add__create popup__save " type="submit">Создать</button>
                </form>
            </section>
            <section className="popup img-popup">
                <form className="img-popup__content">
                    <button className="popup__close button img-popup__close" type="button"/>
                    <img alt="" className="img-popup__place" src="#"/>
                    <p className="img-popup__caption"/>
                </form>
            </section>
            <section className="popup avatar-popup">
                <form className="popup__container" name="popup-avatar" noValidate>
                    <h2 className="popup__title">Обновить аватар</h2>
                    <input className="popup__item popup__Item_type_avatar" id="avatar-input" name="avatar"
                           placeholder="Ссылка на новый аватар" required type="url"/>
                    <span className="popup__span-error popup__span-error_active" id="avatar-input-error"/>
                    <button className="popup__save popup__avatar" disabled type="submit">Сохранить</button>
                    <button className="popup__close" type="button"/>
                </form>
            </section>
            <section className="popup submit-popup">
                <form className="popup__container" name="popup-submit" noValidate>
                    <h2 className="popup__title">Вы уверены?</h2>
                    <button className="popup__save" type="submit">Да</button>
                    <button className="popup__close" type="button"/>
                </form>
            </section>
            <template className="template" id="place-card"/>
        </div>
    );


}

export default App;
