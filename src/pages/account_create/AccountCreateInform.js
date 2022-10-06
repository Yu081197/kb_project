import React from "react";
import "./AccountCreateInform.scss";

function AccountCreateInform() {
  function handleClickNext(e) {
    window.location.href = "/account_create_perpose";
  }
  function handleClickBack(e) {
    window.location.href = "/account_create";
  }
  return (
    <div className="createContainer">
      <div className="circleContainer">
        <div className="circle">약관동의</div>
        <div className="circleSequence">정보입력</div>
        <div className="circle">거래목적</div>
        <div className="circle">비밀번호</div>
        <div className="circle">본인인증</div>
        <div className="circle">개설완료</div>
      </div>

      <div className="inputContainer">
        <div className="head">
          <div>이름</div>
        </div>
        <div className="input">
          <div>휴대폰 번호</div>
          <input type="tel"></input>
        </div>
        <div className="input">
          <div>이메일</div>
          <input type="email"></input>
        </div>
        <div className="input">
          <div>주소</div>
          <input type="text"></input>
        </div>
        <div className="input">
          <div>직업</div>
          <select form="jobForm">
            <option value="">무직</option>
            <option value="">학생</option>
            <option value="">자영업자</option>
            <option value="">회사원</option>
          </select>
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

export default AccountCreateInform;
