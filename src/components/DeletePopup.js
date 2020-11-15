import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePopup({ isOpen, onClose, onSubmit, isLoading }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      title={"Вы уверены?"}
      name={"confirm"}
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      textOnButton={"Да"}
    />
  );
}

export default DeletePopup;
