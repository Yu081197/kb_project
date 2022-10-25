import React, { useState, useEffect, useRef } from "react";
import "./AccountCreateInform.scss";
import AccountCreateInformModal from "./AccountCreateModal/AccountCreateInformModal";
import ReactChatBot, { speak } from "../../components/chatbot/ReactChatBot";

function AccountCreateInform() {
  const recogInputNext = 3; // ReactChatBot 다음페이지 이동 옵션
  const recogInput = 4; // ReactChatBot 데이터입력 옵션

  const nameRef = useRef();
  const registerNumberRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const jobRef = useRef();

  useEffect(() => {
    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      speak("정보입력 화면입니다.");

      setTimeout(function () {
        speak("이름을 말씀해주세요.", true, recogInput, nameRef);
      }, 3000);
    }
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const [emailState, setEmailState] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [nameState, setNameState] = useState("");
  const [nameError, setNameError] = useState(false);

  const [registerNumberState, setRegisterNumberState] = useState("");
  const [registerNumberError, setRegisterNumberError] = useState(false);

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
    console.log("local에 저장 성공!");
    window.localStorage.setItem("name", JSON.stringify(nameState));
    window.localStorage.setItem(
      "registerNumber",
      JSON.stringify(registerNumberState)
    );
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
    else {
      setEmailError(true);
    }
    setEmailState(e.target.value);

    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak("주소를 말씀해주세요.", true, recogInput, addressRef);
      }, 1000);
    }
  };

  const onChangeName = (e) => {
    const nameRegex = /^[가-힣]{1,10}|[a-zA-Z]{1,10}\s[a-zA-Z]{1,10}$/;
    if (!e.target.value || nameRegex.test(e.target.value)) setNameError(false);
    else {
      setNameError(true);
    }
    setNameState(e.target.value);

    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak("주민번호를 말씀해주세요.", true, recogInput, registerNumberRef);
      }, 1000);
    }
  };

  const onChangeRegisterNumber = (e) => {
    let formatNumber = e.target.value.replace(/[^0-9]/g, '');

    const registerNumberRegex =
      /^\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}$/;
    if (!formatNumber || registerNumberRegex.test(formatNumber))
      setRegisterNumberError(false);
    else  
      setRegisterNumberError(true);

    setRegisterNumberState(formatNumber);

    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak("휴대전화번호를 말씀해주세요.", true, recogInput, phoneNumberRef);
      }, 1000);
    }
  };

  useEffect(() => {
    if (registerNumberState.length === 13) {
      setRegisterNumberState(
        registerNumberState
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{0,6})(\d{0,7})$/g, "$1-$2")
          .replace(/-{1,2}$/g, "")
      );
    }
  }, [registerNumberState]);

  const onChangePhoneNumber = (e) => {
    let formatNumber = e.target.value.replace(/[^0-9]/g, '');

    const phoneNumberRegex = /^(\d{2,3})(\d{3,4})(\d{4})$/;
    if (!formatNumber || phoneNumberRegex.test(formatNumber))
      setPhoneNumberError(false);
    else {
      setPhoneNumberError(true);
    }
    setPhoneNumberState(formatNumber);
    
    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak("이메일을 말씀해주세요.", true, recogInput, emailRef);
      }, 1000);
    }
  };

  useEffect(() => {
    if (phoneNumberState.length === 11) {
      setPhoneNumberState(
        phoneNumberState.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phoneNumberState]);

  const onChangeAddress = (e) => {
    setAddressState(e.target.value);

    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak("직업을 말씀해주세요.", true, recogInput, jobRef);
      }, 1000);
    }
  };

  const onChangeJob = (e) => {
    setJobState(e.target.value);
  };

  function checkedAllFill() {
    if (
      // 모두 빈값일 때 valid
      // emailState !== "" &&
      // nameState !== "" &&
      // phoneNumberState !== "" &&
      // registerNumberState !== "" &&
      emailError === false &&
      nameError === false &&
      phoneNumberError === false &&
      registerNumberError === false
    ) {
      console.log("성공");
      saveAccountData();
      handleClickNext();
    } else {
      showModal();
    }
  }

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
            ref={nameRef}
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
          <div>주민등록번호</div>
          <input
            ref={registerNumberRef}
            type="text"
            name="register"
            id="register"
            maxlength="14"
            value={registerNumberState}
            placeholder="주민번호를 - 없이 입력해주세요."
            onChange={onChangeRegisterNumber}
          />
          {registerNumberError && (
            <div style={{ color: "red", fontSize: "14px" }}>
              잘못된 양식입니다.
            </div>
          )}
        </div>
        <div className="input">
          <div>휴대폰 번호</div>
          <input
            ref={phoneNumberRef}
            name="phone"
            id="phonenumber"
            maxlength="11"
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
            ref={emailRef}
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
            ref={addressRef}
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
            ref={jobRef}
            form="jobForm"
            value={jobState}
            // onSubmit={handleSubmit}
            onChange={(e) => {
              setJobState(e.target.value);
              let useVoiceService = localStorage.getItem("useVoiceService");
              if (useVoiceService == "true") {
                setTimeout(function () {
                  speak("다음 절차로 이동하시겠습니까?", true, recogInputNext, checkedAllFill);
                }, 1000);
              }
            }}
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
          </div>

          <div className="buttonContainer">
            <div className="button">
              <button onClick={checkedAllFill}>확인</button>
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
