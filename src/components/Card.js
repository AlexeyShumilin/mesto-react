import React from "react";

function Card({ element, onImageClick }) {
  function handleClick() {
    onImageClick(element);
  }

  return (
    <>
      <button className="element__delete-icon" type="button" />
      <img
        className="element__image"
        src={element.link}
        alt={element.name}
        onClick={handleClick}
      />
      <div className="element__information">
        <p className="element__title">{element.name}</p>
        <div className="like">
          <button className="element__like" aria-label="Лайк" type="button" />
          <p className="element__like-number" />
        </div>
      </div>
    </>
  );
}

export default Card;
