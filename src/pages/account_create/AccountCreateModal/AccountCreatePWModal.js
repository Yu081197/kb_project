import React, { useState } from "react";

import "./AccountCreatePWModal.scss";

const AccountCreatePWModal = ({ setModalOpen }) => {
  const closeModal = () => {
    console.log("클릭");
    setModalOpen(false);
  };
  return (
    <div className="accountCreateModalContainer">
      <div className="accountCreateModalBox">
        <div className="accountCreateModal">비밀번호를 확인해주세요.</div>
        <div className="accountCreateModalButton">
          <button onClick={closeModal}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreatePWModal;
