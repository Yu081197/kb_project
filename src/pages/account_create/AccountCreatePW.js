import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import AccountCreatePWModal from "./AccountCreateModal/AccountCreatePWModal";
import { speak } from "../../components/chatbot/ReactChatBot";

function AccountCreatePW() {
  const recogInputNext = 3; // ReactChatBot 다음페이지 이동 옵션
  const recogInput = 4; // ReactChatBot 데이터입력 옵션

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  function checkedAllFill() {
    if (passwordError === false && validPasswordError === false) {
      saveAccountData();
      handleClickNext();
    } else {
      showModal();
    }
  }

  const passwordRef = useRef();
  const validPasswordRef = useRef();
  const [passwordState, setPasswordState] = useState("");
  const [passwordError, setpasswordError] = useState(false);
  const [validPasswordState, setValidPasswordState] = useState();
  const [validPasswordError, setValidPasswordError] = useState(false);

  useEffect(() => {
    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak("계좌비밀번호를 말씀해주세요.", true, recogInput, passwordRef);
      }, 1000);
    }
  }, []);

  const onChangePassword = (e) => {
    let formatNumber = e.target.value.replace(/[^0-9]/g, "");
    const passwordRegex = /^[0-9]+$/;
    if (!formatNumber || passwordRegex.test(formatNumber))
      setpasswordError(false);
    else {
      setpasswordError(true);
    }
    setPasswordState(formatNumber);

    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak(
          "계좌비밀번호를 다시 한 번 말씀해주세요.",
          true,
          recogInput,
          validPasswordRef
        );
      }, 1000);
    }
  };

  const onChangeValidPassword = (e) => {
    let formatNumber = e.target.value.replace(/[^0-9]/g, "");
    if (formatNumber === passwordState) {
      setValidPasswordError(false);
    } else {
      setValidPasswordError(true);
    }
    setValidPasswordState(formatNumber);

    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak(
          "다음 절차로 이동하시겠습니까?",
          true,
          recogInputNext,
          checkedAllFill
        );
      }, 1000);
    }
  };

  const saveAccountData = () => {
    localStorage.setItem("password", passwordState);
  };

  function handleClickNext(e) {
    window.location.href = "/account_create_self";
  }

  function saveAndNext() {
    if (
      //모두 빈값일 때
      // passwordState !== "" &&
      // validPasswordState !== "" &&
      passwordError === false &&
      validPasswordError === false
    ) {
    }
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
            ref={passwordRef}
            type="password"
            maxlength="4"
            name="Password"
            id="password"
            value={passwordState}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력하세요."
          />
        </div>
        {passwordError && (
          <div style={{ color: "red", fontSize: "14px" }}>
            숫자만 입력할 수 있습니다.
          </div>
        )}
        <div className="input">
          <div>계좌비밀번호 확인</div>
          <input
            ref={validPasswordRef}
            type="password"
            maxlength="4"
            name="Password"
            id="pw"
            value={validPasswordState}
            placeholder="다시 한 번 입력하세요."
            onChange={onChangeValidPassword}
          />
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
              <button type="button" onClick={checkedAllFill}>
                확인
              </button>{" "}
              {modalOpen && (
                <AccountCreatePWModal setModalOpen={setModalOpen} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreatePW;
