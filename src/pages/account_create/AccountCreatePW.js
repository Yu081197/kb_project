import React, { useState } from "react";

function AccountCreatePW() {
  const [passwordState, setPasswordState] = useState();
  const [validPasswordState, setValidPasswordState] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [validPasswordError, setValidPasswordError] = useState(false);

  const onChangePassword = (e) => {
    const passwordRegex = /(?=.*[a-zA-Z]{2,20}).{8,20}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setPasswordError(false);
    else setPasswordError(true);
    setPasswordState(e.target.value);
  };

  const onChangeValidPassword = (e) => {
    if (!e.target.value || onChangePassword) setValidPasswordError(false);
    else setValidPasswordError(true);
    setValidPasswordState(e.target.value);
  };

  function handleClickNext(e) {
    window.location.href = "/account_create_self";
  }
  function handleClickBack(e) {
    window.location.href = "/account_create_perpose";
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
            id="pw"
            value={passwordState}
            placeholder="비밀번호를 입력하세요."
            onChange={onChangePassword}
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
          {validPasswordError && <div>잘못된 양식입니다.</div>}
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

export default AccountCreatePW;
