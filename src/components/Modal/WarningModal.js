import React, { useState } from "react";

import "./WarningModal.scss";

const WarningModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="transferModalContainer">
      <div className="transferModalBox">
        <div className="transferModal">이체하시겠습니까?</div>
        <div className="transferModalButton">
          <button onClick={closeModal}>확인</button>
          <button onClick={closeModal}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
