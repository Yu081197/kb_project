import React from "react";

function AccountCreatePerpose() {
  function handleClickNext(e) {
    window.location.href = "/account_create_PW";
  }
  function handleClickBack(e) {
    window.location.href = "/account_create_inform";
  }
  return (
    <div className="createContainer">
      <div className="circleContainer">
        <div className="circle">약관동의</div>
        <div className="circle">정보입력</div>
        <div className="circleSequence">거래목적</div>
        <div className="circle">비밀번호</div>
        <div className="circle">본인인증</div>
        <div className="circle">개설완료</div>
      </div>

      <div className="inputContainer">
        <div className="head">
          <div>안전한 금융거래를 위해 확인해주세요</div>
        </div>
        <div className="input">
          <div>거래목적</div>
          <select form="jobForm">
            <option value="">무직</option>
            <option value="">학생</option>
            <option value="">자영업자</option>
            <option value="">회사원</option>
          </select>
        </div>
        <div className="input">
          <div>자금출처</div>
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

export default AccountCreatePerpose;
