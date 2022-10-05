import React from "react";
import "./AccountCreate.scss";

function AccountCreate() {
  return (
    <div className="createContainer">
      <div className="circleContainer">
        <div className="circle">약관동의</div>
        <div className="circle">정보입력</div>
        <div className="circle">거래목적</div>
        <div className="circle">비밀번호</div>
        <div className="circle">본인인증</div>
        <div className="circle">개설완료</div>
      </div>

      <div className="inputContainer">
        <div>약관동의</div>
        <div>전체동의하기</div>
        <div>약관동의</div>
        <div>약관동의</div>
        <div>약관동의</div>
        <div>약관동의</div>
      </div>
      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreate;
