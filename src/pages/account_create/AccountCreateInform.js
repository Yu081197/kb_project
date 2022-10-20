import axios from "axios";
import React, { useState, useEffect } from "react";
import "./AccountCreateInform.scss";
import AccountCreateInformModal from "./AccountCreateModal/AccountCreateInformModal";

function AccountCreateInform() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const [isAllFill, setIsAllFill] = useState(false);

  const [emailState, setEmailState] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [nameState, setNameState] = useState("");
  const [nameError, setNameError] = useState(false);

  const [phoneNumberState, setPhoneNumberState] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [addressState, setAddressState] = useState("");

  const [jobState, setJobState] = useState("");

  const jobOptions = [
    {
      label: "무직",
      value: "무직",
    },
    {
      label: "자영업자",
      value: "자영업자",
    },
    {
      label: "회사원",
      value: "회사원",
    },
    {
      label: "학생",
      value: "학생",
    },
  ];

  const saveAccountData = () => {
    window.localStorage.setItem("name", JSON.stringify(nameState));
    window.localStorage.setItem("email", JSON.stringify(emailState));
    window.localStorage.setItem(
      "phoneNumber",
      JSON.stringify(phoneNumberState)
    );
    window.localStorage.setItem("address", JSON.stringify(addressState));
    window.localStorage.setItem("job", JSON.stringify(jobState));
  };

  const onChangeEmail = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!e.target.value || emailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);
    setEmailState(e.target.value);
  };
  const onChangeName = (e) => {
    const nameRegex = /^[가-힣]{1,10}|[a-zA-Z]{1,10}\s[a-zA-Z]{1,10}$/;
    if (!e.target.value || nameRegex.test(e.target.value)) setNameError(false);
    else setNameError(true);
    setNameState(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    const phoneNumberRegex = /^(\d{2,3})(\d{3,4})(\d{4})$/;
    if (!e.target.value || phoneNumberRegex.test(e.target.value))
      setPhoneNumberError(false);
    else setPhoneNumberError(true);
    setPhoneNumberState(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddressState(e.target.value);
  };

  const onChangeJob = (e) => {
    setJobState(e.target.value);
  };

  useEffect(() => {
    if (
      emailError === true &&
      nameError === true &&
      phoneNumberError === true
    ) {
      setIsAllFill(true);
    } else {
      setIsAllFill(false);
    }
  }, [emailError, nameError, phoneNumberError]);

  function handleClickNext(e) {
    window.location.href = "/account_create_purpose";
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
          <div>정보입력</div>
        </div>
        <div className="input">
          <div>이름</div>
          <input
            type="text"
            name="name"
            id="name"
            value={nameState}
            placeholder="이름을 입력해주세요."
            onChange={onChangeName}
          />
          {nameError && (
            <div style={{ color: "red", fontSize: "14px" }}>
              잘못된 양식입니다.
            </div>
          )}
        </div>
        <div className="input">
          <div>휴대폰 번호</div>
          <input
            name="phone"
            id="phonenumber"
            maxlength="13"
            value={phoneNumberState}
            placeholder="휴대전화번호를 입력해 주세요."
            onChange={onChangePhoneNumber}
          />
          {phoneNumberError && (
            <div style={{ color: "red", fontSize: "14px" }}>
              잘못된 양식입니다.
            </div>
          )}
        </div>
        <div className="input">
          <div>이메일</div>
          <input
            type="text"
            name="email"
            id="email"
            value={emailState}
            placeholder="이메일을 입력해주세요."
            onChange={onChangeEmail}
          />
          {emailError && (
            <div style={{ color: "red", fontSize: "14px" }}>
              잘못된 양식입니다.
            </div>
          )}
        </div>
        <div className="input">
          <div>주소</div>
          <input
            type="text"
            name="address"
            value={addressState}
            id="address"
            placeholder="주소를 입력해주세요."
            onChange={onChangeAddress}
          />
        </div>
        <div className="input">
          <div>직업</div>
          <select
            form="jobForm"
            value={jobState}
            // onSubmit={handleSubmit}
            onChange={(e) => setJobState(e.target.value)}
          >
            {jobOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="btn">
          <div className="buttonContainer">
            <div className="button">
              <button type="button" onClick={handleClickBack}>
                뒤로
              </button>
            </div>
            <div className="button">
              <button type="button" onClick={saveAccountData}>
                버튼
              </button>
            </div>
          </div>

          <div className="buttonContainer">
            <div className="button">
              <button
                type="button"
                onClick={
                  isAllFill === true
                    ? { handleClickNext, saveAccountData } /*, handleSubmit */
                    : showModal
                }
              >
                확인
              </button>
              {modalOpen && (
                <AccountCreateInformModal setModalOpen={setModalOpen} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreateInform;
