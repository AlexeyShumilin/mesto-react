import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

import { CurrentUserContext } from "../context/CurrentUserContext";

function App() {
  //стейты попапов
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [currentUser, setCurrentUser] = React.useState({});
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  //setstate block

  const handleEditProfileClick = function () {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = function () {
    setAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = function () {
    setEditAvatarPopupOpen(true);
  };

  const closeAllPopups = function () {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setConfirmPopupOpen(false);
    setSelectedCard(null);
  };

  const handleCardClick = function (card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  };

  function handleCardDeleteConfirm() {
    const isOwn = cardDelete.owner._id === currentUser._id;
    setIsLoading(true);
    api
      .deleteCard(cardDelete._id, !isOwn)
      .then((newCard) => {
        // Обновляем стейт
        setCards(
          cards.filter((c) => (c._id === cardDelete._id ? !newCard : c))
        );
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    setCardDelete(card);
    handleDeleteCardClick();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          title={"Новое место"}
          name={"add-card"}
          children={
            <>
              <input
                id="name-input"
                className="popup__item"
                type="text"
                required
                placeholder="Название"
                name="name"
                minLength={"1"}
                maxLength={"30"}
              />
              <input
                id="link-input"
                className="popup__item"
                type="url"
                required
                placeholder="Ссылка на картинку"
                name="link"
              />
            </>
          }
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          textOnButton={"Создать"}
        />
        <PopupWithForm
          title={"Обновить аватар"}
          name={"update-avatar"}
          children={
            <input
              id="avatar-input"
              className="popup__item"
              type="url"
              placeholder="ссылка на аватар"
              name="avatar"
            />
          }
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          textOnButton={"Сохранить"}
        />
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          title={"Вы уверены"}
          name={"confirm"}
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          textOnButton={"Да"}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
