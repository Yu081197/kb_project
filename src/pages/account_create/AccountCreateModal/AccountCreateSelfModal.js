import React, { useState } from "react";

import "./AccountCreateSelfModal.scss";

const AccountCreateInformModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="accountCreateModalContainer">
      <div className="accountCreateModalBox">
        <div className="accountCreateModal">촬영에 성공했습니다!</div>
        <div className="accountCreateModalButton">
          <button onClick={closeModal}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreateInformModal;
