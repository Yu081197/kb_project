import React, { useState } from "react";

import "./AccountCreateInformModal.scss";

const AccountCreateInformModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="accountCreateModalContainer">
      <div className="accountCreateModalBox">
        <div className="accountCreateModal">
          모든 항목을 <br />
          올바르게 입력해주세요
        </div>
        <div className="accountCreateModalButton">
          <button onClick={closeModal}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreateInformModal;
