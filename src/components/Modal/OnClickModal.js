import React, { useState } from "react";

import "./OnClickModal.scss";

const OnClickModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="OnClickModalContainer">
      <div className="OnClickModalBox">
        <div className="OnClickModal">로그인이 필요합니다.</div>
        <div className="OnClickModalButton">
          <button onClick={closeModal}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default OnClickModal;
