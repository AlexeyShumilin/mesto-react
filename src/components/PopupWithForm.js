import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${
        props.isOpen ? "popup_is-opened" : ""
      }`}
    >
      <form className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button className="popup__save" type="submit">
          {props.textOnButton}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
