import React, { useEffect, useRef, useState } from "react";
import "./AccountCreateSelf.scss";
import Webcam from "react-webcam";
import AccountCreateSelfModal from "./AccountCreateModal/AccountCreateSelfModal";
import axios from "axios";

const WebcamComponent = () => <Webcam />;

function AccountCreateSelf() {
  const [modalOpen, setModalOpen] = useState(false);


  const userRegisterNumberState =
    window.localStorage.getItem("userRegisterNumber");
  const nameState = window.localStorage.getItem("name");
  const emailState = window.localStorage.getItem("email");
  const registerNumberState = window.localStorage.getItem("registerNumber");
  const phoneNumberState = window.localStorage.getItem("phoneNumber");
  const passwordState = window.localStorage.getItem("password");
  const addressState = window.localStorage.getItem("address");
  const jobState = window.localStorage.getItem("job");
  const purposeState = window.localStorage.getItem("purpose");
  const sofState = window.localStorage.getItem("sof");
  const imgState = window.localStorage.getItem("imgSrc");

  
  const showModal = () => {
    setModalOpen(true);
  };

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  });

  const [btnDisabled, setBtnDisabled] = useState(false);
  const showAndCapture = () => {
    console.log("===== showAndCapture =====");
    console.log(imgSrc);
    showModal();
    saveAccountData();
    capture();

    sendImgData();
  };

  const saveAccountData = () => {
    window.localStorage.setItem("imgSrc", JSON.stringify(imgSrc));
  };

  const sendAccountData = useEffect(() => {
    axios
      .post(
        "api/openaccount",
        {},
        {
          params: {
            userRegisterNumber: userRegisterNumberState,
            name: nameState,
            registerNumber: registerNumberState,
            phoneNumber: phoneNumberState,
            email: emailState,
            password: passwordState,
            address: addressState,
            job: jobState,
            purpose: purposeState,
            sof: sofState,
          },
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data.account_number);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }, []);

  function sendImgData() {
    console.log("===== showAndCapture =====");
    axios
      .post(
        "/dapi/certification",

        {},
        {
          params: {
            img : imgState,
          },
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data.account_number);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }

  function handleClickNext(e) {
    window.location.href = "/account_create_complete";
  }
  function handleClickBack(e) {
    window.location.href = "/account_create_PW";
  }
  return (
    <div className="createContainer">
      <div className="circleContainer">
        <div className="circle">약관동의</div>
        <div className="circle">정보입력</div>
        <div className="circle">거래목적</div>
        <div className="circle">비밀번호</div>
        <div className="circleSequence">본인인증</div>
        <div className="circle">개설완료</div>
      </div>

      <div className="inputContainer">
        <div className="SelfHeadContainer">
          <div>신분증과 얼굴을 대조중입니다...</div>
        </div>

        <div className="videoContainer">
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </div>

        <div className="btn">
          <div className="buttonContainer">
            <div className="button">
              <button type="button" onClick={showAndCapture}>
                촬영
              </button>
              {modalOpen && (
                <AccountCreateSelfModal setModalOpen={setModalOpen} />
              )}
            </div>
          </div>
        </div>

        <div className="btn">
          <div className="buttonContainer">
            <div className="button" onClick={handleClickBack}>
              <button type="button">뒤로</button>
            </div>
          </div>

          <div className="buttonContainer">
            <div
              className="button"
              onClick={(sendAccountData, sendImgData, handleClickNext)}
            >
              <button type="button">확인</button>
            </div>
          </div>
        </div>
      </div>
      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreateSelf;
