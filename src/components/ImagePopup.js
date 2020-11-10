import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup img-popup ${props.isOpen && "img-popup_is-opened"}`}>
      <div className="img-popup__content">
        <button className="popup__close" onClick={props.onClose} />
        <img
          className="img-popup__place"
          src={props.card && props.card.link}
          alt={props.card && props.card.name}
        />
        <p className="img-popup__caption">{props.card && props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
