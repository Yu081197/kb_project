import React, { useState } from "react";

import "./LoginModal.scss";

const loginModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="accountCreateModalContainer">
      <div className="accountCreateModalBox">
        <div className="modal">로그인 하시겠습니까?</div>
        <div className="modalButton">
          <button onClick={closeModal}>확인</button>
          <button onClick={closeModal}>취소</button>
          {/*로그인 url: http://localhost:8080/login?accountNumber=계좌번호&password=패스워드
             로그아웃 url: http://localhost:8080/logout
          */}
        </div>
      </div>
    </div>
  );
};

export default loginModal;
