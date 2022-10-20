import React, { useState } from "react";

import "./LoginModal.scss";

const loginModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="accountCreateModalContainer">
      <div className="accountCreateModalBox">
        <div className="accountCreateModal">Login</div>
        계좌번호<input type = "text" id = "accountNumber"></input>
        비밀번호<input type = "password" id = "password"></input>
        <div className="accountCreateModalButton">
          <button onClick={closeModal}>Login</button> 
          {/*로그인 url: http://localhost:8080/login?accountNumber=계좌번호&password=패스워드
             로그아웃 url: http://localhost:8080/logout
          */}
        </div>
      </div>
    </div>
  );
};

export default loginModal;
