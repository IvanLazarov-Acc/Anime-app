import React from "react";
import "../styles/Item.css";

const ItemModal = (props) => {
  const { isOpen } = props;

  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <h2>The modal</h2>
    </div>
  );
};

export default ItemModal;
