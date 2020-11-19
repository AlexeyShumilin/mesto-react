import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleAddPlace(e) {
    e.preventDefault();
    onAddPlace({ name, link });
    setName("");
    setLink("");
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="new-place"
      onSubmit={handleAddPlace}
      isOpen={isOpen}
      onClose={onClose}
      submitTitle={`${isLoading ? "Сохраняю" : "Добавить"}`}
    >
      <input
        onChange={handleChangeName}
        value={name || ""}
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
        onChange={handleChangeLink}
        value={link || ""}
        placeholder="Ссылка на картинку"
        name="link"
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
