import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import DeletePopup from "./DeletePopup";
import EditAvatarPopup from "./EditAvatarPopup";

import { api } from "../utils/api";

import { CurrentUserContext } from "../context/CurrentUserContext";

function App() {
  //стейты попапов
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [cardDelete, setCardDelete] = useState([]);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    api
      ._getResponseData()
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeClose);
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  });

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

  const handleDeleteCardClick = () => {
    setIsDeletePopupOpen(true);
  };

  const handleUpdateUser = (data) => {
    setIsLoading(true);
    api
      .editProfileInfo(data)
      .then((res) => {
        setCurrentUser(res);
        setIsLoading(false);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  function handleEscapeClose(e) {
    if (e.key === "Escape") closeAllPopups();
  }

  function handleOverlayClose(e) {
    if (e.target.classList.contains("popup")) closeAllPopups();
  }

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setIsDeletePopupOpen(false);
  };

  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  };

  function handleUpdateAvatar(data) {
    setIsLoading(true);
    api
      .editAvatar(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
    closeAllPopups();
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (!isLiked) {
      api
        .setLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
          setCards(newCards);
        })
        .catch((err) => console.log(err));
    } else {
      api
        .setLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
          setCards(newCards);
        })
        .catch((err) => console.log(err));
    }
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
          onCardLike={handleCardLike}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />
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
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
        <DeletePopup
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDeleteConfirm}
          isLoading={isLoading}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
