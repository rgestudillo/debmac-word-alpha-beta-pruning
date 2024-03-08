import React from 'react';

const Modal = ({ winner, currentPlayer, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Winner!</h2>
        <p>Player {currentPlayer} wins with the word: {winner}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
