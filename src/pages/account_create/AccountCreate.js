import React from "react";
import "./AccountCreate.scss";

function AccountCreate() {
  function handleClick(e) {
    window.location.href = "/account_create_inform";
  }
  return (
    <div className="createContainer">
      <div className="circleContainer">
        <div className="circleSequence">약관동의</div>
        <div className="circle">정보입력</div>
        <div className="circle">거래목적</div>
        <div className="circle">비밀번호</div>
        <div className="circle">본인인증</div>
        <div className="circle">개설완료</div>
      </div>

      <div className="agreeContainer">
        <div className="agree">
          <div>약관동의</div>
        </div>
        <div className="allAgree">
          <div>전체동의하기</div>
        </div>
        <div className="neAgree">
          <div>KB 국민은행 계좌개설 필수 동의</div>
        </div>
        <div className="agreeList">
          <div>· KB 국민은행 통장 이용약관</div>
          <div>· KB 국민은행 통장 상품설명서</div>
          <div>· KB 국민은행 통장 특약</div>
          <div>· 예금거래기본약관</div>
          <div>· 입출금이자유로운예금약관</div>
          <div>· 개인(신용)정보 수집·이용·제공 동의서(KB국민은행 출금이체)</div>
        </div>

        <div className="buttonContainer">
          <div className="button" onClick={handleClick}>
            <button type="button">확인</button>
          </div>
        </div>
      </div>
      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreate;
