import React, { useState, useEffect } from "react";
import axios from "axios";

import "./AlertModal.scss";

const AlertModal = ({ setAlertModalOpen, alertMessage }) => {
  const closeModal = () => {
    setAlertModalOpen(false);
  };

  return (
    <div className="modalContainer">
      <div className="modalBox">
        <div className="modalText">
          <span>{alertMessage}</span>
        </div>
        <div className="modalButton">
          <button onClick={closeModal}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
