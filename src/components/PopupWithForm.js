import React from "react";

function PopupWithForm({
  name,
  title,
  onClose,
  submitTitle,
  children,
  isOpen,
  isLoading,
}) {
  return (
    <div className={`popup popup-${name} ${isOpen ? "popup_is-opened" : ""}`}>
      <form className="popup__container">
        <button type="button" className="popup__close" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
        {children}
        <button className="popup__save" type="submit">
          {isLoading ? `Сохраняю...` : `${submitTitle}`}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
