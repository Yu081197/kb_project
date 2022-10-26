import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { speak } from "../../components/chatbot/ReactChatBot";

function AccountCreatePurpose() {
  const recogInputNext = 3; // ReactChatBot 다음페이지 이동 옵션
  const recogInput = 4; // ReactChatBot 데이터입력 옵션

  const [purposeState, setPurposeState] = useState("");
  const [sofState, setSofState] = useState("");
  
  const purposeRef = useRef("");
  const sofRef = useRef("");

  useEffect(() => {
    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak("안전한 금융거래를 위해 거래목적을 말씀해주세요.", true, recogInput, purposeRef);
      }, 1000);
    }
  }, []);

  // const purposeOptions = [
  //   {
  //     label: "선택해주세요",
  //     value: "",
  //   },
  //   {
  //     label: "월급통장",
  //     value: "월급통장",
  //   },
  //   {
  //     label: "사업",
  //     value: "사업",
  //   },
  //   {
  //     label: "생활비",
  //     value: "생활비",
  //   },
  //   {
  //     label: "대출",
  //     value: "대출",
  //   },
  //   {
  //     label: "저축",
  //     value: "저축",
  //   },
  //   {
  //     label: "연금",
  //     value: "연금",
  //   },
  // ];

  // const sofOptions = [
  //   {
  //     label: "선택해주세요",
  //     value: "",
  //   },
  //   {
  //     label: "월급",
  //     value: "월급",
  //   },
  //   {
  //     label: "사업 소득",
  //     value: "사업 소득",
  //   },
  //   {
  //     label: "생활비",
  //     value: "생활비",
  //   },
  //   {
  //     label: "용돈",
  //     value: "용돈",
  //   },
  //   {
  //     label: "금융 소득",
  //     value: "금융 소득",
  //   },
  //   {
  //     label: "퇴직금",
  //     value: "퇴직금",
  //   },
  //   {
  //     label: "임대 소득",
  //     value: "임대 소득",
  //   },
  //   {
  //     label: "상속 · 증여",
  //     value: "상속 · 증여",
  //   },
  // ];

  const onChangePurpose = (e) => {
    setPurposeState(e.target.value);

    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak("자금출처를 말씀해주세요.", true, recogInput, sofRef);
      }, 1000);
    }
  };

  const onChangeSof = (e) => {
    setSofState(e.target.value);

    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak("다음 절차로 이동하시겠습니까?", true, recogInputNext, saveAndNext);
      }, 1000);
    }
  };

  function saveAccountData(e) {
    localStorage.setItem("purpose", purposeState);
    localStorage.setItem("sof", sofState);
  }
  function handleClickNext(e) {
    window.location.href = `/account_create_PW`;
  }

  function saveAndNext() {
    saveAccountData();
    handleClickNext();
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
          {/* <select
            id="purpose"
            form="purposeForm"
            value={purposeState}
            onChange={(e) => setPurposeState(e.target.value)}
          >
            {purposeOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> */}
          <input
            ref={purposeRef}
            type="text"
            name="purpose"
            value={purposeState}
            id="purpose"
            placeholder="거래목적을 입력해주세요."
            onChange={onChangePurpose}
          />
        </div>
        <div className="input">
          <div>자금출처</div>
          {/* <select
            id="sof"
            form="sofForm"
            value={sofState}
            onChange={(e) => setSofState(e.target.value)}
          >
            {sofOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> */}
          <input
            ref={sofRef}
            type="text"
            name="sof"
            value={sofState}
            id="sof"
            placeholder="자금출처를 입력해주세요."
            onChange={onChangeSof}
          />
        </div>

        <div className="btn">
          <div className="buttonContainer">
            <div className="button" onClick={handleClickBack}>
              <button type="button">뒤로</button>
            </div>
          </div>

          <div className="buttonContainer">
            <div className="button">
              <button type="button" onClick={saveAndNext}>
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreatePurpose;
