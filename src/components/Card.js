import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Card({ element, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    onCardClick(element);
  }

  function handleLikeClick() {
    onCardLike(element);
  }

  function handleCardDelete() {
    onCardDelete(element);
  }

  const isOwn = element.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? "element__trash_type_active" : ""
  }`;
  const isLiked = element.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_type_active" : ""
  }`;

  return (
    <>
      <button
        className={cardDeleteButtonClassName}
        onClick={handleCardDelete}
        type="button"
        aria-label="Удалить"
      />
      <img
        className="element__image"
        src={element.link}
        onClick={handleClick}
        alt={element.link}
      />
      <div className="element__information">
        <p className="element__title">{element.name}</p>
        <div className="like">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
            aria-label="'лайк'"
          />
          <p className="element__like-counter">
            {element.likes.length > 0 ? `${element.likes.length}` : 0}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
