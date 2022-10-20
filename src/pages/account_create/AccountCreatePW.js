import React, { useState } from "react";
import axios from "axios";

function AccountCreatePW() {
  const [passwordState, setPasswordState] = useState("");
  const [validPasswordState, setValidPasswordState] = useState();
  const [validPasswordError, setValidPasswordError] = useState(false);

  const onChangePassword = (e) => {
    setPasswordState(e.target.value);
  };

  const onChangeValidPassword = (e) => {
    if (!validPasswordState(e.target.value) || passwordState(e.target.value))
      setValidPasswordError(true);
    else setValidPasswordError(false);
    setValidPasswordState(e.target.value);
  };

  const saveAccountData = () => {
    window.localStorage.setItem("password", JSON.stringify(passwordState));
  };

  function handleClickNext(e) {
    window.location.href = "/account_create_self";
  }

  function saveAndNext() {
    saveAccountData();
    handleClickNext();
  }

  function handleClickBack(e) {
    window.location.href = "/account_create_purpose";
  }
  return (
    <div className="createContainer">
      <div className="circleContainer">
        <div className="circle">약관동의</div>
        <div className="circle">정보입력</div>
        <div className="circle">거래목적</div>
        <div className="circleSequence">비밀번호</div>
        <div className="circle">본인인증</div>
        <div className="circle">개설완료</div>
      </div>

      <div className="inputContainer">
        <div className="head">
          <div>비밀번호</div>
        </div>
        <div className="input">
          <div>계좌비밀번호</div>
          <input
            type="password"
            maxlength="4"
            name="Password"
            id="password"
            value={passwordState}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력하세요."
          />
        </div>
        <div className="input">
          <div>계좌비밀번호 확인</div>
          <input
            type="password"
            maxlength="4"
            name="Password"
            id="pw"
            value={validPasswordState}
            placeholder="다시 한 번 입력하세요."
            onChange={onChangeValidPassword}
          />{" "}
          {validPasswordError && (
            <div style={{ color: "red", fontSize: "14px" }}>
              비밀번호를 확인해주세요.
            </div>
          )}
        </div>

        <div className="btn">
          <div className="buttonContainer">
            <div className="button" onClick={handleClickBack}>
              <button type="button">뒤로</button>
            </div>
          </div>

          <div className="buttonContainer">
            <div className="button" onClick={saveAndNext}>
              <button type="button">확인</button>
            </div>
          </div>
        </div>
      </div>
      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreatePW;
