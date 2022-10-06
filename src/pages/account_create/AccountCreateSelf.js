import React from "react";
import { Image } from "react-bootstrap";

function AccountCreateSelf() {
  function handleClickNext(e) {
    window.location.href = "/account_create_complete";
  }
  function handleClickBack(e) {
    window.location.href = "/account_create_PW";
  }
  return (
    <div className="createContainer">
      <div className="circleContainer">
        <div className="circle">약관동의</div>
        <div className="circle">정보입력</div>
        <div className="circle">거래목적</div>
        <div className="circle">비밀번호</div>
        <div className="circleSequence">본인인증</div>
        <div className="circle">개설완료</div>
      </div>

      <div className="inputContainer">
        <div className="head">
          <div>신분증을 준비해주세요</div>
        </div>

        <div>
          <Image className="selfimg" src="image/AccountCreateSelf.png" />
        </div>

        <div className="btn">
          <div className="buttonContainer">
            <div className="button">
              <button type="button">촬영</button>
            </div>
          </div>
        </div>

        <div className="btn">
          <div className="buttonContainer">
            <div className="button" onClick={handleClickBack}>
              <button type="button">뒤로</button>
            </div>
          </div>

          <div className="buttonContainer">
            <div className="button" onClick={handleClickNext}>
              <button type="button">확인</button>
            </div>
          </div>
        </div>
      </div>
      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreateSelf;
