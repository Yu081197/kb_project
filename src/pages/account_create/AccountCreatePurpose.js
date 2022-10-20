import React, { useState } from "react";
import axios from "axios";

function AccountCreatePurpose() {
  const [purposeState, setPurposeState] = useState("");
  const [sofState, setsofState] = useState("");

  const purposeOptions = [
    {
      label: "선택해주세요",
      value: "",
    },
    {
      label: "월급통장",
      value: "월급통장",
    },
    {
      label: "사업",
      value: "사업",
    },
    {
      label: "생활비",
      value: "생활비",
    },
    {
      label: "대출",
      value: "대출",
    },
    {
      label: "저축",
      value: "저축",
    },
    {
      label: "연금",
      value: "연금",
    },
  ];

  const sofOptions = [
    {
      label: "선택해주세요",
      value: "",
    },
    {
      label: "월급",
      value: "월급",
    },
    {
      label: "사업 소득",
      value: "사업 소득",
    },
    {
      label: "생활비",
      value: "생활비",
    },
    {
      label: "용돈",
      value: "용돈",
    },
    {
      label: "금융 소득",
      value: "금융 소득",
    },
    {
      label: "퇴직금",
      value: "퇴직금",
    },
    {
      label: "임대 소득",
      value: "임대 소득",
    },
    {
      label: "상속 · 증여",
      value: "상속 · 증여",
    },
  ];

  function saveAccountData(e) {
    window.localStorage.setItem("purpose", JSON.stringify(purposeState));
    window.localStorage.setItem("sof", JSON.stringify(sofState));
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
          <select
            id="purpose"
            form="purposeForm"
            value={purposeState}
            onChange={(e) => setPurposeState(e.target.value)}
          >
            {purposeOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="input">
          <div>자금출처</div>
          <select
            id="sof"
            form="sofForm"
            value={sofState}
            onChange={(e) => setsofState(e.target.value)}
          >
            {sofOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
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
