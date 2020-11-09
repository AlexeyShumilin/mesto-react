import React from 'react';
import {api} from '../utils/Api';
import Card from './Card.js';
import avatar from './../images/avatar.jpg';
import avatarEdit from './../images/avatar-edit.svg';


function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState(avatar);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
            api.getProfileInfo(),
            api.getInitialCards()
        ])
            .then(([profile, places]) => {
                setUserAvatar(profile.avatar);
                setUserName(profile.name);
                setUserDescription(profile.about);
                setCards(places);
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);


    return (
        <main>
            <div className="profile page__profile">
                <img className="profile__avatar" src={userAvatar} alt="аватар"/>
                <img
                    className="profile__edit"
                    src={avatarEdit}
                    alt="avatarEdit"
                    onClick={props.onEditAvatar}/>
                <div className="user-info">
                    <div className="user-info__data">
                        <div className="user-info__name-data">
                            <h1 className="user-info__name">{userName}</h1>
                            <button className=" button user-info__edit-button" type="button"
                                    aria-label="Редактировать профиль" onClick={props.onEditProfile}/>
                        </div>
                        <p className="user-info__about">{userDescription}</p>
                    </div>
                    <button className="button user-info__add-button" type="button" aria-label="Добавить элемент"
                            onClick={props.onAddPlace}/>
                </div>
            </div>

            <section className="elements">
                {cards.map((card, index) => (
                    <div className="element" key={card._id}>
                        <Card element={card} onImageClick={props.onCardClick}/>
                    </div>
                ))}
            </section>
        </main>
    )
}


export default Main;